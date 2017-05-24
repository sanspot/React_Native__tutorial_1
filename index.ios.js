var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
/**
 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
 * their very own API that lives in React Native's Github repo.
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class React_Native extends Component {
  /**
   * Add some initial state to our application so that we can check this.state.movies === null to determine whether the movies data has been loaded or not.
   * We can set this data when the response comes back with this.setState({movies: moviesData}).
   * Add this code just above the render function inside our React class.
   */
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }
  /**
   * We want to send off the request after the component has finished loading.
   * componentDidMount is a function of React components that React will call exactly once, just after the component has been loaded.
   */
  componentDidMount() {
   this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
      })
      .done();
  }
  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }

    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: '#F6DEED'
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize:20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year:{
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('React_Native', () => React_Native);
