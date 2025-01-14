import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
  // executar a ação de logout do usuário assim que o componente é montado
  componentDidMount(){
    firebase.auth().signOut();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
