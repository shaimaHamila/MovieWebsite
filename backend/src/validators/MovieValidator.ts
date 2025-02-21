import { Genre } from "@prisma/client";
import Joi from "joi";

// Create Movie Validator
export const createMovieValidator = Joi.object({
    title: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').optional(),
    releaseDate: Joi.date().required(),
    genre: Joi.array().items(Joi.string().valid(...Object.values(Genre))).min(1).required(),
    coverUrl: Joi.string().required(),
    duration: Joi.number().integer().positive().allow(null).optional()
});

// Update Movie Validator
export const updateMovieValidator = Joi.object({
    title: Joi.string().max(255).optional(),
    description: Joi.string().allow(null, '').optional(),
    releaseDate: Joi.date().optional(),
    genre: Joi.array().items(Joi.string().valid(...Object.values(Genre))).min(1).optional(),
    rating: Joi.number().min(0).max(10).allow(null).optional(),
    coverUrl: Joi.string().uri().optional(),
    duration: Joi.number().integer().positive().allow(null).optional(),
    isLiked: Joi.boolean().default(false),
});
