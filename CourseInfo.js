import React, { Component } from 'react'
import { Text, View , StyleSheet , Image  } from 'react-native'

export default class CourseInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            courseType : '',
            courseName : '',
            courseDate : '',
            address : '',
            
        }
        
    }
    
    // fetching data from server
    componentDidMount() {
        fetch('https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34')
        .then((response) => response.json())
        .then((json) => this.setState({
               courseType : json.interest,
               courseName : json.title,
               courseDate : json.date,
               address : json.address
        }))
        .catch((error) => console.error(error))
    }
    
    render() {
        return (
            <View style = {{borderBottomWidth:1,borderBottomColor:'#d2dae2',paddingBottom:15,marginBottom:10}}>
               
                <Text style = {styles.otherText}># {this.state.courseType} </Text>
               
                <View style = {{flexDirection:'row' , justifyContent : 'flex-end',marginBottom:10}}>
                <Text style = {styles.nameStyle}>{this.state.courseName} </Text>
                </View>
               
                <View style = {{flexDirection:'row' , justifyContent : 'flex-end',marginBottom:10}}>
                <Text style = {styles.otherText}>{this.state.courseDate} </Text>
                <Image source = {require ('G:/Task/Inovola/android/app/imgs/Date.png')} style = {{height:19 , width:20 , marginRight:10}} />
                </View>
               
                <View style = {{flexDirection:'row' , justifyContent : 'flex-end'}}  >
                <Text style = {styles.otherText}>{this.state.address} </Text>
                <Image source = {require ('G:/Task/Inovola/android/app/imgs/Address.png')} style = {{height:19 , width:20 , marginRight:10}} />
                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nameStyle : {fontSize:20,fontWeight:'bold',color:'#1e272e'},
    otherText : {fontSize:17,fontWeight:'normal',paddingRight:10 , color:'#485460'},
    
})