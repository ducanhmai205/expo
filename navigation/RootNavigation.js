import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TopScreen from '../screens/TopScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginFB from '../screens/LoginFB';
import ForgotPassword from '../screens/ForgotPassword';

import WelcomeTrainee from '../screens/trainee/WelcomeTrainee';
import WelcomeTrainer from '../screens/trainer/WelcomeTrainer';

import TraineeTreatment from '../screens/trainee/TraineeTreatment';
import TrainerSpecialize from '../screens/trainer/TrainerSpecialize';


import SelectTrainee from '../screens/trainee/SelectTrainee';
import SelectTrainer from '../screens/trainer/SelectTrainer';

import DetailTrainer from '../screens/trainer/DetailTrainer';




const DemoNavigation = StackNavigator(
{	
  TopScreen: { screen: TopScreen },
  RegisterScreen: { screen: RegisterScreen },
  LoginScreen: { screen: LoginScreen },
  LoginFB : { screen: LoginFB },
  ForgotPassword: { screen: ForgotPassword},

  WelcomeTrainee: { screen: WelcomeTrainee},
  WelcomeTrainer: { screen: WelcomeTrainer},

  TraineeTreatment: { screen: TraineeTreatment},
  TrainerSpecialize: { screen: TrainerSpecialize},



  SelectTrainee: { screen: SelectTrainee},
  SelectTrainer: { screen: SelectTrainer},
  DetailTrainer: { screen: DetailTrainer},
},
{
	headerMode:'none'
}

);
export default DemoNavigation;
