import React, { Component } from 'react'
import { Text, View , StyleSheet , Image } from 'react-native'

export default class TrainerInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            trainerName : '',
            trainerInfo : '',
            trainerImg : ''
                    }
            }

    // fetching data from server
    componentDidMount() {
        fetch('https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34')
        .then((response) => response.json())
        .then((json) => this.setState({
            trainerName : json.trainerName,
            trainerInfo : json.trainerInfo,
            trainerImg : json.trainerImg
               
        }))
        .catch((error) => console.error(error))
    }

    render() {
        return (
            <View style = {{borderBottomWidth:1,borderBottomColor:'#d2dae2',paddingBottom:15,marginBottom:10}}>
               
               <View style = {{flexDirection:'row', justifyContent:"flex-end"}}>
                 <Text style = {styles.detail}>{this.state.trainerName}</Text>
                 {/*<Image source = {{ uri : this.state.trainerImg}} style ={styles.img} /> url لا يعمل*/ }
                 <Image source = { require ('G:/Task/Inovola/android/app/imgs/Trainer.png') } style ={styles.img} />
               </View>
               
               <Text style = {styles.detail}> {this.state.trainerInfo} </Text>
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    nameStyle : {fontSize:20,fontWeight:'bold',paddingRight:10,color:'#1e272e', },
    detail : {fontSize:17,fontWeight:'normal',paddingRight:10 , color:'#485460'},
    img : {height:30 , width:30 , borderRadius:15, marginRight:10}
    
})