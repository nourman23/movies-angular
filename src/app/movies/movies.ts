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
export interface IMovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    release_date: DataView;
    original_language: string;

}
