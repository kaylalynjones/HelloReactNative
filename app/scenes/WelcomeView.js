'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginForm from '../components/LoginForm';

export default class WelcomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello React Native!</Text>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center'
  },
});
