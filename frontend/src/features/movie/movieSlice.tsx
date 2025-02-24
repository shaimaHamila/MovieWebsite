import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
import { RootState } from "../../store/store";
import { api } from "../../api/AxiosConfig";
import { ApiResponse } from "../../types/ApiResponse";

interface MovieState {
  status: "idle" | "loading" | "failed";
  movies: Partial<Movie>[];
  page: number | undefined;
  pageSize: number | undefined;
  filter: any;
  totalCount: number | null | undefined;
  error?: string;
}

const initialState: MovieState = {
  status: "idle",
  movies: [],
  page: 1,
  pageSize: 10,
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
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    //add an alert
    throw error;
  }
});

export const updateMovie = createAsyncThunk<Partial<Movie>, Partial<Movie>>("movie/update", async (movieToUpdate) => {
  try {
    const response = await api.put<Partial<Movie>>("/movie/update", movieToUpdate, {
      params: { id: movieToUpdate.id },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getMovieById = createAsyncThunk<Partial<Movie>, number>("movie/getMovieById", async (id) => {
  try {
    const response = await api.get("/movie/update", {
      params: { id },
    });
    console.log(response.data);
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
  reducers: {},
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
        state.totalCount = action?.payload?.meta?.totalCount;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })

      // Update Movie
      .addCase(updateMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.status = "idle";

        const index = state?.movies?.findIndex((movie) => movie?.id === action.payload.id);
        if (index !== -1) {
          // check if the order is different from the one in the list
          if (JSON.stringify(state?.movies[index]) !== JSON.stringify(action.payload)) {
            state.movies[index] = action.payload;
            //TODO add alert
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

export const selectMovies = (state: RootState) => state.movie.movies;

export const selectStatus = (state: RootState) => state.movie.status;

export const selectError = (state: RootState) => state.movie.error;

export default movieSlice.reducer;
