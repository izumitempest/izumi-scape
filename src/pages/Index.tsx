
import Header from '@/components/Header';
import MovieGrid from '@/components/MovieGrid';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Mock data for demonstration
  const trendingMovies = [
    { id: '1', title: 'Avatar: The Way of Water', year: 2022, genre: 'Sci-Fi', rating: 8.2, category: 'trending' as const, type: 'movie' as const },
    { id: '2', title: 'Top Gun: Maverick', year: 2022, genre: 'Action', rating: 8.7, category: 'trending' as const, type: 'movie' as const },
    { id: '3', title: 'Spider-Man: No Way Home', year: 2021, genre: 'Action', rating: 8.4, category: 'trending' as const, type: 'movie' as const },
    { id: '4', title: 'The Batman', year: 2022, genre: 'Action', rating: 7.8, category: 'trending' as const, type: 'movie' as const },
    { id: '5', title: 'Dune', year: 2021, genre: 'Sci-Fi', rating: 8.0, category: 'trending' as const, type: 'movie' as const },
  ];

  const popularMovies = [
    { id: '6', title: 'Stranger Things', year: 2022, genre: 'Drama', rating: 8.9, category: 'popular' as const, type: 'series' as const },
    { id: '7', title: 'The Crown', year: 2022, genre: 'Drama', rating: 8.6, category: 'popular' as const, type: 'series' as const },
    { id: '8', title: 'Arcane', year: 2021, genre: 'Animation', rating: 9.0, category: 'popular' as const, type: 'animated' as const },
    { id: '9', title: 'Breaking Bad', year: 2013, genre: 'Crime', rating: 9.5, category: 'popular' as const, type: 'series' as const },
    { id: '10', title: 'The Witcher', year: 2021, genre: 'Fantasy', rating: 8.2, category: 'popular' as const, type: 'series' as const },
  ];

  const forYouMovies = [
    { id: '11', title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, category: 'for-you' as const, type: 'movie' as const },
    { id: '12', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.6, category: 'for-you' as const, type: 'movie' as const },
    { id: '13', title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, category: 'for-you' as const, type: 'movie' as const },
    { id: '14', title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9, category: 'for-you' as const, type: 'movie' as const },
    { id: '15', title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, category: 'for-you' as const, type: 'movie' as const },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1489599856761-1bb8e7c4c04c?w=1920&h=1080&fit=crop")'
          }}
        />
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in">
            Welcome to <span className="gradient-text">IzumiScape</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-fade-in">
            Discover, stream, and download the latest movies, series, and animations all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link to="/movies">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Start Watching
              </Button>
            </Link>
            <Link to="/movies?category=trending">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                <TrendingUp className="w-5 h-5 mr-2" />
                See Trending
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        <MovieGrid movies={trendingMovies} title="🔥 Trending Now" />
        <MovieGrid movies={popularMovies} title="⭐ Popular" />
        <MovieGrid movies={forYouMovies} title="🎯 For You" />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm">
              © 2024 StreamScape. All rights reserved.
            </div>
            <Link to="/admin" className="text-white/60 hover:text-white text-sm transition-colors">
              Admin Panel
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
