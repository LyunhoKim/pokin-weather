import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

let weatherOptions = {
    Thunderstom: {
      gradient: ["#0F2027", "#2C5364"],
      iconName: "weather-lightning",
      title: "Lightenging!",
      subtitle: "don't go outside today"
    },
    Drizzle: {
      gradient: ["#373B44", "#4286f4"],
      iconName: "weather-fog",
      title: "Drizzle?",
      subtitle: "I don't know what that means."
    },
    Rain: {
      gradient: ["#2193b0", "#6dd5ed"],
      iconName: "weather-pouring",
      title: "It's raining man.",
      subtitle: "You shold take your umbrella."
    },
    Snow: {
      gradient: ["#ff4b1f", "#1fddff"],
      iconName: "weather-snowy",
      title: "Snow! Snow!",
      subtitle: "Do you wanna build snowman?"
    },
    Atmosphere: {
      gradient: ["#a80077", "#66ff00"],
      iconName: "weather-night",
      title: "It's weird.",
      subtitle: "strange atmosphere"
    },
    Clear: {
      gradient: ["#928DAB", "#00d2ff"],
      iconName: "weather-sunny",
      title: "Good Air!",
      subtitle: "great air quality to breath"
    },
    Clouds: {
      gradient: ["#FF512F", "#DD2476"],
      iconName: "weather-cloudy",
      title: "It's cloud.",
      subtitle: "good weather for workout!"
    }
}

export default function Weather( {temp, conditions, location} ) {
  return (    
    <LinearGradient
      colors={weatherOptions[conditions].gradient}
      style={ styles.container }>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>        
        <MaterialCommunityIcons size={95} name={weatherOptions[conditions].iconName} color="white"/>
        <Text style={styles.text}>{temp} °C</Text>
        <Text style={styles.addressText}>{location.city}, {location.country}</Text>
      </View>
          
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[conditions].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[conditions].subtitle}</Text>        
      </View>
      
    </LinearGradient>
    
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  conditions: PropTypes.oneOf([
    "Thunderstom",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
  ]).isRequired,
  location: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",      
  },
  text: {
    fontSize: 35,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  addressText: {
    marginTop: 10,
    color: "white",
    fontStyle: "italic"
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    alignItems: "flex-start",  
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    justifyContent: "flex-start",
    marginLeft: 50
    
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    alignItems: "baseline",
    marginBottom: 175,
    marginLeft: 50,
    fontSize: 20
  }

});