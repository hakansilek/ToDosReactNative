import React, { useState, useEffect }from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ToDoRow from '../components/ToDoRow';
import Error from '../components/Error';

import {Theme} from '../theme';
const ToDO = ({navigation}) => {

    const [data, setData]  = useState(null)
    const [modalVisible, setModalVisible]  = useState(false)
    const [errorMessage, setErrorMessage]  = useState('HATA')

    const changeCheck = (itemId, isCheck) => {
        listdata = listdata.map(p =>p.id === itemId
              ? { ...p, checked: isCheck }
              : p)
        setData(listdata.sort((x,y) => (x.checked === y.checked)? 0 : x.checked ? 1 : -1))
    }

    const closeErrorDialog = () => {
        setModalVisible(false)
        navigation.goBack()
    }

    useEffect(()=>{
        fetch('https://hstodos.free.beeceptor.com/todo/1')
        .then((response) => response.json())
        .then((json) => {
            listdata = json.todo
            listdata.sort((x, y) => (x.checked === y.checked)? 0 : x.checked ? 1 : -1)
            setData(listdata)
        })
        .catch((error) => {
            setErrorMessage(errorMessage + '\n' +error)
            setModalVisible(true)
        })
    },[])
    return (
        <View style={styles.content}>
            <Error mVisible={modalVisible} closeErrorDialog={closeErrorDialog} errorMessage={errorMessage}></Error>
            <FlatList
            data={data}
            renderItem={({item}) =>(<ToDoRow item={item} changeCheck={changeCheck}/>) }
            keyExtractor={(item) => item.id}
            ></FlatList>
            
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        flex:1,
        backgroundColor: Theme.colors.backgroundColor.todo,
    },
})

export default ToDO;