import express from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/MovieController";

const movieRouter = express.Router();

movieRouter.post("/", createMovie)
movieRouter.get("/", getAllMovies);
movieRouter.get("/", getMovieById);
movieRouter.put("/update", updateMovie);
movieRouter.delete("/:id", deleteMovie);

export default movieRouter;