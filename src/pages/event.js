import React, { Component } from "react";
import {
  Button,
  dismissKeyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import CommonStyles from '../styles/common-styles.js';

import DismissKeyboard from "dismissKeyboard";

import * as firebase from "firebase";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      place: "",
      time: 0,
      minimum_guests: 1,
      maximum_guests: 1,
      guests: [],
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

  openContactsView() {

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
  }
});

module.exports = Event;