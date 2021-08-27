import React from 'react';
import {Pressable, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'
 
const Button = (props: any) => {
    return ( 
    <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable> 
    );
}
 
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        marginHorizontal: '15%',
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 4
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'lato-bold',
        color: Colors.white,
        letterSpacing: 0.25,
    },
})

export default Button;

