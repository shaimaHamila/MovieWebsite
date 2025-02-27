import express from "express";
import { createMovie, deleteMovie, getAllMovies, getFavoriteMovies, getMovieById, updateMovie } from "../controllers/MovieController";

const movieRouter = express.Router();

movieRouter.post("/", createMovie)
movieRouter.get("/", getAllMovies);
movieRouter.get("/favorites", getFavoriteMovies);
movieRouter.get("/getMovieById", getMovieById);
movieRouter.put("/update", updateMovie);
movieRouter.delete("/:id", deleteMovie);

export default movieRouter;