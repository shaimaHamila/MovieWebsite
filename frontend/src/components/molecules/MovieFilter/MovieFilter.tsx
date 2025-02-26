import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Genre } from "../../../types/Movie";

interface MovieFilterProps {
  selectedGenre: Genre | "";
  setSelectedGenre: (genre: Genre | "") => void;
  onSearch: (query: string) => void;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ selectedGenre, setSelectedGenre, onSearch }) => {
  return (
    <div className='flex gap-4 mt-16'>
      {/* Search Input */}
      <div className='min-w-60 w-80'>
        <label htmlFor='default-search' className='block mb-1 text-sm font-medium text-gray-300'>
          Search for a movie
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-3 ps-10 text-sm border rounded-lg dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
            placeholder='Search for movie'
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Genre Filter */}
      <div className='min-w-40'>
        <label htmlFor='genre-select' className='block mb-1 text-sm font-medium text-gray-300'>
          Select Genre
        </label>
        <select
          id='genre-select'
          className='h-[46px] border text-sm rounded-lg block w-full p-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value as Genre | "")}
        >
          <option value=''>All</option>
          {Object.values(Genre).map((genre, key) => (
            <option key={key} value={genre} className='cursor-pointer'>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MovieFilter;
