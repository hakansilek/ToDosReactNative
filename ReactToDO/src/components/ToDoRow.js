import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text, StyleSheet } from "react-native";
import { Theme } from '../theme';
import { color } from 'react-native-reanimated';

const ToDoRow = (props) => {
    const{item, changeCheck} = props
    const [toggleCheckBox, setToggleCheckBox] = useState(item.checked)
    return (
        <View style={styles.content}>
             <CheckBox
                disabled={false}
                value={toggleCheckBox}
                animationDuration={0.5}
                onValueChange={(newValue) => {
                    setToggleCheckBox(newValue)
                    changeCheck(item.id, newValue)
                }}
                />
                <Text style={styles.text}>{item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding:10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius:5,
        backgroundColor:Theme.colors.backgroundColor.card,
        
    },
    text:{
        flex: 1, 
        flexWrap: 'wrap',
        marginStart:8,
        color: Theme.colors.textColor.countTitle,
    }
})

export default ToDoRow