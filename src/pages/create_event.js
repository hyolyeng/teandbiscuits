import React, { Component } from "react";
import {
    ListView,
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";

import CommonStyle from '../styles/common-styles.js';
import moment from 'moment';

import {Kohana, Sae, Fumi} from "react-native-textinput-effects"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import Button from "apsl-react-native-button";

import FormInput from "../components/form_input";

import DismissKeyboard from "dismissKeyboard";


import {
  GiftedForm, 
  GiftedFormManager
} from 'react-native-gifted-form';

import * as firebase from "firebase";

class CreateEventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      place: '',
      time: '',
    }
  }

  onChangeHandler(e, fieldName) {

  }
  createEvent() {
    console.log(this.state);
  }

  toggleContactsList() {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
        <View style={CommonStyle.container}>
          <View style={styles.form}>
            <FormInput label="Name"
                       inputType="text" />
            <FormInput label="Place"
                       inputType="place" />
            <FormInput label="Time"
                       inputType="time" />
            <FormInput label="Guests"
                       inputType="range" />

            <Button title="Invite Friends from Contacts" onPress={this.toggleContactsList} style={[CommonStyle.buttons, {marginTop: 10}]} textStyle={{fontSize: 18}}>
              Invite Friends from Contacts
            </Button>
            <Button title="Create" onPress={this.createEvent.bind(this)} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
              Create
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>);
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  submit: {
    paddingTop: 30
  },
  separator: {
    height: 10,
  },
  textRow: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
  },
  rowContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  titleContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // selfAlign: 'center',
    // backgroundColor: '#ff0000',
  },
  textInputTitle: {
    fontSize: 13,
    color: '#333',
    paddingLeft: 10,
    flex: 1
  },
  contentContainer: {

  },
  textInput: {
    fontSize: 15,
    flex: 1,
    height: 40,
    marginLeft: 40,
  }
});

module.exports = CreateEventPage;