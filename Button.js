import React, { Component } from 'react'
import { StyleSheet,Text, View  , TouchableOpacity } from 'react-native'

export default class Button extends Component {
    render() {
        return (
            <View style = {{height : '100%'}}>
                 <TouchableOpacity style = {styles.button} >
                    <Text style = {styles.btnText}> قم بالحجز الان </Text>
                 </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button : {
        height : 50,
        backgroundColor : '#8e44ad',
        justifyContent:'center',
        alignItems:'center'
    },
    btnText : {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
