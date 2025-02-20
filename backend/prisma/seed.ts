import prisma from "../src/prisma";
import { InitMovies } from "./seeds/movie.seed";


async function main() {
    // Initialize roles
    await InitMovies(prisma);

}

// Execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1); // Exit the process with a failure code
    })
    .finally(async () => {
        // Close the Prisma Client at the end
        await prisma.$disconnect();
    });