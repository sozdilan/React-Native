import React from "react";
import {View,Text, StyleSheet,TextInput, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemList from "./item_list";

export default class basicToDo extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            data:[]
        }
    }
    handleSave=()=>{
        const{text,data}=this.state;
        data.push({text});
        this.setState({data,text:''});
    
    };
    render(){
        const{text,data}=this.state;
        return(
            <SafeAreaView>
                <View style={style.title}>
                    <Text style={style.title_text}>TO-DO Application</Text> 
                </View>
                <View style={{backgroundColor:'#ccc',padding:8,flexDirection:"row"}}>
                        <TextInput 
                        style={style.input}
                        value={text}
                        onChangeText={(text)=>this.setState({text})}
                        />
                        <TouchableOpacity onPress={this.handleSave} style={style.button}>
                            <Text style={style.title_text}>EKLE</Text>
                        </TouchableOpacity>
                </View>
                <View>
                    {data.map((item)=>{
                        //console.log(item) //direk text olarak geliyor item olarak bastıramıyorum.
                        //return <Text>{item.text}</Text> //item.text olarak kullanıyorum
                        return <ItemList text={item.text}/>
                    })}

                </View>
            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    title:{backgroundColor:"purple",padding:25},
    title_text:{color:"white",textAlign:"center",fontSize:16,fontWeight:'700'},
    input:{flex:1,backgroundColor:"white",padding:8},
    button:{padding:10,backgroundColor:'purple',borderRadius:5,marginLeft:10}

});