import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
    <Text style={styles.text}>Hi New York, Toronto</Text>
    <Button 
      onPress={ () => navigation.navigate('Components') }
      title="Go to Components"/>

    <Button 
    onPress={() => navigation.navigate('List')}
    title = "Go to Lists"/>  

    <Button
    onPress={() => navigation.navigate('Images')}
    title="Go to Images"/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
