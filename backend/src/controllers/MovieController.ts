import { Request, Response } from 'express';
import prisma from "../prisma";
import { CustomResponse } from "../helpers/CustomResponse";
import { createMovieValidator, updateMovieValidator } from "../validators/MovieValidator";

//Add new movie
export const createMovie = async (req: Request, res: Response) => {
    const { error } = createMovieValidator.validate(req.body)
    if (error) {
        return CustomResponse.ValidationBadRequest(res, error)
    }
    try {
        const newmovie = req.body;
        const movie = await prisma.movie.create({
            data: {
                ...newmovie,
            }
        })
        return CustomResponse.OperationSuccess(res, movie);
    } catch (error) {
        return CustomResponse.InternalServerError(
            res,
            "An error occurred while adding the movie"
        );
    }
}

//Get all movies with pagination and filter
export const getAllMovies = async (req: Request, res: Response) => {
    const { page, pageSize, title, genre } = req.query;

    const skip =
        page && pageSize ? (Number(page) - 1) * Number(pageSize) : undefined;
    const take = page && pageSize ? Number(pageSize) : undefined;

    try {
        let filters = {}
        filters = {
            ...(title && title !== "null"
                ? { title: { contains: title, mode: "insensitive" }, } : {}
            ),

            ...(genre && genre !== "null"
                ? { genre: { has: genre } }
                : {}),
        }

        const movies = await prisma.movie.findMany({
            where: filters,
            orderBy: {
                createdAt: "desc"
            },
            skip,
            take,
        })

        //Get total count of movies
        const totalCount = await prisma.movie.count({
            where: filters
        });
        const responsePayload = {
            data: movies,
            meta:
                page && pageSize
                    ? {
                        totalCount,
                        totalPages: Math.ceil(totalCount / (take ?? 1)), // Calculate pages only when pagination is applied
                        currentPage: Number(page),
                        pageSize: Number(pageSize),
                    }
                    : {
                        totalCount,
                    },
        };
        return CustomResponse.FetchPagedSucess(res, responsePayload);
    }
    catch (error) {
        return CustomResponse.InternalServerError(
            res,
            "An error occurred while fetching the movies"
        );
    }
}

// Get movie by id
export const getMovieById = async (req: Request, res: Response) => {
    const { id } = req.query
    try {
        const movie = await prisma.movie.findUnique({
            where: { id: Number(id) }
        })
        if (!movie) {
            return CustomResponse.NotFound(res, "Movie Not found")
        }
        return CustomResponse.FetchSucess(res, movie)
    } catch (error) {
        return CustomResponse.InternalServerError(
            res,
            "An error occurred while fetching the movie"
        );
    }
}

// Update Movie
export const updateMovie = async (req: Request, res: Response) => {
    const { id } = req.query;
    const { error } = updateMovieValidator.validate(req.body);

    if (error) {
        return CustomResponse.ValidationBadRequest(res, error);
    }

    try {
        const movie = await prisma.movie.findUnique({
            where: { id: Number(id) }
        });

        if (!movie) {
            return CustomResponse.NotFound(res, "Movie not found");
        }

        const updatedMovie = await prisma.movie.update({
            where: { id: Number(id) },
            data: { ...req.body }
        });

        return CustomResponse.OperationSuccess(res, updatedMovie);
    } catch (error) {
        return CustomResponse.InternalServerError(
            res,
            "An error occurred while updating the movie"
        );
    }
};


//Delet movie
export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const movie = await prisma.movie.findUnique({
            where: { id: Number(id) }
        })

        if (!movie) {
            return CustomResponse.NotFound(res, "Movie Not found")
        }
        await prisma.movie.delete({
            where: { id: Number(id) }
        })
        return CustomResponse.DeleteSuccess(res)
    } catch (error) {
        return CustomResponse.InternalServerError(
            res,
            "An error occurred while deleting the movie"
        );
    }
}