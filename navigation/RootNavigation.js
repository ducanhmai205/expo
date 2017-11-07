import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TopScreen from '../screens/TopScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginFB from '../screens/LoginFB';




const DemoNavigation = StackNavigator(
{
  TopScreen: { screen: TopScreen },
  RegisterScreen: { screen: RegisterScreen },
  LoginScreen: { screen: LoginScreen },
  LoginFB : { screen: LoginFB }
},
{
	headerMode:'none'
}

);
export default DemoNavigation;
