'use strict';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import DatePicker from 'react-native-datepicker'

import MultiSlider from 'react-native-multi-slider'

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: '2017-03-10 20:00',
      rangeValues: [0, 0],
    }
  }

  timeComponent() {
    return (
      <View>
        <DatePicker
          style={styles.inputContainer}
          customStyles={{
            dateInput: {
              flex: 1,
              borderColor: "transparent",
            },
          }}
          date={this.state.datetime}
          mode="datetime"
          format="YYYY/MM/DD HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(datetime) => {this.setState({datetime: datetime});}}
        />
      </View>
    );
  }

  rangeComponent() {
    let sliderLength = Dimensions.get('window').width * 0.6;
    return (
      <View>
        <MultiSlider values={[1,20]} sliderLength={sliderLength} onValuesChange={(values) => { this.setState({rangeValues: values}); }}/>
        <Text>Min: {this.state.rangeValues[0]}  Max: {this.state.rangeValues[1]}</Text>
      </View>
    );
  }

  render() {
    // default text component
    let inputComponent = (<View style={styles.inputContainer}>
          <TextInput style={styles.input} id='placeField' />
        </View>);

    if (this.props.inputType == "time") {
      inputComponent = this.timeComponent();
    } else if (this.props.inputType == "range") {
      inputComponent = this.rangeComponent();
    }
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{this.props.label}</Text>
        </View>
        {inputComponent}
      </View>
    )
  }
}

FormInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  inputType: React.PropTypes.string.isRequired,
  onFocus: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 44,
    flexDirection: 'row',
  },
  labelContainer: {
    flex: 2,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#fff',
    height: 40,
    alignItems: 'stretch',
    width: Dimensions.get('window').width * .7,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

module.exports = FormInput;