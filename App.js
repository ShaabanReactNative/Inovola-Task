import React, { Component } from 'react';
import { Text, View  ,ScrollView } from 'react-native';
import 'react-native-gesture-handler';

import Button from './Button';
import AboutCourse from './AboutCourse';
import CourseInfo from './CourseInfo';
import CoursePrice from './CoursePrice';
import TrainerInfo from './TrainerInfo';
import ImageSlider from './ImageSlider';

export default class App extends Component {

  render() {
    return (
      <View style = {{ backgroundColor:'white'}}>
         
         <View style = {{height:'90%'}}>
         <ScrollView>
        <ImageSlider />
        <CourseInfo/>
        <TrainerInfo/>
        <AboutCourse/>
        <CoursePrice/>
        </ScrollView>
        </View>
        
        <View style = {{ justifyContent:'flex-end',height : '13%' }} >
         <Button/>
        </View>
        
      </View>
    )
  }
}
