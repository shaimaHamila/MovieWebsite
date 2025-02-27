import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
import { AppThunk, RootState } from "../../store/store";
import { api } from "../../api/AxiosConfig";
import { ApiResponse } from "../../types/ApiResponse";

interface MovieState {
  status: "idle" | "loading" | "failed";
  movies: Partial<Movie>[];
  firstFiveMovies: Partial<Movie>[];
  favoriteMovies: Partial<Movie>[];
  page: number | undefined;
  pageSize: number | undefined;
  totalPages: number;
  filter: any;
  totalCount: number | null | undefined;
  error?: string;
}

const initialState: MovieState = {
  status: "idle",
  movies: [],
  favoriteMovies: [],
  firstFiveMovies: [],
  page: 1,
  pageSize: 8,
  totalPages: 0,
  filter: {},
  totalCount: null,
  error: "",
};

export const fetchMovies = createAsyncThunk<ApiResponse<Partial<Movie>[]>, void>("movie/fetch", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  try {
    const response = await api.get<ApiResponse<Partial<Movie>[]>>("/movie", {
      params: {
        page: state.movie.page,
        pageSize: state.movie.pageSize,
        ...(state.movie.filter?.title && { title: state.movie.filter.title }),
        ...(state.movie.filter?.genre && { genre: state.movie.filter.genre }),
      },
    });
    return response.data;
  } catch (error) {
    //add an alert
    throw error;
  }
});
export const fetchFirstFiveMovies = createAsyncThunk<ApiResponse<Partial<Movie>[]>, void>(
  "movie/fetch/fiveMovies",
  async () => {
    try {
      const response = await api.get<ApiResponse<Partial<Movie>[]>>("/movie", {
        params: {
          page: 1,
          pageSize: 5,
        },
      });
      return response.data;
    } catch (error) {
      //add an alert
      throw error;
    }
  },
);

export const fetchFavoriteMovies = createAsyncThunk<ApiResponse<Partial<Movie>[]>, void>(
  "movie/fetch/favorites",
  async () => {
    try {
      const response = await api.get<ApiResponse<Partial<Movie>[]>>("/movie/favorites");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const updateMovie = createAsyncThunk<any, Partial<Movie>>("movie/update", async (movieToUpdate) => {
  const { id, ...movieToUpdateWithoutId } = movieToUpdate;
  try {
    const response = await api.put<any>("/movie/update", movieToUpdateWithoutId, {
      params: { id },
    });
    console.log("updatee", response.data.data);
    return response?.data?.data;
  } catch (error) {
    throw error;
  }
});

export const getMovieById = createAsyncThunk<Partial<Movie>, number>("movie/getMovieById", async (id) => {
  try {
    const response = await api.get("/movie/update", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteMovie = createAsyncThunk<any, number>("movie/delete", async (id) => {
  try {
    const response = await api.delete(`/movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      const totalPages = Math.ceil(state?.totalCount! / state?.pageSize!);
      if (action.payload > totalPages || action.payload < 1) {
        return;
      }
      state.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
      state.page = 1;
    },
    setGenreFilter(state, action: PayloadAction<string>) {
      state.filter.genre = action.payload;
    },
    setTitleFilter(state, action: PayloadAction<string>) {
      state.filter.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch movies
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.movies = action?.payload?.data!;
        state.page = action?.payload?.meta?.currentPage;
        state.pageSize = action?.payload?.meta?.pageSize;
        state.totalPages = action?.payload?.meta?.totalPages!;
        state.totalCount = action?.payload?.meta?.totalCount;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })
      //fetch first five movies
      .addCase(fetchFirstFiveMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.firstFiveMovies = action?.payload?.data!;
      })
      //fetch favorite movies
      .addCase(fetchFavoriteMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.favoriteMovies = action?.payload?.data!;
      })
      .addCase(fetchFavoriteMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })

      // Update Movie
      .addCase(updateMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.status = "idle";

        //Update movies list
        const index = state?.movies?.findIndex((movie) => movie?.id === action.payload?.id);
        if (index !== -1) {
          // check if the movie is different from the one in the list
          if (JSON.stringify(state?.movies[index]) !== JSON.stringify(action.payload)) {
            state.movies[index] = action.payload;
            //TODO add alert
          }
        }

        //Update favorites movies list
        if (state.favoriteMovies) {
          state.favoriteMovies = state.favoriteMovies.filter((movie) => movie?.id !== action.payload?.id);
        }

        //Update First 5 movies list
        const index2 = state?.firstFiveMovies?.findIndex((movie) => movie?.id === action.payload?.id);
        if (index2 !== -1) {
          // check if the movie is different from the one in the list
          if (JSON.stringify(state?.firstFiveMovies[index2]) !== JSON.stringify(action.payload)) {
            state.firstFiveMovies[index2] = action.payload;
          }
        }
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to update movie";
      })

      // Get Movie By ID
      .addCase(getMovieById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.status = "idle";
        if (state.movies) {
          const existingMovieIndex = state.movies.findIndex((movie) => movie?.id === action.payload.id);
          if (existingMovieIndex !== -1) {
            state.movies[existingMovieIndex] = action.payload;
          } else {
            state.movies.push(action?.payload);
          }
        }
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch movie details";
      })

      // Delete Movie
      .addCase(deleteMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.status = "idle";
        if (state.movies) {
          state.movies = state.movies.filter((movie) => movie?.id !== action?.meta?.arg);
        }
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to delete movie";
      });
  },
});

export const setPage =
  (page: number): AppThunk =>
  (dispatch, _getState) => {
    dispatch(movieSlice.actions.setPage(page));
    dispatch(fetchMovies());
  };

export const setLimit =
  (pageSize: number): AppThunk =>
  (dispatch, _getState) => {
    dispatch(movieSlice.actions.setPageSize(pageSize));
    dispatch(fetchMovies());
  };
export const setTitleFilter =
  (filteredTitle: string): AppThunk =>
  (dispatch, _getState) => {
    dispatch(movieSlice.actions.setTitleFilter(filteredTitle));
    dispatch(fetchMovies());
  };
export const setGenreFilter =
  (filteredGenre: string): AppThunk =>
  (dispatch, _getState) => {
    dispatch(movieSlice.actions.setGenreFilter(filteredGenre));
    dispatch(fetchMovies());
  };

export const selectMovies = (state: RootState) => state.movie.movies;

export const selectFavoriteMovies = (state: RootState) => state.movie.favoriteMovies;

export const selectFirstFiveMovies = (state: RootState) => state.movie.firstFiveMovies;

export const selectStatus = (state: RootState) => state.movie.status;

export const selectpage = (state: RootState) => state.movie.page;

export const selectTotalCount = (state: RootState) => state.movie.totalCount;

export const selectTotalPages = (state: RootState) => state.movie.totalPages;

export const selectError = (state: RootState) => state.movie.error;

export default movieSlice.reducer;
