import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreens = () => {
    const myName = 'Aarti'
    return (
        <View>
        <Text style={styles.headerStyle}>Getting started with React Native</Text>
        <Text style={styles.textStyle}>My name is {myName} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize : 20,
        color : 'green'
        
    },
    headerStyle:{
        fontSize : 45
    },
    textFeature:{
        backgroundColor : 'yellow'
    }

})

export default ComponentsScreens;

