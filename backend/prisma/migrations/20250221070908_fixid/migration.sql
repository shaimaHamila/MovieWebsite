/*
  Warnings:

  - The `genre` column on the `movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "movie" DROP COLUMN "genre",
ADD COLUMN     "genre" "Genre"[];
