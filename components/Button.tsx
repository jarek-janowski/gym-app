import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons'
 
const Button = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
            <View style={styles.button}>
                <Ionicons name="add" size={28} color={Colors.white} />
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    button: {
        width: 54,
        height: 54,
        borderRadius: 54/2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
})

export default Button;

