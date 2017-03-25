'use strict';

import Expo from 'expo';

import React, { Component } from "react";

import {
  Button,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CommonStyles from '../styles/common-styles.js';

import * as firebase from "firebase";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      contacts: [],
    };
  }

  componentWillMount() {
    // Need to inject the Done button in the navigation bar.
    this.props.route.rightButtonText = "Done";
    this.props.route.onRightButtonPress = () => {this.donePressed();}
  }

  componentDidMount() {
    this.getContactsAsync();
  }

  async getContactsAsync() {

    // Ask for permission to query contacts.
    // Seems like this doesn't work..
    // try {
    //   const permission = await Expo.Permissions.getAsync(Expo.Permissions.LOCATION);
    //   if (permission.status !== 'granted') {
    //     // Permission was denied...
    //     const { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    //     if (status !== 'granted') {
    //       return;
    //     }
    //   }
    // } catch (e) {
    //   console.log(e);
    // }

    var contacts = await Expo.Contacts.getContactsAsync([
      Expo.Contacts.PHONE_NUMBERS,
      Expo.Contacts.EMAILS,
    ]);
    if (contacts.length > 0) {
      // TODO this sorting doesn't work.
      contacts.sort((a, b) => {return a.firstName < b.firstName});
      this.setState({
        contacts: contacts,
        dataSource: this.state.dataSource.cloneWithRows(contacts),
      });
    }
  }

  donePressed() {
    // save 
    let selectedContacts = this.state.contacts.filter((contact) => {return contact.selected;});
    this.props.setSelectedContactsCallback(selectedContacts);
    this.props.navigator.pop();
  }
  selectContact(contact, e) {
    var contacts = this.state.contacts.slice();
    for (var i = 0; i < this.state.contacts.length; i++) {
      let c = contacts[i];
      if (c.id == contact.id) {
        var newC = Object.assign({}, contact);
        newC.selected = !c.selected;
        contacts[i] = newC;
        break;
      }
    }
    this.setState({
      contacts: contacts,
      dataSource: this.state.dataSource.cloneWithRows(contacts),
    });
  }

  renderRow(contact) {
    return (
      <View style={styles.contactRowContainer}>
        <View style={styles.contactRow}>
          <TouchableOpacity style={{flex: 1}} onPress={() => {this.selectContact(contact)}}>
            {
              <Text style={{ ...Expo.Font.style('awesome'), marginLeft: 5, marginTop: 1, marginRight: 10}}>
              {contact.selected ? '\uf046' : '\uf096'}
              </Text>
            }
          </TouchableOpacity>
          <Text style={styles.contactName, {flex: 10}}>{contact.name}</Text>
          <View style={{flex: 2, marginRight: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          {
            contact.phoneNumbers && contact.phoneNumbers.length > 0 ? (
              <Text style={{ ...Expo.Font.style('awesome')}}>
                {'\uf10b'}
              </Text>
            ) : null
          }
          {
            contact.emails && contact.emails.length > 0 ? (
              <Text style={{ ...Expo.Font.style('awesome'), marginLeft: 10}}>
                {'\uf003'}
              </Text>
            ) : null
          }
          </View>
        </View>
        <View style={styles.linebreak}>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={CommonStyles.container}>
        <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contactRowContainer: {
    backgroundColor: '#FFFFFF',
  },
  contactRow: {
    flexDirection: 'row',
    margin: 10,
  },
  linebreak: {
    height: 1,
    marginLeft: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#C8C7CC',
    borderBottomWidth: 1,
  },
  contactName: {
    color: '#030303',
    fontFamily: 'Helvetica',
    fontSize: 17
  }
});

module.exports = Contacts;