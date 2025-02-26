import { useEffect, useState } from "react";
import MovieCard from "../../components/molecules/MovieCard/MovieCard";
import MovieSlider from "../../components/molecules/MovieSlider/MovieSlider";
import { Genre } from "../../types/Movie";
import "./Home.css";
import MovieFilter from "../../components/molecules/MovieFilter/MovieFilter";
import { useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectpage,
  selectTotalCount,
  selectTotalPages,
  setGenreFilter,
  setPage,
  setTitleFilter,
} from "../../features/movie/movieSlice";
import { store } from "../../store/store";
import Pagination from "../../components/molecules/Pagination/Pagination";

const Home: React.FC = () => {
  const movies = useSelector(selectMovies);
  const totalMovies = useSelector(selectTotalCount);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectpage);

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const filterByGenre = (selectedGenre: Genre | "") => {
    console.log(selectedGenre);
    store.dispatch(setGenreFilter(selectedGenre));
  };
  const handelSearch = (title: string) => {
    store.dispatch(setTitleFilter(title));
  };
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSeeDetails = () => {
    // Implement the functionality for "See details"
    console.log("See details clicked");
  };

  useEffect(() => {
    store.dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <MovieSlider movies={movies.slice(0, 5)} />
      <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-16'>
        <div className=' text-4xl font-bold uppercase'>
          <p className='text-white text-4xl'>Find Movies </p>
          <span className='text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent'>
            TV Shows And More
          </span>
        </div>

        <MovieFilter filterByGenre={filterByGenre} onSearch={(title) => handelSearch(title)} />

        {/* Display filtered movies */}
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center'>
          {movies.map((movie, key) => (
            <MovieCard key={key} movie={movie} onLike={handleLike} onSeeDetails={handleSeeDetails} />
          ))}
        </div>
        {/* Pagination Component */}
        <div className='mt-8 flex justify-center'>
          <Pagination
            currentPage={currentPage || 1}
            totalPages={totalPages || 0}
            onPageChange={(pageNumber) => store.dispatch(setPage(pageNumber))}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
