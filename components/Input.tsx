import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props: any) => {
    return <TextInput placeholder={props.placeholder} {...props} style={{...styles.input, ...props.style}}/>;
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 20,
    }
})
 
export default Input;