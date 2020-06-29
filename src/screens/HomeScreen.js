import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const HomeScreen =  props => {
  console.log(props);
  
  return <View>
      <Button 
          title   = "Tap ME!"
          onPress = {()=> props.navigation.navigate("Details")}
          />
          <Button 
          title   = "Move to ImageList!"
          onPress = {()=> props.navigation.navigate("ImageList")}
          />
          </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
