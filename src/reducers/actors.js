export const getMoviesFromApiAsync = () => {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('helo')
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
}
