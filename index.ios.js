import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TabBarIOS,
} from 'react-native';

import routeMapper from './app/routes';

class HelloReactNative extends Component {

  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={{name: 'tabs'}}
        renderScene={routeMapper}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
