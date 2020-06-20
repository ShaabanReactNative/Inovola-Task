import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

export default class CoursePrice extends Component {
    render() {
        return (
            <View style = {{paddingBottom:15,marginBottom:10 , paddingHorizontal:10}}>
               
                <Text style = {styles.titleStyle} > تكلفة الدورة </Text>
               
                <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
                <Text style = {styles.detailText}> SAR 40 </Text>
                <Text style = {styles.detailText}> الحجز العادى </Text>
                </View>
               
                <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
                <Text style = {styles.detailText}> SAR 80 </Text>
                <Text style = {styles.detailText}> الحجز المميز </Text>
                </View>
               
                <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
                <Text style = {styles.detailText}> SAR 120 </Text>
                <Text style = {styles.detailText}> الحجز السريع </Text>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle : {fontSize:20,fontWeight:'bold',color:'#1e272e', },
    detailText : {fontSize:17,fontWeight:'normal', color:'#485460'},
    
})