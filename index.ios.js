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
      <Navigator style={styles.bar}
        initialRoute={{name: 'welcome'}}
        renderScene={routeMapper}
      />
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    borderTopWidth: 20,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
