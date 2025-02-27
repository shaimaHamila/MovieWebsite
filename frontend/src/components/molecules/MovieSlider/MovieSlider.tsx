import React from "react";
import Slider from "react-slick";
import { Movie } from "../../../types/Movie";
import { ArrowRightCircleIcon, CalendarDaysIcon, ClockIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import "./MovieSlider.css";
import FormatDate from "../../../helpers/FormatDate";

interface MovieSliderProps {
  movies: Partial<Movie>[];
  onLike: (movie: Partial<Movie>) => void;
  onSeeDetails: (movie: Partial<Movie>) => void;
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

const MovieSlider: React.FC<MovieSliderProps> = ({ movies, onLike, onSeeDetails }) => {
  return (
    <div className='relative'>
      <Slider {...sliderSettings}>
        {movies.map((movie, index) => (
          <div key={index} className={`relative w-full max-h-[900px] h-[700px] bg-cover bg-center movie-slide${index}`}>
            <div className='absolute inset-0'></div>
            <div
              className='bg-gradient-to-r from-black/30 to-black/0
 bg-opacity-50 p-6 rounded-md absolute bottom-1/4  left-1/2 transform -translate-x-1/2 text-left text-white sm:px-6 px-4 w-full max-w-3xl mx-auto'
            >
              <h2 className='text-4xl font-bold'>{movie.title}</h2>
              <div className='flex flex-wrap gap-4 mt-2'>
                <span className='flex items-center gap-1 text-sm font-medium text-gray-100'>
                  <ClockIcon className='h-4 w-4' />
                  {movie.duration} H
                </span>
                <span className='flex items-center gap-1 text-sm font-medium text-gray-100'>
                  <CalendarDaysIcon className='h-4 w-4' />
                  {FormatDate(movie.releaseDate)}
                </span>
                <span className='flex items-center gap-1 text-sm font-medium text-gray-100'>
                  <StarIcon className='h-4 w-4 text-yellow-500' />
                  {movie.rating !== null ? movie.rating : "N/A"}
                </span>
              </div>

              <p className='text-xl mt-2'>{movie.description}</p>
              <div className='mt-4 flex flex-wrap gap-4'>
                <button
                  onClick={() => onSeeDetails(movie)}
                  className={
                    "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition flex items-center gap-2 mr-4"
                  }
                >
                  <ArrowRightCircleIcon className='h-6 w-6 text-white' />
                  See Details
                </button>
                <button
                  className={
                    "px-4 py-2 bg-white bg-opacity-10 border border-white text-white rounded-md hover:bg-red-600 hover:bg-opacity-30 transition flex items-center gap-2 mr-4"
                  }
                  onClick={() => onLike(movie)}
                >
                  <HeartIcon
                    className={`${movie.isLiked ? "h-6 w-6 text-red-600 border-red-600" : "h-6 w-6 text-white"}`}
                  />
                  {movie.isLiked ? "Unfavorite it" : "Add Fav"}
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
