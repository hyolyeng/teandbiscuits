'use strict';

import Exponent, { Font } from 'exponent';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

import * as firebase from 'firebase';

import Home from './src/pages/home';
import Event from './src/pages/event';
import Login from './src/pages/login';
import Firebase from './src/firebase/firebase';
import CommonStyles from './src/styles/common-styles.js';


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
           underlayColor="transparent"
           onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>
    )} 
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.logout) return ( <TouchableHighlight
                                onPress={ () => route.logout() }>
                                <Text style={ styles.navButtonText }>
                                    { route.rightText || 'Log Out' }
                                </Text>
                              </TouchableHighlight> )
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>{route.title}</Text>
  }
};

class App extends React.Component {

  async logout() {

    try {

        await firebase.auth().signOut();

    } catch (error) {
        console.log(error);
    }

  }

  constructor(props){
    super(props);

    Firebase.initialise();

    this.getInitialView();

    this.state = {
      loaded: false,
      user: null,
      initialView: null,
    }
  }

  getInitialView() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Auth status changed! " + user);

      let initialView = user ? "Home" : "Login";

      this.setState({
        loaded: true,
        user: user,
        initialView: initialView
      })
    });
  }

  renderScene(route, navigator) {
    if (this.state.user != null) {
      route.logout = this.logout;
    } else {
      navigator.popToTop();
    }
    switch (route.name) {
      case "Home":
        return (<Home navigator={navigator} title={"Tea & Biscuits"} {...route.passProps} />);
        break;

      case "Login":
        return (<Login navigator={navigator} {...route.passProps} />);
        break;

      case "Event":
        return (<Event navigator={navigator} {...route.passProps} />);
        break;
    }
  }

  configureScene(route, routeStack){
    if(route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight 
  }

  render() {
    if (this.state.loaded) {
      return (
          <Navigator
              initialRoute={{name: this.state.initialView}}
              renderScene={this.renderScene.bind(this)}
              configureScene={this.configureScene}
              style={{paddingTop: 64,
                      flex: 1}}
              navigationBar={<Navigator.NavigationBar style={{height: 64, backgroundColor: '#FAFAFA'}}
                                                      routeMapper={NavigationBarRouteMapper} />} 
          />);
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  title: {

  },
});

Exponent.registerRootComponent(App);
