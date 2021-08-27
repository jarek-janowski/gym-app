import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import PickerCmp from '../components/Picker';
import Colors from '../constants/Colors';
 
const AddTrainingDayScreen = ({route, navigation: {goBack}}: any) => {

    const {addTrainingDay} = route.params
    const [selectedDay, setSelectedDay] = useState('Poniedziałek');
    const [bodyPart, setBodyPart] = useState('');

    const handlePress = () => {
        addTrainingDay(selectedDay, bodyPart);
        goBack();
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Dzień tygodnia</Text>
            <PickerCmp selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            <Text style={styles.text}>Partia ciała</Text>
            <Input placeholder='np. Plecy' style={styles.input} value={bodyPart} onChangeText={setBodyPart}/>
            <View style={styles.buttonContainer}>
                <Button onPress={handlePress}></Button>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginTop: 32
    },
    container: {
        margin: '10%',
        marginTop: '15%'
    },
    input:{
        marginHorizontal: 8,
        marginBottom: 32,
        color: Colors.primary
    },
    picker: {
        color: Colors.primary,
        marginVertical: 32,
    },
    text: {
        fontSize: 24,
        fontFamily: 'lato-bold'
    }
})
 
export default AddTrainingDayScreen;