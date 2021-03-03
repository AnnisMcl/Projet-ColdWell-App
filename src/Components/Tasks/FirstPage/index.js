import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import { StyleSheet } from 'react-native';

const FirstPage = (props) => {
    return(
    <View>

        <View style ={styles.topText}>
        <Text style = {styles.title}>Êtes-vous</Text>
      </View>

      <View style ={styles.midElements}>


        <TouchableOpacity style = {styles.carre}>
          <Image source = {require('../../../../assets/user.png')} style = {styles.userStyle}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.carre}>
          <Image source = {require('../../../../assets/iconAgent.png')} style = {styles.agentStyle}/>
        </TouchableOpacity>

      
      </View>

      <View style = {styles.midText}>
        <Text style = {styles.textStyle}>Un particulier</Text>
        <Text style = {styles.textStyle}>Un agent</Text>
      </View>

    </View>
    );
};

const styles = StyleSheet.create({
    topText:{
      alignItems : 'center',
      marginTop : '30%',
    },
  
    title:{
      fontSize: 40,
      color : '#fff',
    },
    
    midElements:{
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginTop : 125,
    },
    
    carre:{
      alignItems : "center",
      justifyContent : "center",
      backgroundColor : "#BBECFD",
      borderRadius : 20,
      width : 150,
      height : 150,
    },
  
    userStyle:{
      width: 120,
      height : 120,
    },
  
    agentStyle:{
      width: 130,
      height : 130,
    },
  
    midText:{
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginLeft : -15,
    },
  
    textStyle:{
      color: '#fff',
      fontSize: 20,
    },
  });

export default FirstPage;