export interface IPlatformResponse {
  count: number;
  next: string;
  previous: null;
  results: IPlatformData[];
}

export interface IPlatformData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_start: number | null;
  year_end: null;
  games: IGameData[];
}

export interface IGameData {
  id: number;
  slug: string;
  name: string;
  added: number;
}
