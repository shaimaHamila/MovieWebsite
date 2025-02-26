export const InitMovies = async (prismaClient: any) => {
    // Initialize Movies
    await prismaClient.movie.upsert({
        where: { id: 1 },
        update: {},
        create: {
            title: "Inception",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
            releaseDate: new Date("2010-07-16T00:00:00.000Z"),
            genre: ["SCIFI", "ACTION"], // Correct format for enum values
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
            title: "Interstellar",
            description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
            releaseDate: new Date("2014-11-07T00:00:00.000Z"),
            genre: ["SCIFI", "DRAMA"], // Correct format for enum values
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
            title: "The Revenant",
            description: "Batman faces the Joker in a battle for Gotham's soul.",
            releaseDate: new Date("2008-07-18T00:00:00.000Z"),
            genre: ["ACTION", "DRAMA", "THRILLER"], // Correct format for enum values
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
            title: "The Dark Knight Rises",
            description: "Eight years after the events of The Dark Knight, Batman faces a new enemy, Bane.",
            releaseDate: new Date("2012-07-20T00:00:00.000Z"),
            genre: ["ACTION", "THRILLER", "DRAMA"], // Correct format for enum values
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
            title: "The Prestige",
            description: "Two magicians engage in a bitter rivalry, attempting to outdo each other with increasingly dangerous tricks.",
            releaseDate: new Date("2006-10-20T00:00:00.000Z"),
            genre: ["DRAMA", "HORROR", "SCIFI"], // Correct format for enum values
            rating: 8.5,
            isLiked: true,
            coverUrl: "https://www.nirvanasosyal.com/uploads/20221022_960_01.jpg",
            duration: 130,
        },
    });
    await prismaClient.movie.upsert({
        where: { id: 6 },
        update: {},
        create: {
            title: "Gladiator",
            description: "A skilled thief is given a chance to have his criminal record erased in exchange for implanting an idea into a target's subconscious.",
            releaseDate: new Date("2010-07-16T00:00:00.000Z"),
            genre: ["SCIFI", "THRILLER"],
            rating: 8.8,
            isLiked: true,
            coverUrl: "https://lh7-us.googleusercontent.com/7VrYodyZ7Jp9900OLL6FFoyU2ZCYK3le3NU6x2S8emqRHOGjWTGLGrkowebBjSHNnDhdVozzgYhKZi4tpuC5mRt-ir8ryNhf8DcciA9Ov1jOc1oxlbRskFQgya78frtFibTO0ONnlmc6CvTZXc84L-o",
            duration: 148,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 7 },
        update: {},
        create: {
            title: "The Knight",
            description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            releaseDate: new Date("2008-07-18T00:00:00.000Z"),
            genre: ["ACTION", "THRILLER"],
            rating: 9.0,
            isLiked: true,
            coverUrl: "https://lumiere-a.akamaihd.net/v1/images/p_cruella_21672_ba40c762.jpeg",
            duration: 152,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 8 },
        update: {},
        create: {
            title: "The Matrix",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            releaseDate: new Date("1999-03-31T00:00:00.000Z"),
            genre: ["SCIFI", "ACTION"],
            rating: 8.7,
            isLiked: true,
            coverUrl: "https://pm1.aminoapps.com/6541/e58edf6ab757b5fb570fb53bdb5dac7c7e2d0c67_00.jpg",
            duration: 136,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 9 },
        update: {},
        create: {
            title: "The Godfather",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            releaseDate: new Date("1972-03-24T00:00:00.000Z"),
            genre: ["DRAMA", "FANTASY"],
            rating: 9.2,
            isLiked: true,
            coverUrl: "https://i.pinimg.com/originals/5f/f0/af/5ff0af99c2c5c4f79ba306da9153c8ac.jpg",
            duration: 175,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 10 },
        update: {},
        create: {
            title: "Forrest Gump",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an extraordinary life story.",
            releaseDate: new Date("1994-07-06T00:00:00.000Z"),
            genre: ["DRAMA", "COMEDY"],
            rating: 8.8,
            isLiked: true,
            coverUrl: "https://i.pinimg.com/736x/5e/fa/63/5efa63b54ff96796a20db50004fddd86.jpg",
            duration: 142,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 11 },
        update: {},
        create: {
            title: "Avengers: Endgame",
            description: "After the devastating events of Avengers: Infinity War, the Avengers assemble once again to reverse Thanos' actions and restore balance to the universe.",
            releaseDate: new Date("2019-04-26T00:00:00.000Z"),
            genre: ["ACTION", "SCIFI"],
            rating: 8.4,
            isLiked: true,
            coverUrl: "https://img.freepik.com/premium-psd/sci-fi-movie-poster_841014-35446.jpg?w=360",
            duration: 181,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 12 },
        update: {},
        create: {
            title: "The Lion King",
            description: "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
            releaseDate: new Date("1994-06-15T00:00:00.000Z"),
            genre: ["ANIMATION", "DRAMA"],
            rating: 8.5,
            isLiked: true,
            coverUrl: "https://img.freepik.com/premium-psd/movie-poster-movie-starring-actor_1144036-5314.jpg",
            duration: 88,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 13 },
        update: {},
        create: {
            title: "The Shining",
            description: "A family heads to an isolated hotel for the winter where an evil spiritual presence drives the father to violence, while his psychic son sees horrific forebodings from the past and of the future.",
            releaseDate: new Date("1980-05-23T00:00:00.000Z"),
            genre: ["HORROR", "THRILLER"],
            rating: 8.4,
            isLiked: true,
            coverUrl: "https://img.freepik.com/premium-psd/movie-poster-template_1144036-5399.jpg?w=360",
            duration: 146,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 14 },
        update: {},
        create: {
            title: "Titanic",
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            releaseDate: new Date("1997-12-19T00:00:00.000Z"),
            genre: ["ROMANCE", "DRAMA"],
            rating: 7.8,
            isLiked: true,
            coverUrl: "https://img.freepik.com/premium-photo/movie-poster-action-film-starring-actor_1144036-6097.jpg?w=360",
            duration: 195,
        },
    });

    await prismaClient.movie.upsert({
        where: { id: 15 },
        update: {},
        create: {
            title: "Parasite",
            description: "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.",
            releaseDate: new Date("2019-05-30T00:00:00.000Z"),
            genre: ["DRAMA", "THRILLER"],
            rating: 8.6,
            isLiked: true,
            coverUrl: "https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_payoff-18191_8c0c935b.jpeg",
            duration: 132,
        },
    });

};
