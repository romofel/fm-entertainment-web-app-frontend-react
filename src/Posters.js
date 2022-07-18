import data from './data.json';

const posters = {
  regular: {
    small: new Map(
      data
        .filter((movie) => !movie.isTrending)
        .map((movie) => [
          movie.title,
          require(`${movie.thumbnail.regular.small}`),
        ])
    ),
    medium: {},
    large: {},
  },
  trending: new Map(
    data
      .filter((movie) => movie.isTrending)
      .map((movie) => [
        movie.title,
        require(`${movie.thumbnail.trending.small}`),
      ])
  ),
};

export default posters;
