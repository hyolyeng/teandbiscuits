'use strict';

import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    dismissKeyboard,
    TouchableOpacity,
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

  handleChange(field, e) {
    console.log(field + ": " + e.target.value);
    this.setState({field: e.target.value});
  }

  navToHome() {
    console.log("NAV TO HOME!");
    this.setState({
      response: "Logged In!"
    });
    setTimeout(() => {
      this.props.navigator.push({
        name: "Home"
      })
    }, 1000);
  }

  async signUpOrLogIn() {
    DismissKeyboard();
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      this.navToHome();
    } catch (error) {
      try {
        console.log("try signing in..");
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        this.navToHome();
      } catch (error) {
        this.setState({
          response: error.toString()
        })
      }
    }
  }

  render() {
    console.log(this.state);
    return (
      <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
        <View style={CommonStyle.container}>
          <View style={styles.wrapper}>
            <Text style={styles.appName}>{"Tea & Biscuits"}</Text>
            <Text style={styles.subscript}>{"Please sign up to continue."}</Text>
            <TextInput style={styles.inputField}
                       onChangeText={(value) => this.setState({'email': value})}
                       placeholder={"Your email here"}
                       placeholderTextColor="#C7C7CD"
                       value={this.state.email}>
            </TextInput>
            <TextInput style={styles.inputField}
                       onChangeText={(value) => this.setState({'password': value})}
                       secureTextEntry={true}
                       placeholder={"Your password here"}
                       placeholderTextColor="#C7C7CD"
                       value={this.state.password}>
            </TextInput>

            <TouchableOpacity onPress={this.signUpOrLogIn.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{"Sign Up"}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}></View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 8,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  appName: {
    fontFamily: 'Helvetica',
    fontSize: 36,
    textAlign: 'center',
    color: "#6D6D72",
    margin: 10,
  },
  subscript: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    textAlign: 'center',
    color: "#6D6D72",
    margin: 10,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
    fontSize: 20,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    borderRadius: 3,
  },
  button: {
    backgroundColor: '#F6A623',
    margin: 10,
  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  }
});

module.exports = Login;
