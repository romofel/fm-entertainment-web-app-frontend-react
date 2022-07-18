import data from './data.json';

const regular = data.filter((movie) => !movie.isTrending);

const posters = {
  regular: {
    small: new Map(
      regular.map((movie) => [
        movie.title,
        require(`${movie.thumbnail.regular.small}`),
      ])
    ),
    medium: new Map(
      regular.map((movie) => [
        movie.title,
        require(`${movie.thumbnail.regular.medium}`),
      ])
    ),
    large: new Map(
      regular.map((movie) => [
        movie.title,
        require(`${movie.thumbnail.regular.large}`),
      ])
    ),
  },
  trending: {
    small: new Map(
      data
        .filter((movie) => movie.isTrending)
        .map((movie) => [
          movie.title,
          require(`${movie.thumbnail.trending.small}`),
        ])
    ),
    medium: new Map(
      data
        .filter((movie) => movie.isTrending)
        .map((movie) => [
          movie.title,
          require(`${movie.thumbnail.trending.medium}`),
        ])
    ),
    large: new Map(
      data
        .filter((movie) => movie.isTrending)
        .map((movie) => [
          movie.title,
          require(`${movie.thumbnail.trending.large}`),
        ])
    ),
  },
};

export default posters;
