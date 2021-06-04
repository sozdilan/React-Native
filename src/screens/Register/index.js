import React from "react";
import {Text, View,TouchableOpacity} from "react-native";
import RegisterHeaderComponent from "./RegisterHeader";
import PropsFeatures from "./PropsFeatures";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Register extends React.Component{
    constructor(){
        super();
        /*this.state={
            namesurname:"dilansoz",
            text:"Welcome"
        };*/
    };
    /*onchangeState=()=>{
        this.setState({namesurname:"aabb",text:"Hi"});
    }*/
    render() {
        //Props & State Örnek 
        /*const {namesurname,text}=this.state;
        return(
            <View>
                <RegisterHeaderComponent name={namesurname} text={text} changeState={this.onchangeState}/>
            </View>
        )*/

        //PropType ve Default Props
        /*return(
            <SafeAreaView>
                <PropsFeatures
                 name={"Dilan Söz"}
                 age={22}
                 />
            </SafeAreaView>     
        )*/
    }
}