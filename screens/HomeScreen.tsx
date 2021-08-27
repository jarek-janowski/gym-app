import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet} from 'react-native'
import { Card } from 'react-native-elements'
import uuid from 'react-native-uuid';
import Colors from '../constants/Colors';
import Button from '../components/Button'

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
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.heading}> /Gym App/ </Text>
                
                <ScrollView>
                    {TrainingDays.map((day: any) => (
                        <Card key={day.id}>
                            <Card.Title style={styles.day}>{day.day}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.part}>{day.part}</Text>
                        </Card>
                    ))}
                </ScrollView>
                <Button onPress={() => navigation.navigate('Add Training Day', {addTrainingDay: handleAddTrainingDay})}>
                Dodaj trening 💪
                </Button>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        // margin: '10%',
        flex: 1,
        backgroundColor: Colors.white
    },
    
    container: {
        flex: 1,
        marginVertical: '5%'
    },
    day: {
        // fontFamily: 'lato-bold',
        textAlign: 'left',
        fontSize: 16,
    },
    heading:{
        textAlign: 'center',
        fontFamily: 'lato-bold',
        fontSize: 32,
        marginBottom: 32
    },
    item: {
        fontFamily: 'lato-regular'
    },
    part: {
        fontFamily: 'lato-regular',
        color: Colors.primary,
        textTransform: 'uppercase',
        fontSize: 32,
        marginTop: 8
    }
})
 
export default HomeScreen;