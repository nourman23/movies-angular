export interface IMovie {
  results: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }[];
}
