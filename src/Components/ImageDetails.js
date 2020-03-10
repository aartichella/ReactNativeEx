import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageDetails = (props) => {
return (
    <View>
        <Image source = {props.imgSource}/>
        <Text>Image Title {props.title}</Text>
        <Text>Image Score - {props.imgScore}</Text>
    </View>
);
}

const styles = StyleSheet.create()


export default ImageDetails;