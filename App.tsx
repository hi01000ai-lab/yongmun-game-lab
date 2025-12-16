import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameCard from './components/GameCard';
import FilterBar from './components/FilterBar';
import { GAMES_DATA } from './constants';
import { GameGenre } from './types';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique years from data (e.g., "2025", "2026")
  const availableYears = useMemo(() => {
    const years = new Set(GAMES_DATA.map(game => game.date.split('.')[0]));
    return Array.from(years).sort().reverse();
  }, []);

  // Filter games logic
  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const year = game.date.split('.')[0];
      const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
      const matchesYear = selectedYear === 'All' || year === selectedYear;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.studentName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesGenre && matchesYear && matchesSearch;
    });
  }, [selectedGenre, selectedYear, searchQuery]);

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col font-sans selection:bg-cyber-neonPink selection:text-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Intro Section */}
        <div className="mb-10 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
            STUDENT GAME ARCHIVE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            용문중학교 학생들이 코드로 빚어낸 상상의 세계를 만나보세요. 
            <br />
            미래의 게임 개발자들의 열정이 담긴 프로젝트들입니다.
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-cyber-neonPurple blur-[100px] opacity-20 -z-10"></div>
        </div>

        {/* Search Bar (Optional extra feature) */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="게임 제목이나 학생 이름으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cyber-dark border border-cyber-gray text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:border-cyber-neonBlue transition-colors shadow-inner"
          />
        </div>

        {/* Filters */}
        <FilterBar 
          genres={Object.values(GameGenre)}
          years={availableYears}
          selectedGenre={selectedGenre}
          selectedYear={selectedYear}
          onGenreChange={setSelectedGenre}
          onYearChange={setSelectedYear}
        />

        {/* Results Count */}
        <div className="mb-4 text-gray-500 text-sm font-mono flex items-center justify-between">
          <span>
            Searching database... found <span className="text-cyber-neonGreen">{filteredGames.length}</span> projects.
          </span>
        </div>

        {/* Game Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-700 rounded-xl bg-cyber-dark/30">
            <p className="text-xl text-gray-400">데이터가 존재하지 않습니다.</p>
            <p className="text-sm text-gray-600 mt-2">필터 조건을 변경해보세요.</p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;