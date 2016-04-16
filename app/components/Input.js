'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Text>{this.props.label}</Text>
        <TextInput style={styles.input}
          autoFocus={this.props.autoFocus}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
          value={this.props.value}
          onChangeText={this.props.onChange}
          ref='input'
          placeholderTextColor='grey'
          keyboardAppearance='dark'
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    flex:1
  },
  input: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    width: 300,
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});
