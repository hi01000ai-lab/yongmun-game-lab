import React from 'react';
import { GameData, GameGenre } from '../types';
import { Calendar, User, ExternalLink } from 'lucide-react';

interface GameCardProps {
  game: GameData;
}

const getGenreColor = (genre: GameGenre): string => {
  switch (genre) {
    case GameGenre.ACTION: return 'text-red-400 border-red-400 shadow-red-500/50';
    case GameGenre.PUZZLE: return 'text-yellow-400 border-yellow-400 shadow-yellow-500/50';
    case GameGenre.SIMULATION: return 'text-blue-400 border-blue-400 shadow-blue-500/50';
    case GameGenre.RPG: return 'text-purple-400 border-purple-400 shadow-purple-500/50';
    case GameGenre.HORROR: return 'text-gray-400 border-gray-400 shadow-gray-500/50';
    case GameGenre.SPORTS: return 'text-green-400 border-green-400 shadow-green-500/50';
    default: return 'text-cyber-neonBlue border-cyber-neonBlue shadow-cyber-neonBlue/50';
  }
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const genreStyle = getGenreColor(game.genre);

  return (
    <a 
      href={game.gameUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-cyber-gray rounded-xl overflow-hidden border border-gray-700 hover:border-cyber-neonPink transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transform hover:-translate-y-2"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.thumbnailUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-60"></div>
        
        {/* Genre Badge */}
        <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold font-mono border rounded-full backdrop-blur-sm bg-black/50 ${genreStyle} shadow-sm`}>
          {game.genre}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyber-neonBlue transition-colors truncate pr-2">
            {game.title}
          </h3>
          <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyber-neonPink transition-colors opacity-0 group-hover:opacity-100" />
        </div>
        
        {game.description && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">
            {game.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-4 text-xs font-mono text-gray-400 border-t border-gray-700 pt-3">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-cyber-neonGreen" />
            <span>{game.studentName}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-cyber-neonPurple" />
            <span>{game.date}</span>
          </div>
        </div>
      </div>
      
      {/* Glow Effect on Hover (bottom border) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neonBlue via-cyber-neonPurple to-cyber-neonPink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </a>
  );
};

export default GameCard;