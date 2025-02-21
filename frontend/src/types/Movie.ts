export type Movie = {
    id: number;
    title: string;
    description: string | null;
    releaseDate: Date;
    genre: Genre[];
    rating: number | null;
    coverUrl: string;
    duration: number | null;
    isLiked: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export enum Genre {
    ACTION = "ACTION",
    DRAMA = "DRAMA",
    COMEDY = "COMEDY",
    HORROR = "HORROR",
    SCIFI = "SCIFI",
    ROMANCE = "ROMANCE",
    THRILLER = "THRILLER",
    DOCUMENTARY = "DOCUMENTARY",
    ANIMATION = "ANIMATION",
    FANTASY = "FANTASY",
}
