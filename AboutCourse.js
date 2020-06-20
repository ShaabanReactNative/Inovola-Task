import React, { Component } from 'react'
import { Text, View , StyleSheet , ScrollView } from 'react-native'

export default class AboutCourse extends Component {
    constructor (props) {
        super(props);
        this.state = {
            courseDetails : '',
            
                    }
            }
     
    // fetching data from server
    componentDidMount() {
        fetch('https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34')
        .then((response) => response.json())
        .then((json) => this.setState({
               courseDetails : json.occasionDetail,
               
        }))
        .catch((error) => console.error(error))
    }

    render() {
        return (
            <View style = {{borderBottomWidth:1,borderBottomColor:'#d2dae2',paddingBottom:15,marginBottom:10}}>
                <Text style = {styles.about}> عن الدورة </Text>
                <Text style = {styles.otherText}> {this.state.courseDetails} </Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    about : {fontSize:20,fontWeight:'bold',paddingRight:10,color:'#1e272e', },
    otherText : {fontSize:15,fontWeight:'normal',paddingRight:10 , color:'#485460'},
    
})