import React, { Component } from "react";
import {
    ListView,
    Text,
    View,
    StatusBar,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";

import CommonStyles from '../styles/common-styles.js';
import Button from "apsl-react-native-button";

import * as firebase from "firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.eventsRef = this.getRef().child('events');
  }

  getRef() {
    return firebase.database().ref();
  }

  listenForEvents(eventsRef) {
    eventsRef.on('value', (snap) => {

      // get children as an array
      var events = [];
      snap.forEach((child) => {
        events.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(events)
      });

    });
  }

  componentDidMount() {
    this.listenForEvents(this.eventsRef);
  }

  render() {
    if (this.state.dataSource.getRowCount() == 0) {
      return this.renderNoEventsView();
    }
    return (
      <View style={styles.container}>

        <StatusBar title="My Tea & Biscuit Parties" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderEvent.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

      </View>
    )
  }

  createEvent() {
    this.props.navigator.push({
        name: "Event"
    })
  }

  _renderEvent(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.eventsRef.child(event._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem event={event} onPress={onPress} />
    );
  }

  renderNoEventsView() {
    return (
      <View style={CommonStyles.container}>
        <View style={CommonStyles.center}>
          <Text style={styles.noEventsText}>You have no events yet!</Text>
          <Button style={styles.button} onPress={this.createEvent.bind(this)} textStyle={{fontSize: 18, color: '#FFFFFF'}}>
            Create
          </Button>
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
    alignSelf: 'center',
    backgroundColor: '#F6A623',
    height: 40,
    width: 127,
    borderRadius: 12,
    borderWidth: 0,
  }
});

module.exports = Home;