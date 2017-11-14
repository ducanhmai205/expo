'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';

class SelectScreen extends Component {
  render() {
  	const { navigate } = this.props.navigation;
    return (
            		 <ImageBackground  source={require('../img/signin03_trainerscreen.png')} style={styles.backgroundImage}>


            		           <View style={styles.nextButton}>
                					<TouchableOpacity style={styles.TouchableOpacity} onPress={ ()=> {
                					navigate('DisplayUserTrainer');}}>
                					    <Text style={{fontWeight: 'bold'}}> NEXT ! </Text> 
            					 	</TouchableOpacity> 
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
nextButton:{
   flex: 1,
   flexDirection: 'row' , 
   position:'absolute',
   bottom: 0,
   height: 70,
   backgroundColor:'white',
   width: '100%',
  
},
TouchableOpacity:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});


export default SelectScreen;