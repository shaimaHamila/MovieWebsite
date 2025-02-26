import { useState } from "react";
import MovieCard from "../../components/molecules/MovieCard/MovieCard";
import MovieSlider from "../../components/molecules/MovieSlider/MovieSlider";
import { Genre } from "../../types/Movie";
import "./Home.css";
import MovieFilter from "../../components/molecules/MovieFilter/MovieFilter";
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
  {
    title: "Spider-Man: No Way Home",
    duration: 50,
    description: "Peter Parker faces the consequences of revealing his identity to the world.",
    coverUrl: "./public/png/movie3.png",
    releaseDate: new Date("2021-12-17"),
    rating: 8.3,
    isLike: false,
  },
];

const Home: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
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
      <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-16'>
        <div className=' text-4xl font-bold uppercase'>
          <p className='text-white text-4xl'>Find Movies </p>
          <span className='text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent'>
            TV Shows And More
          </span>
        </div>

        <MovieFilter
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          onSearch={(query) => console.log("Search Query:", query)}
        />

        {/* Display filtered movies */}
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center'>
          {movieData.map((movie, key) => (
            <MovieCard key={key} movie={movie} onLike={handleLike} onSeeDetails={handleSeeDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
