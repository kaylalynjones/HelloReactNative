'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  ListView,
  Text,
  View
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  }

  renderLoadingView() {
    return(
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
        resizeMode='cover'
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    borderStyle: 'solid',
  },
  thumbnail: {
    height: 80,
    width: 80,
    margin: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('MovieList', () => MovieList);
