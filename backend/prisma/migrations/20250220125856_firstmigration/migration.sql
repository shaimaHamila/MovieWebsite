-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('ACTION', 'DRAMA', 'COMEDY', 'HORROR', 'SCIFI', 'ROMANCE', 'THRILLER', 'DOCUMENTARY', 'ANIMATION', 'FANTASY');

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "genre" TEXT[],
    "rating" DOUBLE PRECISION,
    "coverUrl" TEXT NOT NULL,
    "duration" INTEGER,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);
