import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {PageLogin} from './Pages/page-login';
import {PageReg} from './Pages/page-reg';
import {PageUser} from './Pages/page-main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Главная страница">
        <Stack.Screen options= {{headerShow: true}} name ='Главная страница' component ={PageLogin}  />
        <Stack.Screen options= {{headerShow: true}} name ='Регистрация' component ={PageReg} />
        <Stack.Screen options= {{headerShow: true}} name ='Окно пользователя' component ={PageUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
