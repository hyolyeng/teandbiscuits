'use strict';

import Expo from 'expo';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Image,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import * as firebase from 'firebase';

import Contacts from './src/pages/contacts';
import Event from './src/pages/event';
import Home from './src/pages/home';
import Login from './src/pages/login';
import Firebase from './src/firebase/firebase';
import CommonStyles from './src/styles/common-styles.js';


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState){
    let text = route.leftButtonText;
    let icon = route.leftButtonIcon;
    if (!text && !icon) {
      return null;
    }
    let view = "";
    if (text) {
      view = (<Text style={styles.navButtonText}>{text}</Text>)
    } else if (icon) {
      view = (<Image source={icon} style={styles.navButtonIcon}></Image>)
    }
    return (
      <TouchableHighlight underlayColor="transparent"
                          style={styles.navBarItemContainer}
                          onPress={ () => route.onLeftButtonPress() }>
        {view}
      </TouchableHighlight>);
  },
  RightButton(route, navigator, index, navState) {
    let text = route.rightButtonText;
    let icon = route.rightButtonIcon;
    if (!text && !icon) {
      return null;
    }
    let view = "";
    if (text) {
      view = (<Text style={styles.navButtonText}>{text}</Text>);
    } else if (icon) {
      view = (<Image source={icon} style={styles.navButtonIcon}></Image>);
    }
    return (
      <TouchableHighlight underlayColor="transparent"
                          style={styles.navBarItemContainer}
                          onPress={ () => route.onRightButtonPress() }>
        {view}
      </TouchableHighlight>);
  },
  Title(route, navigator, index, navState) {
    return (<View style={styles.navBarItemContainer}>
              <Text style={ styles.navBarTitle }>{route.title}</Text>
            </View>);
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
    route.title = "Tea & Biscuits";
    /*if (this.state.user != null) {
      route.logout = this.logout;
    } else {
      navigator.popToTop();
    }*/
    switch (route.name) {
      case "Home":
        route.rightButtonText = "Create Event";
        route.onRightButtonPress = () => {
          navigator.push({name: "Event"});
        };
        return (<Home navigator={navigator} {...route.passProps} />);
        break;
      case "Login":
        return (<Login navigator={navigator} {...route.passProps} />);
        break;
      case "Event":
        route.leftButtonText = "Cancel";
        route.onLeftButtonPress = navigator.pop;
        return (<Event navigator={navigator} route={route} {...route.passProps} />);
        break;
      case "Contacts":
        route.leftButtonText = "Back";
        route.onLeftButtonPress = navigator.pop;
        return (<Contacts navigator={navigator} route={route} {...route.passProps} />);
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
  navBarItemContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  navBarTitle: {
    color: "#FC913A",
    fontFamily: 'Helvetica',
    fontSize: 17,
    textAlign: 'center',
  },
  navButtonIcon: {
    width: 23,
    height: 23,
  },
  navButtonText: {
    color: "#0076FF",
    fontFamily: 'Helvetica',
    fontSize: 17,
    margin: 10,
  }
});

Expo.registerRootComponent(App);
