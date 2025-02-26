import { useState } from "react";
import MovieCard from "../../components/molecules/MovieCard/MovieCard";
import MovieSlider from "../../components/molecules/MovieSlider/MovieSlider";
import { Genre } from "../../types/Movie";

const movieData = [
  {
    title: "Black Widow",
    duration: 30,
    description:
      "Natasha Romanoff, alias Black Widow, lucha contra una peligrosa conspiración mientras enfrenta su peor batalla hasta ahora: el pasado que dejó atrás antes de convertirse en vengadora.",
    coverUrl: "./public/png/movie1.png",
    releaseDate: new Date("2021-07-09"),
    rating: 6.9,
    isLike: true,
  },
  {
    title: "Avengers: Endgame",
    duration: 60,
    description: "The Avengers work to reverse the damage caused by Thanos.",
    coverUrl: "./public/png/movie2.png",
    releaseDate: new Date("2019-04-26"),
    rating: 8.4,
    isLike: false,
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 50,
    description: "Peter Parker faces the consequences of revealing his identity to the world.",
    coverUrl: "./public/png/movie3.png",
    releaseDate: new Date("2021-12-17"),
    rating: 8.3,
    isLike: true,
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 50,
    description: "Peter Parker faces the consequences of revealing his identity to the world.",
    coverUrl: "./public/png/movie3.png",
    releaseDate: new Date("2021-12-17"),
    rating: 8.3,
    isLike: false,
  },
  // Add more movies as needed
];

const Home: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Genre | "">("");

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSeeDetails = () => {
    // Implement the functionality for "See details"
    console.log("See details clicked");
  };

  return (
    <div>
      <MovieSlider />
      <div className='container'>
        {/* Search and Select */}
        {/* Search and Genre Select */}
        <div className='flex gap-4'>
          {/* Search input */}
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search By title'
            className='p-2 border border-gray-300 rounded'
          />

          {/* Genre select */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value as Genre | "")}
            className='p-2 border border-gray-300 rounded bg-white text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out'
          >
            <option value=''>All</option>
            {Object.values(Genre).map((genre) => (
              <option key={genre} value={genre} className='cursor-pointer'>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Display filtered movies */}
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {movieData.map((movie) => (
            <MovieCard key={movie.title} movie={movie} onLike={handleLike} onSeeDetails={handleSeeDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
