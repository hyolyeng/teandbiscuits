import Expo from 'expo';
import React, { Component } from "react";
import {
    ListView,
    Text,
    View,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

import CommonStyles from '../styles/common-styles.js';

import * as firebase from "firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      dataLoaded: false
    };
    this.eventsRef = this.getRef().child('events');
  }

  getRef() {
    return firebase.database().ref();
  }

  listenForEvents(eventsRef) {
    eventsRef.on('value', (snap) => {
      var events = [];
      snap.forEach((child) => {
        events.push(child.val());
      })
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(events),
        dataLoaded: true,
      });
    });
  }

  async loadFonts() {
    try {
      await Expo.Font.loadAsync({
        'awesome': require('../../assets/fonts/fontawesome-webfont.ttf'),
      });
    } catch (e) {
      console.warn("Error loading fonts!! " + e);
    }
  }

  componentDidMount() {
    this.loadFonts();
    this.listenForEvents(this.eventsRef);
  }

  render() {
    if (!this.state.dataLoaded) {
      return <View />;
    }
    if (this.state.dataSource.getRowCount() == 0) {
      return this.renderNoEventsView();
    }
    return (
      <View style={CommonStyles.container}>

        <StatusBar title="My Tea & Biscuit Parties" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEventRow.bind(this)}
          style={styles.listview}/>

      </View>
    )
  }

  createEvent() {
    this.props.navigator.push({
        name: "Event"
    })
  }

  formatTime(time) {
    return time + "";
  }

  renderEventRow(event) {
    return (
      <View>
        <View style={styles.eventRowContainer}>
          <View style={styles.eventInfo}>
            <Text style={styles.eventName}>
              {event.name}
            </Text>
            <Text style={styles.eventTime}>
              {this.formatTime(event.time)}
            </Text>
            <Text style={styles.eventGuestSummary}>
              {"1 attending"}
            </Text>
          </View>
          <View style={styles.chevron}>
            <Text style={{ ...Expo.Font.style('awesome')}}>
              {'\uf054'}
            </Text>
          </View>
        </View>
        <View style={styles.linebreak}>
        </View>
      </View>
    );
  }

  renderNoEventsView() {
    return (
      <View style={CommonStyles.container}>
        <View style={CommonStyles.center}>
          <Text style={styles.noEventsText}>You have no events yet!</Text>
          <TouchableOpacity style={styles.button} onPress={this.createEvent.bind(this)}>
            <Text style={{textAlign: 'center', fontSize: 20, color: '#FFFFFF'}}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  noEventsText: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    color: '#6D6D72',
    marginBottom: 25,
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6A623',
    height: 40,
    width: 127,
    borderRadius: 12,
    borderWidth: 0,
  },

  linebreak: {
    height: 1,
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#C8C7CC',
    borderBottomWidth: 1,
  },

  eventRowContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    height: 96
  },
  eventInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  eventName: {
    fontWeight: 'bold',
  }

});

module.exports = Home;