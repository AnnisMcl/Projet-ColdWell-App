import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

  export default function Estimer(){
    const [Surface, setSurface] = useState("");
    const [nbrPiece, setNbrPiece] = useState("");
    const [Adresse, setAdresse] = useState("");

      return (
          
        <View style = {styles.container}>
          
          <View>
              <Text style = {styles.TitleText}>
                  Estimation
              </Text>
          </View>
          
          <View style = {styles.inputView}>
                <TextInput style = {styles.TextInput}
                    placeholder="Surface"
                    placeholderTextColor="#003f5c"
                    onChangeText={(Surface) => setSurface(Surface)}
                
                />
            </View>

            <View style = {styles.inputView}>

                <TextInput style = {styles.TextInput}
                    placeholder="Nombre de pièces"
                    placeholderTextColor="#003f5c"
                    onChangeText={(nbrPiece) => setNbrPiece(nbrPiece)}
                
                />
            </View>
            <View style = {styles.inputView}>

                <TextInput style = {styles.TextInput}
                    placeholder="Adresse"
                    placeholderTextColor="#003f5c"
                    onChangeText={(Adresse) => setAdresse(Adresse)}
                
                />

             
          </View>

          <View>
              <Text style = {styles.Text}>
                  Ajoutez des photos du bien 
              </Text>
          </View>
          
        </View> 
      )
  }

  const styles = StyleSheet.create({

    container: {
        flex : 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"


    },
    
    inputView: {
    backgroundColor: "#B6DDFA",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  Text: {
      fontSize: 30,
      

  },
  TitleText : {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white'
  }

  })