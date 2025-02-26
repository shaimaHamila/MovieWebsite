import React, { useState } from "react";
import Slider from "react-slick";
import { Genre, Movie } from "../../../types/Movie";
import { ArrowRightCircleIcon, HeartIcon } from "@heroicons/react/24/solid";
import "./MovieSlider.css";

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const MovieSlider: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const movies: Partial<Movie>[] = [
    {
      title: "The Dark Knight",
      genre: [Genre.ACTION, Genre.DRAMA],
      rating: 9.0,
      duration: 152,
      description:
        "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      coverUrl: "./public/png/movie3.png",
    },
    {
      title: "Interstellar",
      genre: [Genre.ACTION, Genre.DRAMA],
      rating: 8.6,
      duration: 169,
      description:
        "A team of explorers must find a new habitable planet to ensure humanity's survival after Earth becomes uninhabitable due to climate change.",
      coverUrl: "./public/png/movie4.png",
    },
    {
      title: "Inception",
      genre: [Genre.ACTION, Genre.DRAMA],
      rating: 8.8,
      duration: 148,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      coverUrl: "./public/png/movie2.png",
    },
    {
      title: "Interstellar",
      genre: [Genre.ACTION, Genre.DRAMA],
      rating: 8.6,
      duration: 169,
      description:
        "A team of explorers must find a new habitable planet to ensure humanity's survival after Earth becomes uninhabitable due to climate change.",
      coverUrl: "./public/png/movie5.png",
    },
    {
      title: "Interstellar",
      genre: [Genre.ACTION, Genre.DRAMA],
      rating: 8.6,
      duration: 169,
      description:
        "A team of explorers must find a new habitable planet to ensure humanity's survival after Earth becomes uninhabitable due to climate change.",
      coverUrl: "./public/png/movie1.png",
    },
  ];

  return (
    <div className='relative'>
      <Slider {...sliderSettings}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${movie.coverUrl})`,
            }}
            className={`relative w-full max-h-[900px] h-[700px] bg-cover bg-center movie-slide${index}`}
          >
            <div className='absolute inset-0'></div>
            <div className='absolute bottom-1/4  left-1/2 transform -translate-x-1/2 text-left text-white sm:px-6 px-4 w-full max-w-3xl mx-auto'>
              <h2 className='text-4xl font-bold'>{movie.title}</h2>
              <p className='text-xl mt-4'>{movie.description}</p>
              <div className='mt-4 flex'>
                <button
                  className={
                    "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition flex items-center gap-2 mr-4"
                  }
                >
                  See Details
                  <ArrowRightCircleIcon className='h-6 w-6 text-white' />
                </button>
                <button
                  className={
                    "px-4 py-2 bg-white bg-opacity-10 border border-white text-white rounded-md hover:bg-red-600  hover:bg-opacity-30 transition flex items-center gap-2 mr-4"
                  }
                  onClick={() => setIsLiked(!isLiked)}
                >
                  {isLiked ? " Favorit" : "Add to Favorites"}
                  <HeartIcon className={`${isLiked ? "h-6 w-6 text-red-600 border-red-600" : "h-6 w-6 text-white"}`} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
