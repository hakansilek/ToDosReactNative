import React from 'react';
import { Modal,View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import {Theme} from '../theme';

const Error = (props) => {
    return (
        <View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.mVisible}
        onRequestClose={() => {
            props.closeErrorDialog()
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>{props.errorMessage}</Text>
            <TouchableHighlight
              style={{ ...styles.cancelButton }}
              onPress={() => {
                props.closeErrorDialog()
              }}
            >
              <Text style={styles.textStyle}>Tamam</Text>
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
        padding: 30,
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
      cancelButton:{
        color: "white",
        borderRadius: 5,
        marginTop:10,
        padding: 10,
        elevation: 2,
        backgroundColor: Theme.colors.backgroundColor.alertCancel,
      },
      textStyle: {
        fontWeight: "bold",
        textAlign: "center"
      },
})

export default Error;