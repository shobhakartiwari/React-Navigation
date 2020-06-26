import React from "react";
import { Text, StyleSheet, Button } from "react-native";

const HomeScreen =  props => {
  console.log(props);
  
  return <Button 
          title   = "Tap ME!"
          onPress = {()=> props.navigation.navigate("Details")}
          />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
