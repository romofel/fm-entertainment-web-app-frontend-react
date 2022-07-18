import data from './data.json';

const posters = new Map(
  data.map((movie) => [
    movie.title,
    require(`${movie.thumbnail.regular.small}`),
  ])
);

export default posters;
