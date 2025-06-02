
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import MovieGrid from '@/components/MovieGrid';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');

  const category = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    } else if (searchQuery) {
      setActiveCategory('search');
    } else {
      setActiveCategory('all');
    }
  }, [category, searchQuery]);

  // Mock movie data
  const allMovies = [
    { id: '1', title: 'Avatar: The Way of Water', year: 2022, genre: 'Sci-Fi', rating: 8.2, category: 'trending' as const, type: 'movie' as const },
    { id: '2', title: 'Top Gun: Maverick', year: 2022, genre: 'Action', rating: 8.7, category: 'trending' as const, type: 'movie' as const },
    { id: '3', title: 'Spider-Man: No Way Home', year: 2021, genre: 'Action', rating: 8.4, category: 'trending' as const, type: 'movie' as const },
    { id: '4', title: 'The Batman', year: 2022, genre: 'Action', rating: 7.8, category: 'trending' as const, type: 'movie' as const },
    { id: '5', title: 'Dune', year: 2021, genre: 'Sci-Fi', rating: 8.0, category: 'trending' as const, type: 'movie' as const },
    { id: '6', title: 'Stranger Things', year: 2022, genre: 'Drama', rating: 8.9, category: 'popular' as const, type: 'series' as const },
    { id: '7', title: 'The Crown', year: 2022, genre: 'Drama', rating: 8.6, category: 'popular' as const, type: 'series' as const },
    { id: '8', title: 'Arcane', year: 2021, genre: 'Animation', rating: 9.0, category: 'popular' as const, type: 'animated' as const },
    { id: '9', title: 'Breaking Bad', year: 2013, genre: 'Crime', rating: 9.5, category: 'popular' as const, type: 'series' as const },
    { id: '10', title: 'The Witcher', year: 2021, genre: 'Fantasy', rating: 8.2, category: 'popular' as const, type: 'series' as const },
    { id: '11', title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, category: 'for-you' as const, type: 'movie' as const },
    { id: '12', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.6, category: 'for-you' as const, type: 'movie' as const },
    { id: '13', title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, category: 'for-you' as const, type: 'movie' as const },
    { id: '14', title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9, category: 'for-you' as const, type: 'movie' as const },
    { id: '15', title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, category: 'for-you' as const, type: 'movie' as const },
  ];

  const getFilteredMovies = () => {
    if (searchQuery) {
      return allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (category === 'trending') {
      return allMovies.filter(movie => movie.category === 'trending');
    }
    
    if (category === 'popular') {
      return allMovies.filter(movie => movie.category === 'popular');
    }
    
    if (category === 'for-you') {
      return allMovies.filter(movie => movie.category === 'for-you');
    }
    
    return allMovies;
  };

  const filteredMovies = getFilteredMovies();

  const getPageTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    
    switch (category) {
      case 'trending':
        return '🔥 Trending Movies';
      case 'popular':
        return '⭐ Popular Movies';
      case 'for-you':
        return '🎯 For You';
      default:
        return 'All Movies';
    }
  };

  const categories = [
    { id: 'all', label: 'All', count: allMovies.length },
    { id: 'trending', label: 'Trending', count: allMovies.filter(m => m.category === 'trending').length },
    { id: 'popular', label: 'Popular', count: allMovies.filter(m => m.category === 'popular').length },
    { id: 'for-you', label: 'For You', count: allMovies.filter(m => m.category === 'for-you').length },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-3xl font-bold text-white">{getPageTitle()}</h1>
            <div className="flex items-center text-white/60">
              <span className="text-sm">{filteredMovies.length} results</span>
            </div>
          </div>

          {/* Category Filters */}
          {!searchQuery && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat.id)}
                  className={
                    activeCategory === cat.id
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "border-white/30 text-white/80 hover:bg-white/10 hover:text-white"
                  }
                >
                  {cat.label}
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-white text-xs">
                    {cat.count}
                  </Badge>
                </Button>
              ))}
            </div>
          )}

          {/* Movies Grid */}
          {filteredMovies.length > 0 ? (
            <MovieGrid movies={filteredMovies} />
          ) : (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">No movies found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Movies;
