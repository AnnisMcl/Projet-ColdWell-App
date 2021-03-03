import React from 'react';
import {Text, View, Button ,Image} from 'react-native';
import { StyleSheet } from 'react-native';


const AgendaPageItems = (props) => {
    return(
    <View>

        <View style ={styles.topText}>
            <Text style = {styles.title}>Disponibilités</Text>
        </View>

        <View style ={styles.ViewImage1}>
            <Image style = {styles.Images} source = {require ('../../../../assets/calendar.png')}/>
            
        </View>

        <View style = {styles.midButtons}>
                    
                    <Button
                        color = '#000'
                        title = "Choisir une date"
                        >
                    </Button>
        </View>

        <View style ={styles.BottomText}>
            <Text style = {styles.BottomTitle}>Contact</Text>
        </View>

        <View style ={styles.BottomText}>
            <Text style = {styles.BottomTitle2}>Contactez nous par mail à l'adresse : .......@.....fr</Text>
            <Text style = {styles.BottomTitle2}>Ou alors appelez nous au 06............81</Text>
        </View>

      
            

            
    </View>  
    

    );
};

const styles= StyleSheet.create({
    topText:{
        alignItems : 'center',
        marginTop : '30%',
      },
    
      title:{
        fontSize: 40,
        color : '#fff',
      },
      ViewImage1:{
        marginTop : '50%',
        justifyContent : 'space-around',
        flexDirection : 'row',


    },
      Images:{
        width :300,
        height:300,
        marginTop:'-50%'


    },

    midButtons:{
      flexDirection : 'row',
      justifyContent : 'center',
      marginTop : '0%',
    
    },

    BottomText:{
      alignItems : 'center',
      marginTop : '10%',
    },

    BottomTitle:{
      fontSize: 30,
      color : '#fff',
      alignItems : 'center',
    },
    BottomTitle2:{
      fontSize: 15,
      color : '#fff',
      alignItems : 'center',


    }




});

export default AgendaPageItems;