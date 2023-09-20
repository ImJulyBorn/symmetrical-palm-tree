import * as React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import BottomTabNavigator from './screens/BottomTabNavigator';

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    )
  }
}

//npx create-expo-app testApp