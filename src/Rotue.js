import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";

import Login from './screens/Login/';
import Register from "./screens/Register/";
import Bottom from "./screens/Bottom";
import {createBottomTabNavigator} from "react-navigation-tabs";



const AuthenticateStack=createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            header:null //üst tab bar kısmını yok etmek için kullandıgımız komut satırı.
        }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            header:null
        }
    }
});

export default createAppContainer(AuthenticateStack);