import React, { StyleSheet, View, TabBarIOS } from 'react-native';
import WelcomeView from './scenes/WelcomeView';
import MovieList from './scenes/MovieList';

export default function routeMapper(route, navigator) {
  let scene;
  switch (route.name) {
    case 'welcome':
      scene = <WelcomeView navigator={navigator} />;
    case 'movies':
      scene = <MovieList navigator={navigator} />;
    default:
      scene = <WelcomeView />;
  }

  return (
    <View style={styles.container}>
      {scene}
      <TabBarIOS>
        <TabBarIOS.Item title="Movies">

        </TabBarIOS.Item>
        <TabBarIOS.Item title="Other">

        </TabBarIOS.Item>
      </TabBarIOS>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
