'use strict';

import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    dismissKeyboard,
    TouchableWithoutFeedback
} from "react-native";

import React, {Component} from "react";
import * as firebase from "firebase";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DismissKeyboard from "dismissKeyboard";

import CommonStyle from '../styles/common-styles.js';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      response: '',
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  async signup() {

    DismissKeyboard();

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: "account created"
      });

      setTimeout(() => {
        this.props.navigator.push({
          name: "Home",
        })
      }, 1500);

    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }

  }

  async login() {

    DismissKeyboard();

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: "Logged In!"
      });

      setTimeout(() => {
        this.props.navigator.push({
          name: "Home"
        })
      }, 1500);

    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }

  }

  render() {
    console.log("Login: render!");
    return (
      <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
        <View style={CommonStyle.container}>
          <View style={styles.wrapper}>
            <Text style={styles.appName}>{"Tea & Biscuits"}</Text>
            <Text style={styles.subscript}>{"Please sign up to continue."}</Text>
            <TextInput style={styles.email}
                       placeholder={"Your email here"}
                       placeholderTextColor="#C7C7CD"
                       value={this.state.email}>
            </TextInput>
            <TextInput style={styles.password}
                       secureTextEntry={false}
                       placeholder={"Your password here"}
                       placeholderTextColor="#C7C7CD"
                       value={this.state.password}>
            </TextInput>
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  appName: {
    fontFamily: 'Helvetica',
    fontSize: 36,
    textAlign: 'center',
    color: "#6D6D72",
  },
  subscript: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    textAlign: 'center',
    color: "#6D6D72",
  },
  email: {

  },
  password: {

  },

    formGroup: {
        padding: 50
    },

    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.8,
    },

    submit: {
        paddingTop: 30
    },

    response: {
        color: "#f00",
        textAlign: "center",
        paddingTop: 0,
        padding: 50
    },

});

module.exports = Login;
