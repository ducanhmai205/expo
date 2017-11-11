'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image
} from 'react-native';

class InformationUser extends Component {
  render() {
    return (
      
      		 <ImageBackground  source={require('../img/trainer_detail1.png')} style={styles.backgroundImage}>
      		 			 <View style={styles.container}>
      		 			 	<View style={styles.header}>


      		 			 	</View>

      		 			 	<View style={styles.content}>


      		 			 	</View>
      		 			 </View>
      		 </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
backgroundImage:{
	flex: 1,
	width: null,
	height: null,
},
container:{
	flex: 1,
	marginHorizontal: 30,
},
header:{
	flex: 0.8,
	backgroundColor: 'green',
	
},
content:{
	flex: 5,
	backgroundColor: 'pink',
	marginBottom: 25
}

});


export default InformationUser;