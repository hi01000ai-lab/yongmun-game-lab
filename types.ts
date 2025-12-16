// 게임 장르 정의
export enum GameGenre {
  ACTION = '액션',
  PUZZLE = '퍼즐',
  SIMULATION = '시뮬레이션',
  RPG = 'RPG',
  ADVENTURE = '어드벤처',
  HORROR = '공포',
  SPORTS = '스포츠'
}

// 게임 데이터 인터페이스
export interface GameData {
  id: string;
  title: string;
  studentName: string;
  date: string; // 형식: YYYY.MM
  genre: GameGenre;
  thumbnailUrl: string; // 이미지 경로
  gameUrl: string; // 게임 실행 URL
  description?: string; // 짧은 설명 (선택 사항)
}