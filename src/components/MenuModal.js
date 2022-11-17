import React, { useState, useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity} from "react-native";
import { ModalMenuContext } from "../contextAPI/ModalMenuContext";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Menu from "./Menu";

const MenuModal = () => {

  const[showMenuModal, setMenuModal] = useContext(ModalMenuContext);
  const profilePict = require('../assets/images/pp.jpg');

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={showMenuModal} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.separator}>
            <View style={styles.centeredView} >
              <TouchableOpacity style={styles.closeModal} onPress={ ()=> setMenuModal(false)} >
                <Icon name="angle-down" size={30} color="#df4b34" />
              </TouchableOpacity>
              <Image style={styles.imageStyle} source={profilePict} />
              <Text style={styles.profileName}>John Die</Text>
            </View>
          </View>
          <Menu />
          </View>
        </View>
      </Modal>
    </View>
  );
};

<View></View>

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",

  },
  modalView: {
    width: '100%',
    height: '70%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    marginBottom: 5
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  separator: {
    borderBottomColor: '#1f1f1f',
    borderBottomWidth: 0.2,
    width: '90%',
    height: 110,
    paddingVertical: 20,
    position: 'relative'
  },
  closeModal: {
    position: 'absolute',
    top: -10,
    right: 5
  }

});

export default MenuModal;