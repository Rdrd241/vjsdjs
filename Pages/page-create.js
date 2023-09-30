import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export function PageCreate(){

    return(
        
        <View style={styleLogIn.viewStyle}>
            <Text>Это окно создание автомабиля</Text>
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