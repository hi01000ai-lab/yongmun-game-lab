import React from 'react';
import { GameGenre } from '../types';
import { Filter, CalendarClock } from 'lucide-react';

interface FilterBarProps {
  genres: GameGenre[];
  years: string[];
  selectedGenre: string;
  selectedYear: string;
  onGenreChange: (genre: string) => void;
  onYearChange: (year: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  genres, 
  years, 
  selectedGenre, 
  selectedYear, 
  onGenreChange, 
  onYearChange 
}) => {
  return (
    <div className="bg-cyber-dark/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-gray mb-8 sticky top-24 z-40 shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Genre Filter */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2 text-cyber-neonBlue font-mono text-sm mr-2">
            <Filter size={16} />
            <span className="hidden sm:inline">GENRE:</span>
          </div>
          <button
            onClick={() => onGenreChange('All')}
            className={`px-3 py-1.5 text-sm rounded transition-all duration-200 font-medium ${
              selectedGenre === 'All'
                ? 'bg-cyber-neonBlue text-black shadow-[0_0_10px_rgba(0,243,255,0.5)]'
                : 'bg-cyber-gray text-gray-300 hover:bg-gray-700'
            }`}
          >
            전체 보기
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(genre)}
              className={`px-3 py-1.5 text-sm rounded transition-all duration-200 ${
                selectedGenre === genre
                  ? 'bg-cyber-neonPink text-black font-bold shadow-[0_0_10px_rgba(255,0,255,0.5)]'
                  : 'bg-cyber-gray text-gray-300 hover:bg-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2 text-cyber-neonPurple font-mono text-sm">
            <CalendarClock size={16} />
            <span className="hidden sm:inline">YEAR:</span>
          </div>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="bg-cyber-black text-white border border-cyber-gray rounded px-3 py-1.5 focus:outline-none focus:border-cyber-neonPurple transition-colors text-sm"
          >
            <option value="All">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}년</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;