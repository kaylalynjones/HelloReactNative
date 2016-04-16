'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    }
  }
  render() {
    return (
      <View style={styles.form}>
        <Text>Email</Text>
        <View style={styles.input}>
          <TextInput
            autoFocus={true}
            placeholder='Email'
            ref='Email'
            placeholderTextColor='grey'
            keyboardType='email-address'
            keyboardAppearance='dark'
            value={this.state.value}
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <Text>Password</Text>
        <View style={styles.input}>
          <TextInput
            placeholder='Password'
            ref='Password'
            placeholderTextColor='grey'
            secureTextEntry={true}
            keyboardAppearance='dark'
            value={this.state.value}
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    alignSelf: 'center',
    marginTop: 40,
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
    paddingLeft: 5,
    paddingRight: 5
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'steelblue',
    backgroundColor: 'steelblue',
    padding: 10,
  },
  buttonText: {
    color:'#FFF',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 20
  }
});
