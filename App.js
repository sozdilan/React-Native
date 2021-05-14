import React from 'react';
import Route from './src/Rotue';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {Formik} from "formik";
import * as Yup from 'yup';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class App extends React.Component{
    async componentDidMount() {
        //veri yükleme komutu
        //AsyncStorage.setItem('application_name',"DİLANSOZ");
        //veriyi alma 1.YOL
        /*AsyncStorage.getItem("application_name").then((res)=>{
            console.log(res)
        })*/

        /*const application_name = await AsyncStorage.getItem("application_name");
        console.log(application_name);*/
        //await methodunun çalışabilmesi için async componentDidMount içerinde yazılmalıdır.

        //diziyi direk olarak koyamıyoruz. JSON.stringify olarak koyup dönüşüm işlemleriyle kullanabiliyoruz;
        /*AsyncStorage.setItem("application_name",JSON.stringify(['a','b','c']));
        AsyncStorage.getItem("application_name").then((res)=>{
            console.log(res)
            console.log(JSON.parse(res))
        });*/

        //Depolama işlemi string olmak zorunda
    }


    render(){
        return(
              <Route/>
        )
    }
}


