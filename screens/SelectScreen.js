'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
class SelectScreen extends Component {
  constructor(){
        super()
        this.state = {
            text: ''
        }
        this.onSelect = this.onSelect.bind(this)
    }

  onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}
  render() {
  	const { navigate } = this.props.navigation;
    const {goBack} = this.props.navigation;
    return (
            		 <ImageBackground  source={require('../img/signin03_trainerscreen.png')} style={styles.backgroundImage}>
                  <View style={styles.icon}>
                <TouchableOpacity onPress={ () => goBack(null)  }>
                      <Ionicons  name="ios-arrow-back-outline" size={20}  />
                </TouchableOpacity>
            </View>
                <View style={styles.center}>
              <Text style={styles.text2}>こんにちは今日はどのようにやってい？ </Text>
                 <View style={styles.inside}>
                  <RadioGroup
                  size={15}
                  color='#fafafa'
                  
                  
                  thickness={8}
                     onSelect = {(index, value) => this.onSelect(index, value)}>
                   
                     <RadioButton  activeColor='#80d8ff' value={'item1'} >
                       <Text style={styles.text3}>こんにちは今日はどの</Text>
                                  </RadioButton>
                    
                     <RadioButton activeColor='#80d8ff' highlightColor='#80d8ff' value={'item2'}>
                       <Text style={styles.text3}>こんにちは今日はどの</Text>
                     </RadioButton>
 
                     <RadioButton activeColor='#80d8ff' value={'item3'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>

                     <RadioButton activeColor='#80d8ff' value={'item4'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                                  </RadioButton>
              
                     <RadioButton activeColor='#80d8ff' value={'item5'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
 
                     <RadioButton activeColor='#80d8ff' highlightColor='#84ffff' value={'item6'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
                     <RadioButton activeColor='#80d8ff' highlightColor='#80d8ff' value={'item7'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
                     <RadioButton activeColor='#80d8ff' value={'item8'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
                   </RadioGroup>             
                    

                 </View>   
            </View>
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
icon:{
backgroundColor:'rgba(0,0,0,0)',
marginTop:40,
marginLeft:30,

},
center:{
  flex: 1,
paddingTop: 60,
  alignItems: 'center',
  
},
inside:{
  paddingTop:30,
},
text2:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 15,
  color: 'white',
 justifyContent: 'center',
 alignItems: 'center',
},
text3:{
  backgroundColor:'rgba(0,0,0,0)',
  
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


export default SelectScreen;