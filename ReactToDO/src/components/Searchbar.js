import React from 'react';

import { TextInput, StyleSheet } from 'react-native';
import { Theme } from '../theme';

const Searchbar = (props) => {
    return (
        <TextInput placeholder="Ara" style={styles.searchbar} 
        onChangeText={text => props.filterFunction(text)}></TextInput>
    );
}
const styles = StyleSheet.create({
    searchbar:{
        height: 50,
        backgroundColor: Theme.colors.backgroundColor.searchbar,
        color: Theme.colors.textColor.searchbar,
        padding:10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:5,
        marginTop:5,
        borderRadius:10
    }
})

export default Searchbar;