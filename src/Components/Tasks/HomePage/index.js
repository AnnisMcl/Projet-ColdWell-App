import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import { StyleSheet } from 'react-native';

const HomePageItems = (props) => {
    return(
    <View>

        <View style ={styles.topText}>
            <Text style = {styles.title}>Vendre son bien</Text>
        </View>

        <View style ={styles.MiddleText}>
            <Text style = {styles.title2}>Quel type de bien ?</Text>
        </View>

        <View style ={styles.ViewImage1}>
            <Image style = {styles.Images} source = {require ('../../../../assets/house_38533.png')}/>
            <Image style = {styles.Images} source = {require ('../../../../assets/building-3.png')}/>
        </View>

      

            

                <View style = {styles.midButtons}>
                    
                    <Button
                        color = '#000'
                        title = "Maison"
                        >
                    </Button>

                    <Button
                        color = '#000'
                        title = "Appartement">
                    </Button>
                </View>

                <View style ={styles.ViewImage2}>
            <Image style = {styles.Images} source = {require ('../../../../assets/parking.png')}/>
            <Image style = {styles.Images} source = {require ('../../../../assets/shop.png')}/>
                 </View>



                <View style = {styles.midButtons2}>
                <Button
                    color = '#000'
                    title = "Parking">
                </Button>

                <Button
                    color = '#000'
                    title = "Bureau/Commerce">
                </Button>
                </View> 
    </View>

    );
};

const styles = StyleSheet.create({
    topText:{
        alignItems : 'flex-start',
        marginTop : '20%',
      },
    
      title:{
        fontSize: 40,
        color : '#fff',
      },
    MiddleText:{
        alignItems : 'flex-start',
        marginTop : '10%',},
        
        title2:{
            fontSize: 20,
            color : '#fff',
        


    },
    ViewImage1:{
        marginTop : '50%',
        justifyContent : 'space-around',
        flexDirection : 'row',


    },

    ViewImage2:{
        marginTop : '40%',
        justifyContent : 'space-around',
        flexDirection : 'row',
    },


    
      midButtons:{
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : '0%',
        marginLeft:'5%',
        opacity : 100,
        

      
      },

    midButtons2:{
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : '0%',
        marginLeft:'7%',
        opacity : 100,
        


    },
      
    Images:{
        width :100,
        height:100,
        marginTop:'-20%'


    }
});

export default HomePageItems;