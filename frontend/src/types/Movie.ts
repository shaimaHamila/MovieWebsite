export type Movie = {
    id: number;
    title: string;
    description: string | null;
    releaseDate: string;
    genre: Genre[];
    rating: number | null;
    coverUrl: string;
    duration: number | null;
    isLiked: boolean;
    createdAt: string;
    updatedAt: string;
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
