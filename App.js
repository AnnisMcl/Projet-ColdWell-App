import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Slider, TouchableOpacity, ScrollView, Touchable
} from "react-native";

import Login from "./src/Components/Tasks/Login";
import Estimer from "./src/Components/Tasks/Upload";
import AgendaPageItems from "./src/Components/Tasks/AgendaPageItems";
import FirstPage from "./src/Components/Tasks/FirstPage";
import GeneralPage from "./src/Components/Tasks/GeneralPage";
import HomePageItems from "./src/Components/Tasks/HomePage";
import ListeAgence from "./src/Components/Tasks/ListeAgences";
import Estimation from "./src/Components/Tasks/EstimationPage";




export default function App() {
  return (
    
    <View style = {styles.main}>

        <Estimer/>

    </View>
);


}

const styles = StyleSheet.create({


main:{
flex: 1,
backgroundColor: "#2AA5FF",
}

})