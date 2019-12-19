import React from 'react';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';

import Loading from './loading';
import Weather from './weather';

const API_KEY = "57283d1908c826a6710285d1eef0fdfb";

export default class extends React.Component {
  state = {
    isLoading: true
  };  
  getWeather = async(latitude, longitude) => {    
    const { data: { main: { temp }, weather, name, sys: { country } } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&appid=${API_KEY}&units=metric`);        
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main,
      location: {
        city: name,
        country
      },      
      temp });
  }
  getLocation = async() => {
    
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } }  = await Location.getCurrentPositionAsync();      
      
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, location } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} conditions={condition} location={location}/>
  }
  
}
