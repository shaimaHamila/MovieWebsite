import React, { useState } from "react";
import Slider from "react-slick";
import { Movie } from "../../../types/Movie";
import { ArrowRightCircleIcon, HeartIcon } from "@heroicons/react/24/solid";
import "./MovieSlider.css";

interface MovieSliderProps {
  movies: Partial<Movie>[];
}

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

const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className='relative'>
      <Slider {...sliderSettings}>
        {movies.map((movie, index) => (
          <div key={index} className={`relative w-full max-h-[900px] h-[700px] bg-cover bg-center movie-slide${index}`}>
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
