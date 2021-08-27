import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native'

const HomeScreen = ({navigation}: any) => {
    return ( 
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Add Training Day" 
                onPress={() => navigation.navigate('Add Training Day')}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default HomeScreen;