import React, { useState } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Input from '../components/Input'
 
const AddTrainingDayScreen = ({route, navigation: {goBack}}: any) => {

    const {addTrainingDay} = route.params
    const [selectedDay, setSelectedDay] = useState('');
    const [bodyPart, setBodyPart] = useState('');

    const handlePress = () => {
        addTrainingDay(selectedDay, bodyPart);
        goBack();
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Dzień tygodnia</Text>
            <Picker
                selectedValue={selectedDay}
                onValueChange={(itemValue) =>
                    setSelectedDay(itemValue)
                    }>
                <Picker.Item label="Poniedziałek" value="Poniedziałek" />
                <Picker.Item label="Wtorek" value="Wtorek" />
                <Picker.Item label="Środa" value="Środa" />
                <Picker.Item label="Czwartek" value="Czwartek" />
                <Picker.Item label="Piątek" value="Piątek" />
                <Picker.Item label="Sobota" value="Sobota" />
                <Picker.Item label="Niedziela" value="Niedziela" />
            </Picker>
            <Text style={styles.text}>Partia ciała</Text>
            <Input value={bodyPart} onChangeText={setBodyPart}/>
            <Button title='Dodaj' onPress={handlePress}/>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '10%'
    },
    text: {
        // marginVertical: 10
    }
})
 
export default AddTrainingDayScreen;