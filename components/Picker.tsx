import React from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Colors from '../constants/Colors'

export interface Props {
    selectedDay: string,
    setSelectedDay: (itemValue: string) => void
}
 
const PickerCmp:React.FC<Props> = ({selectedDay, setSelectedDay}) => {
    return ( 
        <Picker
            style={styles.picker}
            selectedValue={selectedDay}
            onValueChange={(itemValue) => setSelectedDay(itemValue)}
            >
            <Picker.Item label="Poniedziałek" value="Poniedziałek" />
            <Picker.Item label="Wtorek" value="Wtorek" />
            <Picker.Item label="Środa" value="Środa" />
            <Picker.Item label="Czwartek" value="Czwartek" />
            <Picker.Item label="Piątek" value="Piątek" />
            <Picker.Item label="Sobota" value="Sobota" />
            <Picker.Item label="Niedziela" value="Niedziela" />
        </Picker>
     );
}

const styles = StyleSheet.create({
    picker: {
        color: Colors.primary,
        marginVertical: 32,
    },
})
 
export default PickerCmp;