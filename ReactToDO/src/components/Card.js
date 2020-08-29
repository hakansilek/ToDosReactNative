import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { Theme } from '../theme';


const Card = (props) => {

    const {navigation, editMode, item, removeItem} = props;
    const edit = {
        display: !editMode ? 'none' : 'flex'
    };

    return (
    <TouchableHighlight disabled={editMode}  style={styles.container} onPress={() => {
        navigation.navigate('ToDO');
    }}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.count}>{item.count} Görev</Text>
        <TouchableHighlight
              style={[styles.removeCategory, edit]}
              onPress={() => {
                  removeItem(item.id)
              }}
            >
             <Image source={require('../images/remove.png')}
             style={styles.removeImage}></Image>
            </TouchableHighlight>
      </View>
      </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin: 5,
        borderRadius: 10,
        flex:1,
        height:150,
        backgroundColor:Theme.colors.backgroundColor.card,
        shadowOpacity: 0.1,
    },
    title:{
        fontSize: Theme.sizes.cardTitle,
        color:Theme.colors.textColor.cardTitle
    },
    count:{
        fontSize: Theme.sizes.cardCount,
        paddingTop:10,
        color:Theme.colors.textColor.countTitle
    },
    removeCategory:{
        position:"absolute",
        right:5,
        top:5,
    },
    removeImage:{
        width: 25, 
        height: 25,
    },
});

export default Card
