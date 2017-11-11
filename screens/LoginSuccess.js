'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from 'react-native';

class LoginSuccess extends Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
              
          <ImageBackground  source={require('../img/signin02.png')} style={styles.backgroundImage}>
              <View style={styles.imageAvatar}>
                      <Image   style={{ height: 100,
                      borderRadius: 50,
                      width: 100 }}
                      source={require('../img/default_avatar.png')} />
                      <Text style={styles.text}> こんにちは {this.props.navigation.state.params.Email}  </Text>
                      <Text style={styles.text2}> 
                                 こんにちは今日はどのようにやってい？
                       </Text>
                    </View>



          <View style={styles.nextButton}>
                <TouchableOpacity style={styles.TouchableOpacity} onPress={ ()=> {
                navigate('SelectScreen');}}>
                    <Text style={{fontWeight: 'bold'}}> START ! </Text> 
             </TouchableOpacity> 
              


          </View>

          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
},
backgroundImage:{
  flex: 1,
  width: null,
  height: null
},
imageAvatar:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 40
},
text:{
   backgroundColor:'rgba(0,0,0,0)',
  fontSize: 20,
  color: 'black',
  marginTop: 10,
  marginBottom: 15,
  justifyContent: 'center',
 alignItems: 'center',
 paddingHorizontal: 40
},
text2:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 15,
  color: 'black',
 justifyContent: 'center',
 alignItems: 'center',
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


export default LoginSuccess;