export const InitMovies = async (prismaClient: any) => {
    // Initialize Movies
    await prismaClient.movie.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            title: "Inception",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
            releaseDate: new Date("2010-07-16"),
            genre: ["Sci-Fi", "Action"],
            rating: 8.8,
            isLiked: false,
            coverUrl: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
            duration: 148,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            title: "Interstellar",
            description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
            releaseDate: new Date("2014-11-07"),
            genre: ["Sci-Fi", "Adventure", "Drama"],
            rating: 8.6,
            isLiked: true,
            coverUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
            duration: 169,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            title: "The Dark Knight",
            description: "Batman faces the Joker in a battle for Gotham's soul.",
            releaseDate: new Date("2008-07-18"),
            genre: ["Action", "Drama", "Crime"],
            rating: 9.0,
            isLiked: false,
            coverUrl: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
            duration: 152,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            title: "The Dark Knight Rises",
            description: "Eight years after the events of The Dark Knight, Batman faces a new enemy, Bane.",
            releaseDate: new Date("2012-07-20"),
            genre: ["Action", "Crime", "Drama"],
            rating: 8.4,
            isLiked: true,
            coverUrl: "https://collider.com/wp-content/uploads/the-dark-knigh-rises-catwoman-poster.jpg",
            duration: 164,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 5 },
        update: {},
        create: {
            id: 5,
            title: "The Prestige",
            description: "Two magicians engage in a bitter rivalry, attempting to outdo each other with increasingly dangerous tricks.",
            releaseDate: new Date("2006-10-20"),
            genre: ["Drama", "Mystery", "Sci-Fi"],
            rating: 8.5,
            isLiked: true,
            coverUrl: "https://www.nirvanasosyal.com/uploads/20221022_960_01.jpg",
            duration: 130,
        },
    });
}
