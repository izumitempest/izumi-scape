
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster?: string;
  category?: 'trending' | 'popular' | 'for-you';
  type?: 'movie' | 'series' | 'animated';
}

interface MovieGridProps {
  movies: Movie[];
  title?: string;
}

const MovieGrid = ({ movies, title }: MovieGridProps) => {
  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
