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
      name: '',
      email: '',
      password: '',
      response: '',
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  async signup() {

    if (this.state.name.length < 1) {
      alert("Please provide your name for your friends to know who is sending them an invite!");
      return;
    }

    DismissKeyboard();

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      let userRef = firebase.database().ref('users').push();
      userRef.set({name: this.state.name});
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
      this.navToHome();
    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  handleChange(field, e) {
    this.setState({field: e.target.value});
  }

  navToHome() {
    this.setState({
      response: "Logged In!"
    });
    setTimeout(() => {
      this.props.navigator.push({
        name: "Home"
      })
    }, 1000);
  }

  render() {
    let header = "";
    let footer = "";
    let button = "";
    if (this.props.route.type == "signup") {
      header = <View>
          <Text style={styles.subscript}>{"Please sign up to continue."}</Text>
          <TextInput style={styles.inputField}
                     onChangeText={(value) => this.setState({'name': value})}
                     placeholder={"Your name here"}
                     placeholderTextColor="#C7C7CD"
                     value={this.state.name}>
          </TextInput>
      </View>;
      footer = <TouchableOpacity onPress={() => {this.props.navigator.replace({name: "Login"});}}>
          <Text style={styles.link}>{"Or Press Here to Log In"}</Text>
      </TouchableOpacity>;
      button = <TouchableOpacity onPress={this.signup.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{"Sign Up"}</Text>
              </View>
            </TouchableOpacity>;
    } else {
      header = <Text style={styles.subscript}>{"Please log in to continue."}</Text>;
      footer = <TouchableOpacity onPress={() => {this.props.navigator.replace({name: "Signup"});}}>
          <Text style={styles.link}>{"Or Press Here to Sign Up"}</Text>
      </TouchableOpacity>;
      button = <TouchableOpacity onPress={this.login.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{"Log In"}</Text>
              </View>
            </TouchableOpacity>;
    }
    if (this.props.route.type == "signup") {
    } else {
    }

    let actionButton = "";

    return (
      <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
        <View style={CommonStyle.container}>
          <View style={styles.wrapper}>
            <Text style={styles.appName}>{"Tea & Biscuits"}</Text>
            {header}
            <TextInput style={styles.inputField}
                       autoCapitalize={'none'}
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

            {button}

            {footer}
            <Text style={styles.response}>{this.state.response}</Text>
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
  },
  link: {
    textAlign: 'center',
    paddingTop: 10,
    color: "#C4C4C4",
  },
  response: {
    textAlign: 'center',
    color: '#EC6875',
    padding: 10,
  }
});

module.exports = Login;
