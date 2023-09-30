import axios from "axios";
import React, { useState } from "react";
import { StyleSheet,  ScrollView, View, Button,  TextInput } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export function PageReg({navigation}){
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const onSubmitFormHandler = async () => {
        try {

            const responsePost = await axios.post(`https://test-api.easy4.ru/create-user`, {
                login,
                password,
               
            });

            if (responsePost.status === 200) {
                navigation.reset(
                    {
                    index: 0,
                    routes: [{name: 'Главная страница'}]
                });
            }else {
                throw new Error("Данные невозможно получить");
            }
        } catch (error) {
            alert(error);
        }
    }
    
    return(
        <ScrollView>
        <View>
          <View style={styleLogIn.txbStyle}>
            <TextInput placeholder="Введите логин..." style={styleLogIn} value={login} onChangeText={onLoginHandler} />
            <TextInput placeholder="Введите пароль..." style={styleLogIn} value={password} onChangeText={onPasswordHandler} />
          </View>
  
          <View style={styleLogIn.btnStyle}>
            <Button title="Зарегестрироваться" onPress={onSubmitFormHandler} />
          </View>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        txbStyle: {
            marginTop: 200,
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnStyle:{
            alignItems: 'center',
            
        }
    }
);