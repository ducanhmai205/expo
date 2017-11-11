'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  Text,
  Image
} from 'react-native';

class DisplayUserTrainer extends Component {
  constructor(props){
    super(props);
    this.state={
      
         mang:[
          {key:'0',hoten:"guest 1"},
          {key:'1',hoten:"guest 2"},
          {key:'2',hoten:"guest 3"},
          {key:'3',hoten:"guest 4"},
          {key:'4',hoten:"guest 5"},
          {key:'5',hoten:"guest 6"},
          {key:'6',hoten:"guest 7"},
          {key:'7',hoten:"guest 8"},
          {key:'8',hoten:"guest 9"},


         ]
      }
    }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      		 <ImageBackground  source={require('../img/signin04_trainer.png')} style={styles.backgroundImage}>
      		 	<View style={styles.containerImage}>
                <View style={styles.flatList}>
                  <FlatList
                    data={this.state.mang}
                    renderItem={({item}) =>
                                  <View style={styles.line}>
                                          <Text>{item.key}</Text>
                                          <Text>{item.hoten}</Text>
                                            

                                        </View>
                                }

                  />

                </View>
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
containerImage:{
	flex: 1,

	marginRight: 39,
	marginLeft:37,
	marginTop: 95,
	marginBottom: 65
},
line:{
  borderBottomWidth: 1,
  padding: 50,
  borderBottomColor: '#6BF4B6',
  flexDirection: 'row' ,

},
left:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
right:{
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
Avatar:{
  width: 100,
  height: 100,
  borderRadius: 50
}

});


export default DisplayUserTrainer;