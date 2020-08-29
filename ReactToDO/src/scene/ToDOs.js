import React, { useState, useEffect } from 'react';

import { View, Image, FlatList, StyleSheet, Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import {Theme} from '../theme'

import Card from '../components/Card'
import Searchbar from '../components/Searchbar';
import ToDOsModal from '../components/ToDOsModal'
import Error from '../components/Error';


const ToDOs = ({ navigation }) => {
    const [data, setData]  = useState(null)
    const [modalVisible, setModalVisible]  = useState(false)
    const [edit, setEdit] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [errorMessage, setErrorMessage]  = useState('HATA')
    const [errorModalVisible, setErrorModalVisible]  = useState(false)

    React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
          <TouchableHighlight
              onPress={() => {
                setEdit(false)
                setModalVisible(true)
              }}
            >
             <Image 
             style={{width:25, height:25, marginEnd:15}}
             source={require('../images/add.png')}></Image>
            </TouchableHighlight>
        ),
        headerLeft: () => (
            <Button
            onPress={() => setEdit(edit => !edit)}
            title={!edit ? "Düzenle" : "Bitti"}
            color="#000000"
          />
        ),
        headerStyle: {
            backgroundColor: Theme.colors.backgroundColor.category,
          },
      });
    }, [navigation, edit]);

    useEffect(()=>{
        fetch('https://hstodos.free.beeceptor.com/todosasd/all')
        .then((response) => response.json())
        .then((json) => {
            listdata = json.todos
            setData(listdata)
        }).catch((error) => {
            setErrorMessage(errorMessage + '\n' +error)
            setErrorModalVisible(true)
        })
    },[]);

    const filterData = (e) =>{
        setData(listdata.filter(item => item.title.includes(e)))
    }

    const removeCategory = (itemID) => {
        listdata = listdata.filter(item => item.id!=itemID)
        setData(listdata)
    }

    const changeModalVisibility = (title)=>{
        setModalVisible(!modalVisible)
        if(title!=null){
            createCategory(title)
        }
    }

    const closeErrorDialog = () => {
        setErrorModalVisible(false)
    }

    const createCategory = (title) => {
        listdata.push({title: title, count: 1, id:10})
        setData(listdata)
    }

    const refreshList = () => {
        setRefreshing(true)
        fetch('https://hstodos.free.beeceptor.com/todos/all')
        .then((response) => response.json())
        .then((json) => {
            listdata = json.todos
            setData(listdata)
        })
        .finally(()=>setRefreshing(false))
    }    

    return(
        <View style={styles.content}>
            <Error mVisible={errorModalVisible} closeErrorDialog={closeErrorDialog} errorMessage={errorMessage}></Error>
            <ToDOsModal mVisible={modalVisible} changeMV={changeModalVisibility}></ToDOsModal>
            <Searchbar filterFunction={filterData}></Searchbar>
            {data ? 
            <FlatList
            numColumns={2}
            horizontal={false}
            data={data}
            onRefresh={()=>refreshList()}
            refreshing={refreshing}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (<Card navigation={navigation} editMode={edit} item={item} removeItem={removeCategory}/>)}
            ></FlatList>
            :
            <ActivityIndicator/>
        }
            
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex:1,
        backgroundColor: Theme.colors.backgroundColor.todos,
    },
})

export default ToDOs;
