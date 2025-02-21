import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
import { RootState } from "../../store/store";

interface MovieState {
  status: "idle" | "loading" | "failed";
  movies: Partial<Movie[]>;
  error?: string;
}

const initialState: MovieState = {
  status: "idle",
  movies: [],
  error: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectMovies = (state: RootState) => state.movie.movies;

export const selectStatus = (state: RootState) => state.movie.status;

export const selectError = (state: RootState) => state.movie.error;

export default movieSlice.reducer;
