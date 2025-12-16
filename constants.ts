import { GameData, GameGenre } from './types';

/**
 * ==================================================================================
 * [선생님을 위한 안내]
 * 새로운 게임을 추가하려면 아래 `GAMES_DATA` 배열에 새로운 객체를 추가하세요.
 * 
 * 형식:
 * {
 *   id: '고유번호',
 *   title: '게임 제목',
 *   studentName: '학생 이름',
 *   date: '제작년월 (YYYY.MM)',
 *   genre: GameGenre.장르, (GameGenre.ACTION, GameGenre.PUZZLE 등 types.ts 참고)
 *   thumbnailUrl: '이미지 주소', (예: 'https://picsum.photos/400/300' 또는 로컬 경로 'images/game1.jpg')
 *   gameUrl: '게임 링크',
 *   description: '게임 설명'
 * }
 * ==================================================================================
 */

export const GAMES_DATA: GameData[] = [
  {
    id: '1',
    title: '네온 시티 러너',
    studentName: '김철수',
    date: '2025.03',
    genre: GameGenre.ACTION,
    thumbnailUrl: 'https://picsum.photos/id/120/400/300',
    gameUrl: 'https://example.com/game1',
    description: '사이버펑크 도시를 달리는 무한 러닝 액션 게임'
  },
  {
    id: '2',
    title: '미스터리 맨션',
    studentName: '이영희',
    date: '2025.05',
    genre: GameGenre.PUZZLE,
    thumbnailUrl: 'https://picsum.photos/id/130/400/300',
    gameUrl: 'https://example.com/game2',
    description: '저주받은 저택에서 탈출구를 찾는 두뇌 풀가동 퍼즐'
  },
  {
    id: '3',
    title: '스페이스 가디언',
    studentName: '박지성',
    date: '2025.06',
    genre: GameGenre.ACTION,
    thumbnailUrl: 'https://picsum.photos/id/140/400/300',
    gameUrl: 'https://example.com/game3',
    description: '지구를 침공하는 외계 생명체를 막아라!'
  },
  {
    id: '4',
    title: '용문 카페 타이쿤',
    studentName: '최민수',
    date: '2025.09',
    genre: GameGenre.SIMULATION,
    thumbnailUrl: 'https://picsum.photos/id/150/400/300',
    gameUrl: 'https://example.com/game4',
    description: '최고의 바리스타가 되어 카페를 경영해보세요.'
  },
  {
    id: '5',
    title: '던전 오브 드래곤',
    studentName: '정수민',
    date: '2025.12',
    genre: GameGenre.RPG,
    thumbnailUrl: 'https://picsum.photos/id/160/400/300',
    gameUrl: 'https://example.com/game5',
    description: '전설의 무기를 찾아 떠나는 모험'
  },
  {
    id: '6',
    title: '2026 퓨처 사커',
    studentName: '강호동',
    date: '2026.02',
    genre: GameGenre.SPORTS,
    thumbnailUrl: 'https://picsum.photos/id/170/400/300',
    gameUrl: 'https://example.com/game6',
    description: '로봇들이 펼치는 미래형 축구 대전'
  },
  {
    id: '7',
    title: '미궁의 숲',
    studentName: '한소희',
    date: '2026.04',
    genre: GameGenre.ADVENTURE,
    thumbnailUrl: 'https://picsum.photos/id/180/400/300',
    gameUrl: 'https://example.com/game7',
    description: '길을 잃은 숲속에서 단서를 모아 탈출하세요.'
  },
];

export const SCHOOL_NAME = "용문중학교";
export const APP_TITLE = "게임 연구소";
export const TEACHER_NAME = "정영천";