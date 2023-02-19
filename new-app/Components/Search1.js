import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import React from 'react';
import { StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Search() {


    const changeHandler = (val) => {
        this.setText(val)
    }

    const pressHandler = () => {
        console.log("text")
    }

    return (
        <View style={styles.contain}>
            <TouchableOpacity onPress={() => pressHandler()}>
            <View style={styles.item}>
                <MaterialIcons name="search" size={18} color='#333' />
            </View>
            </TouchableOpacity>
            <TextInput 
                style={StyleSheet.input}
                placeholder='Search'
                onChangeText={changeHandler}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        padding: 16,
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        width: 400,
        borderStyle: 'solid',
        borderRadius: 200,
        alignSelf: 'center',
    },

    item: {
        paddingRight: 10,
        marginRight: 10,
        alignSelf: 'flex-start',
        justifyContent: "flex-start"

    }
})