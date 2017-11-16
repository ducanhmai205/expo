'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo';


class RegisterScreen extends Component {
   constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: '',
    value: 0
    }
 
  }
 handleOnPress(value){
    this.setState({value:value})
}
UserRegistrationFunction = () =>{
 
 
 const { UserName }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
 
fetch('http://192.168.1.56/KhoahocAPI/user_registration.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: UserName,
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 

        Alert.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
  render() {
    return (
      <View style={styles.container}>
        <Image  source={require('../img/registerscreen.png')} style={styles.backgroundImage}>
         <View style={styles.wrap}>
          <View style={styles.text}>


      </View>
      <View style={styles.fbbutton}>
      <TouchableOpacity  style={{flex: 1,}}>
        <View style={styles.facebookButton}>
           <Text style={styles.TextStyle}> Facebook アカウントで登録 </Text>
         </View>
      </TouchableOpacity>
      </View>
      <View style={styles.orButton}>


      </View>
      <View style={styles.nameInput}>
        <TextInput
            style={{flex: 1,paddingLeft: 20}}
            underlineColorAndroid='transparent'
                        placeholder="Name"
                        placeholderTextColor = "#47E5B3"
                        onChangeText={UserName => this.setState({UserName})}
                     />

      </View>
      
      <View style={styles.emailInput}>
        <TextInput
            style={{flex: 1,paddingLeft: 20}}
            underlineColorAndroid='transparent'
            keyboardType= 'email-address'
                        placeholder="E-mail"
                        placeholderTextColor = "#47E5B3"
                        onChangeText={UserEmail => this.setState({UserEmail})}
                     />

      </View>

      <View style={styles.passwordInput}>
        <TextInput
            style={{flex: 1,paddingLeft: 20}}
            underlineColorAndroid='transparent'
                        placeholder="Password"
                        placeholderTextColor = "#47E5B3"
                        onChangeText={UserPassword => this.setState({UserPassword})}
                        secureTextEntry
                     />

      </View>
             
      <View style={styles.checkboxButton}>

              
               

      </View> 


      <View style={styles.registerButton}>
        <TouchableOpacity style={{flex: 1,marginVertical: 2}} onPress={this.UserRegistrationFunction}>
            <LinearGradient
                       colors={['#54D6C7','#c7f79e']}
                       
                        start={{x: 0.0, y: 0}}
                        end={{x: 1.6, y: 0}}
                       style={{ flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
                     >
                       <Text style={{ fontSize:17,fontWeight: 'bold',color: '#fff', backgroundColor: 'transparent' }}>
                       会 員 登 録
                       </Text>
                       </LinearGradient>
        </TouchableOpacity>

      </View>  

      <View style={styles.loginButton}>
        <View style={styles.loginButton1}>

        </View> 

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
  backgroundColor: 'white',
},
wrap:{
flex: 1,
paddingHorizontal:36,

},
TextStyle:{
 fontSize:13,
textAlign:'center',
color: '#fff',
 backgroundColor: 'transparent',
justifyContent: 'center', alignItems: 'center'
},
backgroundImage:{
  flex: 1,
    width: null,
    height: null,
},
text:{
  flex: 1.4,
backgroundColor: 'pink',
  marginTop: 2
  
},
fbbutton:{
 flex: 0.6,
 marginTop: 2,
  paddingBottom: 9,
  paddingTop: 2.5,

},
facebookButton:{
  flex: 1,
  backgroundColor: '#414eb3',
  justifyContent: 'center', alignItems: 'center',
   borderBottomLeftRadius: 45, borderBottomRightRadius: 45,
     borderTopLeftRadius: 45, borderTopRightRadius: 45,
},
orButton:{
  flex: 1.5,
backgroundColor: 'red',
  marginTop: 5
},
nameInput:{
  flex: 1,

  marginTop: 1
},
emailInput:{
  flex: 1,
   
 
},
passwordInput:{
  flex: 1,
    
},
checkboxButton:{
  flex: 1.4,
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 8,
  backgroundColor: 'red',
  
},
textRadio1:{
backgroundColor:'rgba(0,0,0,0)',
paddingLeft: 10,
paddingRight: 20
},
textRadio2:{
backgroundColor:'rgba(0,0,0,0)',
paddingLeft: 10
},
registerButton:{
  flex: 0.65,
 

  borderWidth: 1.5,
  borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
  borderTopLeftRadius: 40, borderTopRightRadius: 40,
  borderColor:'white',
},
loginButton:{
  flex: 1.4,
  flexDirection:'row-reverse',
  marginTop: 2,
  backgroundColor: 'pink',
},
loginButton1:{
  flex: 0.5,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 130,
  marginVertical: 30,
  marginRight:30
  
}

});


export default RegisterScreen;