'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
        <TouchableHighlight>
          <Text
            style={styles.button}
            onPress={this.props.onClick}
            suppressHighlighting={true}>
            Login
          </Text>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color:'#FFF',
    fontSize: 20,
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor:'steelblue',
    backgroundColor: 'steelblue',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    lineHeight: 20
  }
});
