import React, { Component } from 'react';
import { Text, View, StyleSheet , StatusBar,TouchableOpacity,Image } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";




export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [ ]
                
        };
        
      }

       // fetching data (imgs) from server
      componentDidMount() {
        fetch('https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34')
        
        .then((response) => response.json())
        .then((json) => this.setState({images : json.img}))
        .catch((error) => console.error(error)) 
      }


    render() {
        return (
            <View style = {{marginBottom:10}}>
                
                <StatusBar translucent = {true} backgroundColor = 'transparent'/>
                
                <SliderBox
                images={this.state.images}
                dotColor="#95a5a6"
                dotStyle = {{width: 15,
                            height: 15,
                            borderRadius: 15}} 
                autoplay = {true}
                circleLoop
                paginationBoxStyle={{
                           alignSelf: 'flex-start',
                           paddingVertical: 10 }}
                /> 
                                
                <TouchableOpacity style = {styles.save}>
                    <Image style = {{width:20 , height:20}} source = {require ('G:/Task/Inovola/android/app/imgs/Save.png')}/>
                </TouchableOpacity>
                                
                <TouchableOpacity style = {styles.share} >
                    <Image style = {{width:20 , height:20}} source = {require ('G:/Task/Inovola/android/app/imgs/Share.png')}/>
                </TouchableOpacity>
                                
                <TouchableOpacity style = {styles.arrow} >
                    <Image style = {{width:13 , height:13}} source = {require ('G:/Task/Inovola/android/app/imgs/Arrow.png')}/>
                </TouchableOpacity>
                                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    save : {
        position:'absolute' ,
        top:0 ,
        left:15,
        marginTop:40,
      
    },
    share : {
        position:'absolute' ,
        top:0 ,
        left:30,
        marginTop:40,
        marginLeft:20
    },
    arrow : {
        position:'absolute' ,
        top:0 ,
        right:15,
        marginTop:40,
       
    },
})