import React, { useState } from 'react';
import {Button, View, Text, StyleSheet} from 'react-native'
import uuid from 'react-native-uuid';

const HomeScreen = ({navigation}: any) => {

    const exampleTraingDay = {
        id: uuid.v1(),
        day: 'Poniedziałek',
        part: 'Plecy'
    }

    const [TrainingDays, setTrainingDays] = useState([exampleTraingDay])

    console.log(TrainingDays)

    const handleAddTrainingDay = (selectedDay: string, bodyPart:string) => {
        const obj = {
            id: uuid.v1(),
            day: selectedDay,
            part: bodyPart
        }
        setTrainingDays([...TrainingDays, obj])
    }

    return ( 
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Add Training Day" 
                onPress={() => navigation.navigate('Add Training Day', {addTrainingDay: handleAddTrainingDay})}
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