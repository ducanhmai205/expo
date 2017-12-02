'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

class ForgotPassword extends Component {
  render() {
    return (
        <Image  source={require('../img/screen/forgotpass.png')} style={styles.backgroundImage}>

        </Image>
    );
  }
}

const styles = StyleSheet.create({
backgroundImage:{
  flex: 1,
  width: null,
  height: null,
},
});


export default ForgotPassword;