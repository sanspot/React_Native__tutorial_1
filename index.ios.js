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

  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
        <View style={styles.container}>
          <Image
            source={require('./img/insurgent.jpg')}
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