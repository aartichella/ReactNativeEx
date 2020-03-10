import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {

    const friends = [ 
        {name : 'Friend#1', age :'22'},
        {name : 'Friend#2', age :'20'},
        {name : 'Friend#3', age :'23'},
        {name : 'Friend#4', age :'26'},
        {name : 'Friend#5', age :'32'},
        {name : 'Friend#6', age :'40'},
        {name : 'Friend#7', age :'25'},
        {name : 'Friend#8', age :'27'}
    ];
    return <FlatList 
            keyExtractor = {keyi => keyi.name}
            data = {friends} 
            renderItem = {({item}) => {
                return <Text style={styles.textStyle}>Name {item.name} - Age {item.age}</Text>
            }}/>
};

const styles = StyleSheet.create ({
    textStyle:{ 
        marginVertical : 50
    }
});

export default ListScreen;

