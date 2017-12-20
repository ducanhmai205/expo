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
import {Constants, Permissions, Notifications} from 'expo';

  const PUSH_ENDPOINT = 'https://test-expo.herokuapp.com/tokens';
class WelcomeTrainee extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        accountId : `${this.props.navigation.state.params.Account.customer.id}`,
       image: `${this.props.navigation.state.params.Account.avatar}`,
          receivedNotification: null,
          lastNotificationId: null,
    };
  
  }
componentDidMount() {


          this.registerForPushNotificationsAsync();

          //Đăng ký lắng nghe sự kiện push
          Notifications.addListener((receivedNotification) => {
             //Neu app ios dang chay thi phải tạo view hiển thị local Notification

              this.setState({
                  receivedNotification,
                  lastNotificationId: receivedNotification.notificationId,
              });
          });
      }

      registerForPushNotificationsAsync = async () => {
          let {status} = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

          // Stop here if the user did not grant permissions
          if (status !== 'granted') {
              return;
          }

          let token = await Notifications.getExpoPushTokenAsync();
         console.log("ducah",token)
          console.log("ducah",this.state.accountId)
         this.guiTokenLenServerMinh(token);
      };

      guiTokenLenServerMinh = async (token)=>{
          // Gui Push token lên server của mình
          // Thường là cần user_id và push_token
          return fetch(PUSH_ENDPOINT, {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  token: {
                      value: token,
                  },
              }),
          });
      };
  render() {
        const { image } = this.state;
        const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
              
          <ImageBackground  source={require('../img/signin02.png')} style={styles.backgroundImage}>
              <View style={styles.imageAvatar}>
                       <Image  source={require('../img/user/avt.png')} style={styles.avtImage} resizeMode="contain">
                          {image &&
                          <Image source={{ uri: this.state.image }} style={{ width: 90, height: 90,borderRadius: 90/2, }} resizeMode="stretch" />}
                       </Image>
                      <Text style={styles.text}> ようこそ、{this.props.navigation.state.params.Account.customer.name} さん ! </Text>
                      <Text style={styles.text2}> 
                           トレーニングの効果を出す為に
                       </Text>
                       <Text style={styles.text2}> 
                           もう少しあなたの事を教えてください

                       </Text>
                    </View>



          <View style={styles.nextButton}>
                <TouchableOpacity style={styles.TouchableOpacity} onPress={ ()=> {

                navigate('TraineeTreatment',{ Account: this.props.navigation.state.params.Account  });}}>

                    <Text style={{fontWeight: 'bold',color:'#3C2C6C'}}> START ! </Text> 
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
  flex: 0.7,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 40,
  
},
avtImage:{
  flex: 0.6,
  width: 150,
  marginTop: 60,
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: 5,
  paddingBottom: 4
},
text:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 20,
  color: '#402677',

  marginBottom: 15,
  justifyContent: 'center',
 alignItems: 'center',
 paddingHorizontal: 40
},
text2:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 15,
    marginBottom: 5,
  color: '#402677',
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


export default WelcomeTrainee;