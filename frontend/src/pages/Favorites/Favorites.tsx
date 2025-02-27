import { useSelector } from "react-redux";
import MovieCard from "../../components/molecules/MovieCard/MovieCard";
import { fetchFavoriteMovies, selectFavoriteMovies, updateMovie } from "../../features/movie/movieSlice";
import { useEffect } from "react";
import { store } from "../../store/store";
import { Movie } from "../../types/Movie";
import EmptyProductList from "../../components/molecules/EmptyProductList/EmptyProductList";
import { useNavigate } from "react-router-dom";

const Favorites: React.FC = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  const navigate = useNavigate();

  const handleLike = (movie: Partial<Movie>) => {
    store.dispatch(updateMovie({ id: movie?.id, isLiked: !movie?.isLiked }));
    store.dispatch(fetchFavoriteMovies());
  };

  const handleSeeDetails = (movie: Partial<Movie>) => {
    navigate(`/movie-details/${movie.id}`);
  };

  useEffect(() => {
    store.dispatch(fetchFavoriteMovies());
  }, []);
  return (
    <div className='mt-36 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className=' text-4xl font-bold uppercase'>
        <span className='text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent'>
          Your Favorit Movies
        </span>
      </div>
      <h4 className='mt-10 text-lg '>Total liked movies: {favoriteMovies?.length}</h4>
      {/* Display filtered movies */}
      <div>
        {favoriteMovies.length == 0 ? (
          <div className='flex justify-center'>
            <EmptyProductList />
          </div>
        ) : (
          <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center'>
            {favoriteMovies.map((movie, key) => (
              <MovieCard key={key} movie={movie} onLike={handleLike} onSeeDetails={handleSeeDetails} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Favorites;
