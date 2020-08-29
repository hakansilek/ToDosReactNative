import React, { useState } from 'react';

import { Modal,View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

import { Theme } from '../theme';

const ToDOsModal = (props) => {
    const [categoryTitle, onChangeCategoryTitle] = useState();

    return (
    <View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.mVisible}
        onRequestClose={() => {
            onChangeCategoryTitle()
            props.changeMV()
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
            style={styles.inputText}
            onChangeText={text => onChangeCategoryTitle(text)}
            placeholder="Başlık"
            value={categoryTitle}
            maxLength={40}
            autoFocus={true}
            clearButtonMode="while-editing"
            />
            <TouchableHighlight
              style={{ ...styles.addButton }}
              onPress={() => {
                  if(categoryTitle != null){
                    props.changeMV(categoryTitle)
                    onChangeCategoryTitle()
                  }
              }}
            >
              <Text style={styles.textStyle}>Ekle</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.cancelButton }}
              onPress={() => {
                onChangeCategoryTitle()
                props.changeMV()
              }}
            >
              <Text style={styles.textStyle}>Vazgeç</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "stretch",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      addButton: {
        borderRadius: 5,
        marginTop:10,
        padding: 10,
        elevation: 2,
        backgroundColor: Theme.colors.backgroundColor.alertOk,
      },
      cancelButton:{
        borderRadius: 5,
        marginTop:10,
        padding: 10,
        elevation: 2,
        backgroundColor: Theme.colors.backgroundColor.alertCancel,
      },
      inputText:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 0.5,
        paddingStart: 5,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
})

export default ToDOsModal