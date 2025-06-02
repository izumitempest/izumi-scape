
import { useState } from 'react';
import { Play, Download, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster?: string;
  category?: 'trending' | 'popular' | 'for-you';
  type?: 'movie' | 'series' | 'animated';
}

const MovieCard = ({ id, title, year, genre, rating, poster, category, type = 'movie' }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Placeholder poster if none provided
  const posterUrl = poster || `https://images.unsplash.com/photo-1489599856761-1bb8e7c4c04c?w=400&h=600&fit=crop`;

  return (
    <div
      className="movie-card relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-gray-800">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-2 left-2">
            {category === 'trending' && (
              <Badge className="bg-red-600 text-white border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
            {category === 'popular' && (
              <Badge className="bg-blue-600 text-white border-0">
                Popular
              </Badge>
            )}
            {category === 'for-you' && (
              <Badge className="bg-purple-600 text-white border-0">
                For You
              </Badge>
            )}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-black/60 text-white border-0">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-yellow-600 text-white border-0">
            ★ {rating.toFixed(1)}
          </Badge>
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-fade-in">
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                onClick={() => console.log('Play movie:', id)}
              >
                <Play className="w-4 h-4 mr-1" />
                Play
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                onClick={() => console.log('Download movie:', id)}
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="mt-3 space-y-1">
        <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{year}</span>
          <span>{genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
