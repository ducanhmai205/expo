'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';
import LoginFB from '../screens/LoginFB';
import { StackNavigator } from 'react-navigation';
class LoginScreen extends Component {
	constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 

UserLoginFunction = () =>{
 

 
 
fetch('http://192.168.1.99/KhoahocAPI/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: this.state.UserEmail,
 
    password: this.state.UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('LoginSuccess', { Email: this.state.UserEmail });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
  }
  render() {
    return (
      <View style={styles.container}>
      	<Image  source={require('../img/login.png')} style={styles.backgroundImage}>
      		<View style={styles.wrapAll}>
      				

      			<View style={styles.textTop}>
      				
      			</View>
      				
      				<View style={styles.fbLogin}>
      				<LoginFB> </LoginFB>
      				</View>

      					<View style={styles.orButton}>

						</View>

							<View style={styles.nameInput}>
								<TextInput
									 style={{flex: 1,paddingLeft: 20}}
                                     placeholder="E-mail"
                                     placeholderTextColor = "#47E5B3"
                                     onChangeText={UserEmail => this.setState({UserEmail})}
                                     keybroadType="email-address"
                                />
          
							</View>
      				
							<View style={styles.passwordInput}>
								<TextInput
									 style={{flex: 1,paddingLeft: 20}}
									 placeholderTextColor = "#47E5B3"
                                     placeholder="Password"
                                     onChangeText={UserPassword => this.setState({UserPassword})}
              						 secureTextEntry
                                     
                                />             


							</View>
										
									<View style={styles.topButton}>

									</View>	
									<View style={styles.loginButton}>
										<TouchableOpacity style={{flex: 1,}} onPress={this.UserLoginFunction}>

										</TouchableOpacity>
									</View>	

										<View style={styles.changeButton}>

										</View>

											<View style={styles.registerButton}>

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
backgroundImage:{
	flex: 1,
    width: null,
    height: null,
},
wrapAll:{
	flex: 1,
	paddingHorizontal: 36,
},
textTop:{
	flex: 0.8,
	
},
fbLogin:{
	flex: 0.4,
	
	marginVertical: 5

},
orButton:{
	flex: 0.9,
	
},
nameInput:{
	flex: 0.6,
	
	marginTop: 2,
},
passwordInput:{
	flex: 0.6,
	
	marginBottom: 2
},
topButton:{
	flex: 0.25,
	
},
loginButton:{
	flex: 0.4,
	
	marginBottom: 1
},
changeButton:{
	flex: 0.5,
	
},
registerButton:{
	flex: 1.5,
	
},

});


export default LoginScreen;