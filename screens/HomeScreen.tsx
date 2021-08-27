import React, { useState } from 'react';
import { Alert, ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Card } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
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

    const handleAddTrainingDay = (selectedDay: string, bodyPart:string) => {
        const obj = {
            id: uuid.v1(),
            day: selectedDay,
            part: bodyPart
        }
        setTrainingDays([...TrainingDays, obj])
    }

    const handleRemoveTrainingDay = (id: any) => {
        Alert.alert("Uwaga!", 'Czy na pewno chcesz usunąć ten trening, tej decyzji nie da się potem cofnąć',
            [
                {
                text: "ANULUJ",
                onPress: () => console.log("Cancel Pressed"),
                
                },
                { text: "OK", onPress: () => {
                    const removeSelectedTraining = TrainingDays.filter(training => {
                        return training.id !== id
                    })
                    setTrainingDays(removeSelectedTraining);
                }}
            ]
        );
        
    }

    return ( 
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.heading}>Wybierz trening lub dodaj nowy..</Text>
                <ScrollView>
                    {TrainingDays.map((day: any) => (
                        <Card key={day.id}>
                            <View style={styles.cardTitleContainer}>
                                <Card.Title style={styles.day}>
                                    {day.day} 
                                </Card.Title>
                                <TouchableOpacity onPress={() => handleRemoveTrainingDay(day.id)} activeOpacity={0.5}>
                                    <Ionicons name="trash" size={22} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                            <Card.Divider/>
                            <Text style={styles.part}>{day.part}</Text>
                        </Card>
                    ))}
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Button 
                    onPress={() => navigation.navigate('AddTrainingDay', {addTrainingDay: handleAddTrainingDay})}>
                    </Button>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: '5%',
        paddingTop: '10%',
        flex: 1,
        backgroundColor: Colors.white
    },
    buttonContainer: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '2.5%'
    },
    cardTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
    },
    day: {
        textAlign: 'left',
        fontSize: 16,
    },
    heading:{
        textAlign: 'center',
        fontFamily: 'lato-regular',
        fontSize: 22,
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