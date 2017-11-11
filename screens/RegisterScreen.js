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
import RadioButton from 'radio-button-react-native';
import LoginFB from '../screens/LoginFB';
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
 
 
 
fetch('http://192.168.1.99/KhoahocAPI/user_registration.php', {
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
      	<Image  source={require('../img/register.png')} style={styles.backgroundImage}>
      	 <View style={styles.wrap}>
      		<View style={styles.text}>


			</View>

			<View style={styles.facebookButton}>
			 <LoginFB> </LoginFB>

			</View>

			<View style={styles.orButton}>


			</View>
			<View style={styles.nameInput}>
				<TextInput
						style={{flex: 1,paddingLeft: 20}}
                        placeholder="Name"
                        placeholderTextColor = "#47E5B3"
                        onChangeText={UserName => this.setState({UserName})}
                     />

			</View>
			
			<View style={styles.emailInput}>
				<TextInput
						style={{flex: 1,paddingLeft: 20}}
                        placeholder="E-mail"
                        placeholderTextColor = "#47E5B3"
                        onChangeText={UserEmail => this.setState({UserEmail})}
                     />

			</View>

			<View style={styles.passwordInput}>
				<TextInput
						style={{flex: 1,paddingLeft: 20}}
                        placeholder="Password"
                        placeholderTextColor = "#47E5B3"
                        onChangeText={UserPassword => this.setState({UserPassword})}
                        secureTextEntry
                     />

			</View>
			   		 
			<View style={styles.checkboxButton}>

              
                <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)} >
                <Text style={styles.textRadio1}>Button1</Text>
                 </RadioButton>
            
                  
                
                 <RadioButton   currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}>
                 <Text style={styles.textRadio2}>Button2</Text>
                 </RadioButton>
                 

			</View>	


			<View style={styles.registerButton}>
				<TouchableOpacity style={{flex: 1,}} onPress={this.UserRegistrationFunction}>
						<LinearGradient
                       colors={['#54DAC5','#91FFA0']}
                       
                        start={{x: 0.0, y: 0}}
                        end={{x: 1.6, y: 0}}
                       style={{ flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
                     >
                       <Text style={{ fontWeight: 'bold',color: '#fff', backgroundColor: 'transparent' }}>
                       REGISTER
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
paddingHorizontal: 36,

},
backgroundImage:{
	flex: 1,
    width: null,
    height: null,
},
text:{
	flex: 1.4,
	
	marginBottom: 3
	
},
facebookButton:{
	flex: 0.6,
	
	
	
},
orButton:{
	flex: 1.6,
	
	marginBottom: 1
},
nameInput:{
	flex: 1,
	
	
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
	flex: 0.7,
	borderWidth: 2,
     borderColor:'white',
     borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
     borderTopLeftRadius: 40, borderTopRightRadius: 40,
	paddingTop: 3
},
loginButton:{
	flex: 1.4,
	flexDirection:'row-reverse',
	
	
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