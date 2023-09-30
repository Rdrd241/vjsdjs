import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";
import Constants from "expo-constants";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {PageCreate} from './page-create'

const Tab = createBottomTabNavigator()
const UserScreen = () => (
    <View style={styleLogIn.viewStyle}>
      <Text>Это окно пользователя</Text>
    </View>
  );
export function PageUser(){
    return(
      <View style={styleLogIn.viewStyle}>
      <Text>Это окно пользователя</Text>
    </View>
  
    );
}

const styleLogIn=StyleSheet.create(
    {
        viewStyle:{
            flex: 1, 
            justifyContent: 'center',
             alignItems: 'center' 
        },
    }
);
