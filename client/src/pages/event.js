import React, { Component } from "react";
import {
  Button,
  dismissKeyboard,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import CommonStyles from '../styles/common-styles.js';

import DismissKeyboard from "dismissKeyboard";

import Communications from 'react-native-communications';

import * as firebase from "firebase";

class Event extends Component {
  constructor(props) {
    super(props);

    let event = props.event;
    if (event) {
      this.state = {
        name: event.name,
        place: event.place,
        time: event.time,
        minimum_guests: event.minimum_guests,
        maximum_guests: event.maximum_guests,
        guests: event.guests,
        guestsDataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        }).cloneWithRowsAndSections({"guests": event.guests}),
      };
    } else {
      this.state = {
        name: '',
        place: '',
        time: 0,
        minimum_guests: 1,
        maximum_guests: 1,
        guests: [],
        guestsDataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        }),
      };
    }
  }

  formatTime(time) {
    // TODO
    if (time) {
      return time + "";
    } else {
      return null;
    }
  }

  componentWillMount() {
    // Need to inject the Done button in the navigation bar.
    this.props.route.rightButtonText = "Done";
    this.props.route.onRightButtonPress = this.createOrUpdateEvent.bind(this);
  }

  incrementMinGuests() {
    if (this.state.minimum_guests < this.state.maximum_guests) {
      this.setState({minimum_guests: this.state.minimum_guests + 1});
    }
  }
  decrementMinGuests() {
    if (this.state.minimum_guests > 1) {
      this.setState({minimum_guests: this.state.minimum_guests - 1});
    }
  }

  incrementMaxGuests() {
    this.setState({maximum_guests: this.state.maximum_guests + 1});
  }
  decrementMaxGuests() {
    if (this.state.maximum_guests > this.state.minimum_guests) {
      this.setState({maximum_guests: this.state.maximum_guests - 1});
    }
  }

  setSelectedContacts(contacts) {
    this.setState({
      guests: contacts,
      guestsDataSource: this.state.guestsDataSource.cloneWithRowsAndSections({"guests": contacts}),
    });
  }

  openContactsView() {
    // TODO also pass in guests where invites were already sent
    this.props.navigator.push({
      name: "Contacts", 
      passProps: {setSelectedContactsCallback: (contacts) => {this.setSelectedContacts(contacts);}}
    });
  }

  getUniqueUrl(eventId) {
    return "http://teandbiscuits.herokuapp.com/event?event_id=" + eventId + "&hash=" + 
        Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

  createOrUpdateEvent() {
    if (!this.state.name) {
      alert("Event needs a name!");
      return;
    }

    if (this.state.guests.length == 0) {
      alert("No guests?!");
      return;
    }

    let eventsRef = null;
    if (!this.state.key) {
      eventsRef = firebase.database().ref('events').push();
    } else {
      // TODO - may have to fix.
      eventsRef = firebase.database().ref('events').get(this.state.key);
    }

    let guests = [];
    for (let i = 0; i < this.state.guests.length; i++) {
      // generate random string
      let guest = this.state.guests[i];
      guest.url = this.getUniqueUrl(eventsRef.key);
      guests.push(guest);
      if (guest.phoneNumbers && guest.phoneNumbers.length > 0) {
        // TODO maybe pick which phone number in case there's > 1
        let number = guest.phoneNumbers[0].number.match(/\d/g).join('');
        let body = "Invite to " + this.state.name + ", please respond through this link: " + guest.url;
        console.log("Sending SMS to number: " + number);
        // TODO
        //Communications.text(number, body);
      } else if (guest.emails) {
        // TODO send email
        console.log("Send email to: " + guest.emails);
      }
    }
    // for each guest, need to create a unique url hash and send to server
    let event = {
      name: this.state.name,
      place: this.state.place,
      time: this.state.time,
      minimum_guests: this.state.minimum_guests,
      maximum_guests: this.state.maximum_guests,
      guests: guests,
    };

    eventsRef.set(event);
  }

  renderGuestsHeader(sectionData) {
    let numGuests = sectionData.length;
    return (
      <Text style={styles.guestListHeader}>{numGuests + " guests selected"}</Text>
    );
  }

  renderGuestRow(guest) {
    return (
      <View>
        <View style={styles.guestRow}>
          <Text style={styles.guestName}>
            {guest.name}
          </Text>
          <Text style={styles.invitationStatus}>
            {'Attending'}
          </Text>
        </View>
        <View style={styles.linebreak}>
        </View>
      </View>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
        <View style={CommonStyles.container}>
          <View style={styles.form}>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>
                {'Name'}
              </Text>
              <TextInput style={styles.textInput}
                         placeholder={"Ladies Night"}
                         placeholderTextColor="#C7C7CD"
                         onChangeText={(text) => this.setState({name: text})}
                         value={this.state.name}>
              </TextInput>
            </View>

            <View style={styles.linebreak}>
            </View>

            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>
                {'Place'}
              </Text>
              <TextInput style={styles.textInput}
                         placeholder={"100 Infinity Way"}
                         placeholderTextColor="#C7C7CD"
                         onChangeText={(text) => this.setState({place: text})}
                         value={this.state.place}>
              </TextInput>
            </View>

            <View style={styles.linebreak}>
            </View>

            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>
                {'Time'}
              </Text>
              <TextInput style={styles.textInput}
                         placeholder={"Sun 3/12 8:00pm"}
                         placeholderTextColor="#C7C7CD"
                         value={this.formatTime(this.state.time)}>
              </TextInput>
            </View>

            <View style={styles.linebreak}>
            </View>

            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>
                {'Min Guests'}
              </Text>
              <Text style={styles.textInputNumber}>
                {this.state.minimum_guests}
              </Text>
              {this.stepperButtons(this.decrementMinGuests.bind(this), this.incrementMinGuests.bind(this))}
            </View>

            <View style={styles.linebreak}>
            </View>

            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>
                {'Max Guests'}
              </Text>
              <Text style={styles.textInputNumber}>
                {this.state.maximum_guests}
              </Text>

              {this.stepperButtons(this.decrementMaxGuests.bind(this), this.incrementMaxGuests.bind(this))}
            </View>

            <View style={styles.linebreak}>
            </View>

            <View style={styles.inputField}>
              <TouchableOpacity onPress={this.openContactsView.bind(this)}>
                <Text style={styles.actionButton}>{'Invite Guests from Contacts'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.guestListContainer}>
              <ListView dataSource={this.state.guestsDataSource}
                        renderRow={this.renderGuestRow.bind(this)} 
                        renderSectionHeader={this.renderGuestsHeader.bind(this)}/>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  stepperButtons(onPressMinus, onPressPlus) {
    return (
      <View style={styles.stepperButtons}>
        <TouchableOpacity onPress={onPressMinus}>
          <View style={[styles.stepperButtonWrapper, styles.minusButton]}>
            <Text style={styles.stepperButton}>{'－'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPlus}>
          <View style={[styles.stepperButtonWrapper, styles.plusButton]}>
            <Text style={styles.stepperButton}>{'＋'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  inputField: {
    backgroundColor: '#fff',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linebreak: {
    height: 1,
    marginLeft: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#C8C7CC',
    borderBottomWidth: 1,
  },
  inputLabel: {
    flex: 3,
    fontFamily: 'Helvetica',
    fontSize: 17,
    paddingLeft: 16,
  },
  actionButton: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    paddingLeft: 16,
    color: "#0076FF",
  },
  textInput: {
    flex: 7,
  },
  textInputNumber: {
    flex: 3,
  },
  stepperButtons: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperButton: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    color: "#0076FF",
  },
  stepperButtonWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderColor: "#0076FF",
    borderWidth: 1,
  },
  plusButton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  minusButton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  guestListContainer: {

  },
  guestListHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#EFEFF4",
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#6D6D72",
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF",
    height: 40,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  guestName: {
    textAlign: 'left',
  },
  invitationStatus: {
    textAlign: 'right',
  }
});

module.exports = Event;