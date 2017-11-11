import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TopScreen from '../screens/TopScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginFB from '../screens/LoginFB';
import LoginSuccess from '../screens/LoginSuccess';
import SelectScreen from '../screens/SelectScreen';
import DisplayUserTrainee from '../screens/DisplayUserTrainee';
import DisplayUserTrainer from '../screens/DisplayUserTrainer';



const DemoNavigation = StackNavigator(
{
  TopScreen: { screen: TopScreen },
  RegisterScreen: { screen: RegisterScreen },
  LoginScreen: { screen: LoginScreen },
  LoginFB : { screen: LoginFB },
  LoginSuccess :{ screen: LoginSuccess},
  SelectScreen :{ screen: SelectScreen},
  DisplayUserTrainee : { screen: DisplayUserTrainee },
  DisplayUserTrainer : { screen: DisplayUserTrainer},
},
{
	headerMode:'none'
}

);
export default DemoNavigation;
