import React, { Component } from 'react';
import {View,Text,TouchableOpacity, Touchable, Alert} from "react-native";
//-----------State & Props ------------------
/*const RegisterHeaderComponent=({name,text,changeState})=>{
    return(
        <View>
            <Text style={{textAlign:"center"}}>{name}</Text>
            <Text style={{textAlign:"center"}}>{text}</Text>
            <TouchableOpacity onPress={changeState}>
                <Text>CHANGE</Text>
            </TouchableOpacity>
        </View>

    )
}
export default RegisterHeaderComponent;*/

export default class RegisterHeaderComponent extends React.Component{
    constructor(){
        super();
        this.state={
            address:"",
            data:[]
        }
    }
    changeaddress=()=>{
        this.setState({address:"ANK"});
    
    }
    render(){
        const {name,text,changeState}=this.props;
        const{address,data}=this.state;
        return(
            <View>
            <Text style={{textAlign:"center"}}>{name}{text}{address}</Text>

            <TouchableOpacity onPress={()=>{
                //this.setState({address:"ANK"});
                changeState();
                this.changeaddress();
            }}>
                <Text>CHANGE</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{
                data.push("item");
                console.log(data)
            }}>
                <Text>ADD</Text>
            </TouchableOpacity>
        </View>
        )
      
    }
}