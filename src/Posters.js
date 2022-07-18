import data from './data.json';

const posters = {
  regular: new Map(
    data.map((movie) => [
      movie.title,
      require(`${movie.thumbnail.regular.small}`),
    ])
  ),
  trending: new Map(
    data.map((movie) => [
      movie.title,
      require(`${movie.thumbnail.trending.small}`),
    ])
  ),
};

export default posters;
