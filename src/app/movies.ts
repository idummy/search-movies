export class Movie {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  poster: string;
}

export class SearchResponse {
  search: Array<Movie>;
  totalResult: string;
  response: string;
}

// export class MovieDetails{
//     Title:string
//     Year:string;
//     Rated:stirng,
//     "Released":"21 Aug 1998",
//     "Runtime":"163 min",
//     "Genre":"Drama, Romance",
//     "Director":"Mani Ratnam",
//     "Writer":"Mani Ratnam (story and screenplay), Sujatha (dialogue), Tigmanshu Dhulia (dialogue)",
//     "Actors":"Shah Rukh Khan, Manisha Koirala, Preity Zinta, Raghuvir Yadav",
//     "Plot":"The clash between love and ideology is portrayed in this love story between a radio executive and a beautiful revolutionary",
//     "Language":"Hindi, Tamil, Telugu, Assamese, Urdu",
//     "Country":"India",
//     "Awards":"7 wins & 2 nominations.",
//     "Poster":"https://m.media-amazon.com/images/M/MV5BNWFjNGIxYWUtZDFmNy00NzRkLThkYWItZjBiNTJlNGE3MTA0XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_SX300.jpg",
//     "Ratings":[
//        {
//           "Source":"Internet Movie Database",
//           "Value":"7.7/10"
//        }
//     ],
//     "Metascore":"N/A",
//     "imdbRating":"7.7",
//     "imdbVotes":"24,258",
//     "imdbID":"tt0164538",
//     "Type":"movie",
//     "DVD":"25 Feb 2003",
//     "BoxOffice":"N/A",
//     "Production":"Venus",
//     "Website":"N/A",
//     "Response":"True"
// }
