'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class TopScreen extends Component {
  render() {
  	    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      	<Image  source={require('../img/top.png')} style={styles.backgroundImage}>
      		<View style={styles.login}>
			</View>

			<View style={styles.button}>
			   <View style={styles.buttonLogin}>
			   		<TouchableOpacity onPress={ ()=> {navigate('LoginScreen')}}>
			   			<Image  source={require('../img/loginbutton.png')} style={styles.loginbutton}></Image>
			   		</TouchableOpacity>
			   		 </View>
			   		<View style={styles.buttonRegister}>
			   		<TouchableOpacity onPress={ ()=> {navigate('RegisterScreen') }}>
			   			<Image  source={require('../img/buttontop.png')} style={styles.buttonregister}></Image>
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
    width: null,
    height: null,
},
login:{
	flex: 1,
	
},

button:{
	flex: 1,
	


},
loginbutton:{
		
	  flex: 1,
	 
	 resizeMode:'contain',

	 
	
},
buttonregister:{
	resizeMode:'contain',

	 flex: 1,

},
buttonLogin:{
	flex: 1,
	backgroundColor: 'green',
	alignItems: 'center',
	 justifyContent: 'center',
	 marginTop: 105,
	 paddingTop: 14
},
buttonRegister:{
	flex: 1,
	alignItems: 'center',
	backgroundColor: 'yellow',
	marginBottom: 120,
	paddingBottom: 35,
	paddingLeft:3

}

});


export default TopScreen;