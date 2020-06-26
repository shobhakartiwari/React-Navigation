
//Import packages
import React from "react";
import { Text, StyleSheet } from "react-native";


//Create a function which return JSX
const DetailsScreen = () => {
    return <Text style = {styles.text}>  This is shobhakar tiwari  </Text>;
};


//write style related code 
const styles = StyleSheet.create(
    {
        text:{
            fontSize:30
        }
    }
);

// export it 
export default DetailsScreen;



