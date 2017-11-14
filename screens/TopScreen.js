'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';
import { LinearGradient } from 'expo';
class TopScreen extends Component {
  render() {
        const { navigate } = this.props.navigation;
        const Backgrounds = {
          Login: require('../img/topscreen.png')
};
    return (
      <View style={styles.container}>
        <Image  source={Backgrounds.Login} style={styles.backgroundImage}>
              <View style={styles.wrapButton}>
                  <View style={styles.loginButton}>
                    <TouchableOpacity onPress={ ()=> {navigate('LoginScreen')}} style={{flex: 1,}}>
                      
                     <LinearGradient
                       colors={['#BDFFF3','#4AC29A',]}
                       
                        start={{x: 0.0, y: 0}}
                        end={{x: 1.6, y: 0}}
                       style={{ flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}
                     >
                       <Text style={{ fontWeight: 'bold',color: '#fff', backgroundColor: 'transparent' }}>
                       L O G I N
                       </Text>
              
                   </LinearGradient>
                </TouchableOpacity>

                  </View>

              <View style={styles.registerButton}>
                <TouchableOpacity onPress={ ()=> {navigate('RegisterScreen')}} style={{flex: 1,}}>
                      
                              <LinearGradient
                                colors={['#ffffff','#ffffff',]}
                       
                                 start={{x: 0.0, y: 0}}
                                 end={{x: 1.6, y: 0}}
                                style={{ flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}
                              >
                                <Text style={{ fontWeight: 'bold',color: '#52D8C4', backgroundColor: 'transparent' }}>
                                Register
                                </Text>
              
                   </LinearGradient>
                </TouchableOpacity>

                    </View>
              </View>


        </Image>
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
  flexDirection: 'column-reverse' ,
    width: null,
    height: null,
},
wrapButton:{
  flex: 0.3,
  marginHorizontal: 93,
  marginTop: 90,
  marginBottom: 100,
  
},
loginButton:{
  flex: 1,

  marginBottom: 15,
  marginTop: 20,
  
     borderWidth: 2,
     borderColor:'white',
     borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
     borderTopLeftRadius: 30, borderTopRightRadius: 30,
  
},
registerButton:{
  flex: 1,

  marginBottom: 15,
  
  
     borderWidth: 2,
     borderColor:'#52D8C4',
     borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
      borderTopLeftRadius: 30, borderTopRightRadius: 30,
   
}


});


export default TopScreen;