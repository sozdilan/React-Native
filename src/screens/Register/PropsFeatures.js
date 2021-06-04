import React from 'react';
import{Text,View}from 'react-native';
import PropTypes from "prop-types";
export default class PropsFeatures extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.name}{this.props.age}</Text>
            </View>
        )
    }
    
}
PropsFeatures.PropTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number
};
index.defaultProps={
    name:"Ali",
    age:25
}