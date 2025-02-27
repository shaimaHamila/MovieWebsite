import { useEffect } from "react";
import { store } from "../../store/store";
import { getMovieById, selectMovies, updateMovie } from "../../features/movie/movieSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FormatDate from "../../helpers/FormatDate";
import { Movie } from "../../types/Movie";
import {
  ArrowRightCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
  FilmIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

const MovieDetails: React.FC = () => {
  const { id } = useParams(); // Get the id
  const movies = useSelector(selectMovies);
  const movie = movies.find((movie) => movie.id === Number(id)); // Find the selected movie by id

  const handleLike = (movie: Partial<Movie>) => {
    store.dispatch(updateMovie({ id: movie?.id, isLiked: !movie?.isLiked }));
  };

  useEffect(() => {
    if (id) {
      store.dispatch(getMovieById(Number(id)));
    }
  }, [id]);

  return (
    <div className='mt-36 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  text-white'>
      <div className=' shadow-lg rounded-lg  flex flex-col md:flex-row'>
        {/* Movie Cover */}
        <img
          src={movie?.coverUrl}
          alt={movie?.title}
          className='lg-w-full xl	-w-full 2xl-w-full w-60 md:w-1/3 rounded-lg object-cover'
        />

        {/* Movie Information */}
        <div className='md:ml-6 flex-1'>
          <h1 className='text-4xl font-bold text-gray-100 my-4 '>{movie?.title}</h1>

          <div className='mt-2 text-gray-200 flex flex-col gap-3 '>
            <div className=' flex items-center gap-1 flex-wrap my-2'>
              <span className='font-semibold text-white'> Description:</span>
              <span className='text-gray-200 '>{movie?.description || "No description available."}</span>
            </div>

            <div className=' flex items-center gap-1 flex-wrap '>
              <FilmIcon className='h-4 w-4' />
              <span className='font-semibold text-white'> Genres:</span>
              <span className='ml-2 text-gray-300'>{movie?.genre?.map((g) => g).join(", ")}</span>
            </div>

            <div className=' flex items-center gap-1 flex-wrap '>
              <CalendarDaysIcon className='h-4 w-4' />
              <span className='font-semibold text-white'>Release Date: </span> {FormatDate(movie?.releaseDate)}
            </div>

            <div className=' flex items-center gap-1 flex-wrap '>
              <ClockIcon className='h-4 w-4' />
              <span className='font-semibold text-white'>Duration:</span> {movie?.duration} min
            </div>

            <div className=' flex items-center gap-1 flex-wrap'>
              <StarIcon className='h-4 w-4 text-yellow-500' />
              <span className='font-semibold text-white'>Rating:</span>
              <span className='ml-2 text-yellow-500 text-lg'>{movie?.rating !== null ? movie?.rating : "N/A"}</span>
            </div>
          </div>

          <div className='flex flex-wrap gap-1 justify-between mt-4 max-w-[250px]'>
            <button
              className={`min-w-[110px] hover:bg-red-300 hover:bg-opacity-20 flex items-center gap-2 px-3 py-1.5 text-sm border-2 rounded-lg transition text-white ${
                movie?.isLiked ? "border-red-600" : "border-white"
              }`}
              onClick={() => handleLike(movie!)}
            >
              <HeartIcon className={`${movie?.isLiked ? "h-4 w-4 text-red-600" : "h-4 w-4 text-white"} `} />
              {movie?.isLiked ? "Unfavorite it" : "Add Fav"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
