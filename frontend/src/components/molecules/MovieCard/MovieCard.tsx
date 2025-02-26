import React from "react";
import { HeartIcon, ArrowRightCircleIcon, ClockIcon, CalendarDaysIcon, StarIcon } from "@heroicons/react/24/solid";
import { Movie } from "../../../types/Movie";
import FormatDate from "../../../helpers/FormatDate";

interface MovieCardProps {
  movie: Partial<Movie>;
  onLike: () => void;
  onSeeDetails: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onLike, onSeeDetails }) => {
  return (
    <div
      className='h-[30rem] max-w-[350px] w-full bg-[#131313] text-white rounded-sm overflow-hidden shadow-lg p-4 relative'
      style={{
        backgroundImage: `url(${movie.coverUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className='absolute inset-0 rounded-sm'
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, #1A1D29 80%)",
        }}
      ></div>

      {/* Movie Card Content - Positioned at the bottom */}
      <div className='absolute bottom-0 left-0 right-0 p-4 z-10'>
        {/* Buttons */}
        <div className='flex flex-wrap gap-3 justify-between mt-4 max-w-[250px]'>
          <button
            className='min-w-[110px] flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-red-500 transition'
            onClick={onSeeDetails}
          >
            <ArrowRightCircleIcon className='h-4 w-4' />
            See details
          </button>

          <button
            className={`min-w-[110px] flex items-center gap-2 px-3 py-1.5 text-sm border-2 rounded-lg transition text-white ${
              movie.isLiked ? "border-red-600" : "border-white"
            }`}
            onClick={onLike}
          >
            <HeartIcon className={`${movie.isLiked ? "h-4 w-4 text-red-600" : "h-4 w-4 text-white"} `} />
            {movie.isLiked ? "Favorit" : "Add Fav"}
          </button>
        </div>

        {/* Movie Details */}
        <div className='mt-4'>
          <h3 className='flex items-center gap-2 text-lg font-bold flex-wrap'>
            <p className='line-clamp-1'>🎬 {movie.title}</p>

            <span className='flex items-center gap-1 text-sm font-medium text-gray-300'>
              <ClockIcon className='h-4 w-4' />
              {movie.duration} H
            </span>
            <span className='flex items-center gap-1 text-sm font-medium text-gray-300'>
              <CalendarDaysIcon className='h-4 w-4' />
              {FormatDate(movie.releaseDate)}
            </span>
            <span className='flex items-center gap-1 text-sm font-medium text-gray-300'>
              <StarIcon className='h-4 w-4 text-yellow-500' />
              {movie.rating !== null ? movie.rating : "N/A"}
            </span>
          </h3>
          <p className='text-sm text-gray-400 mt-2 line-clamp-2'>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
