import React from 'react';
import {Text, View, Image, TextInput, Slider, TouchableOpacity, ScrollView,} from 'react-native';
import { StyleSheet } from 'react-native';


const GeneralPage = (props) => {
    return(
    <View>
        <View style ={styles.Deconnexion}>

        <TouchableOpacity style = {styles.boutons}>
          <Text style = {{color:"#000"}}>Deconnexion</Text>
        </TouchableOpacity>

      </View>

      <View>
        <TextInput 
          style = {styles.inputStyle}
          placeholder = "Rechercher"
          placeholderTextColor = "#fff"        
        />
      </View>

      <View style = {styles.tags}>

        <TouchableOpacity style = {styles.boutons}>
          <Text>+ Ville</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.boutons}>
          <Text>+ Surface</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.boutons}>
          <Text>+ Type</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.prixSlider}>
        <Text style = {styles.textPrix}>Prix  0€</Text>
        <Slider 
        style = {styles.sliderStyle}
        minimumTrackTintColor = "#fff"
        maximumTrackTintColor = "#fff">

        </Slider>
        <Text style = {styles.textPrix}>10 000 000€</Text>
      </View>

<ScrollView>
      <View style = {{alignItems : "center"}}>
        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
        <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>
      </View>
</ScrollView>
</View>
    );
};

const styles = StyleSheet.create({
    Deconnexion:{
        flexDirection : "row-reverse",
        marginTop : '12%',
        marginLeft : 20,
      },
    
      boutons:{
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#BBECFD",
        borderRadius : 20,
        width : 100,
        height : 25,
      },
    
      inputStyle:{
        borderWidth : 1,
        borderColor: '#fff',
        padding : 4,
        margin: 20,
        borderRadius : 15,
        color: "#fff",
      },
    
      tags:{
        flexDirection: "row",
        justifyContent: "space-around",
        margin : 0,
      },
    
      prixSlider:{
        flexDirection: "row",
        marginTop : 15,
        marginLeft : 30,
      },
    
      textPrix:{
        color : "#fff"
      },
    
      sliderStyle:{
        marginLeft : -8,
        width : 150,
      },
    
      maisonListe:{
        flexDirection : "column",
      },
    
      imageMaison:{
        width : 75,
        height : 75,
        marginLeft : 15,
      },
    
      imageCoeur:{
        marginLeft : 200,
        width : 40,
        height : 35,
      },
    
      rectangle:{
        flexDirection : "row",
        marginTop: 15,
        borderWidth : 3,
        borderColor :"#BBECFD",
        backgroundColor : "#BBECFD",
        height : 110,
        width : 350,
        alignItems : "center",
        borderRadius : 25,
      },
});

export default GeneralPage;