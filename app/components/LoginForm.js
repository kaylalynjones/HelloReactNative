'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Input from './Input';
import Button from './Button';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      gratitude: 'Thanks for stopping by!',
      showGratitude: false,
    }
  }

  renderForm() {
    return (
      <View>
        <Input
          autoFocus={true}
          keyboardType='email-address'
          label='Email'
          value={this.state.email}
          onChange={(text) => this.setState({email: text})}
        />
        <Input
          secureTextEntry={true}
          value={this.state.password}
          label='Password'
          onChange={(text) => this.setState({password: text})}
        />
        <Button onClick={() => {
          this.setState({showGratitude: true})
        }}/>
      </View>
    );
  }

  renderGratitude () {
    return (
        <View>
          <Text style={styles.gratitude}>
            {this.state.gratitude}
          </Text>
          <Text style={styles.attitude}>"Learn once, write anywhere."</Text>
        </View>
    );
  }
  render() {
    const { email, password, showGratitude } = this.state;

    if (showGratitude && email && password) {
      return (
        <View style={styles.gratitudeWrapper}>
          {this.renderGratitude()}
        </View>
      );
    }
    return (
      <View style={styles.form}>
        <Text style={styles.title}>Hello React Native!</Text>
        {this.renderForm()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },
  form: {
    alignSelf: 'center',
    marginTop: 20,
  },
  gratitudeWrapper: {
    alignSelf: 'center',
  },
  gratitude: {
    fontSize: 30,
    marginTop: 20,
    color: 'steelblue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  attitude: {
    fontSize: 25,
    marginTop: 20,
    color: 'steelblue',
    fontWeight: '300',
    textAlign: 'center',
  }
});
