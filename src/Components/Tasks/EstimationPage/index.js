import React from 'react';

import {Text, View, Button, TextInput,TouchableOpacity} from 'react-native';

import { StyleSheet } from 'react-native';




const Estimation = (props) => {

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    return(
    <View>

    <View style ={styles.topText}>
        <Text style = {styles.title}>Estimation</Text>
        <Text style = {styles.title}>Rapide</Text>
    </View>

      <View style ={styles.midElements}>

            <View style = {styles.centerInputs}>

                <TextInput style = {styles.input}
                    
                    placeholder = "Surface m2"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    />

                <TextInput style = {styles.input}
                    
                    placeholder = "Nombre de pièces"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    />

                <TextInput style = {styles.input}
                    
                    placeholder = "Adresse"
                    placeholderTextColor = "black"
                    autoCapitalize = "none"
                    />

            </View>

            <View style ={styles.ButtonEsti}>

                <Button
                    color = '#2AFFFF'
                    title="Estimez !">
                </Button>
            </View>

            <View style ={styles.ButtonEstiAg}>

                <Button
                    color="#2AFFFF"
                    title="Estimation précise en agence !">
                </Button>
            </View>

        </View>
    </View>

    );
};

const styles = StyleSheet.create({
    topText:{
        alignItems : 'center',
        marginTop : '15%',
      },
    
      title:{
        fontSize: 40,
        color : '#fff',
      },
      
      midElements:{
        alignItems: "center"
      },
    
      midButtons:{
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : '70%',
        alignItems: "center"
      },

      centerInputs:{
        alignItems: 'center',
        justifyContent : 'space-around',
        marginTop : '8%'
      },

      ButtonEsti:{
        alignItems: 'center',
        marginTop : '5%',
        margin: 15,
        height: 50,
        width: 209,
        borderRadius: 10,
        backgroundColor: "#2AFFFF"
      },
      ButtonEstiAg:{
        alignItems: 'center',
        marginTop : '3%',
        height: 41,
        width: 305,
        borderRadius: 10,
        backgroundColor: "#2AFFFF"
      },

      input: {
        margin: 15,
        height: 51,
        width: 265,
        borderRadius: 10,
        textAlign:"center",
        backgroundColor : "#B6DDFA",
     },




      
        
        
   },

);

export default Estimation;