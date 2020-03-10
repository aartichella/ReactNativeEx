import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageDetails from '../Components/ImageDetails';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetails title = "Forest" imgSource = {require('../../assets/forest.jpg')} imgScore = "9"/>
        <ImageDetails title = "Mountain" imgSource = {require('../../assets/mountain.jpg')} imgScore = '6'/>
        <ImageDetails title = "Beach" imgSource = {require('../../assets/beach.jpg')} imgScore = '8'/>
    </View>
    );
}

const styles = StyleSheet.create()

export default ImageScreen;