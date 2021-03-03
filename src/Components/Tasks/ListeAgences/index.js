import React from 'react';
import {Text, View, Image, TextInput, Slider, TouchableOpacity, ScrollView,} from 'react-native';
import { StyleSheet } from 'react-native';

const ListeAgence = (props) => {
    return(
        <View>
            <View style = {styles.topText}>
      <Text style = {styles.textStyle}>Liste des Agences</Text>
    </View>  

    <ScrollView>
      <View style = {{alignItems : "center"}}>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.rectangle}>
          <Image style = {styles.imageMaison} source = {require("../../../../assets/1.jpg")}/>
          <Text style = {styles.textAgence}>Agence n°1</Text>
          <Image style = {styles.imageCoeur} source = {require("../../../../assets/gray-heart-hi.png")}/>
        </TouchableOpacity>

        
      </View>
</ScrollView>
<View>
  <Text style = {{fontSize : 17}}>BONJOUR IL FAUT METTRE LE BOUTON RETOUR</Text>
</View>
        </View>
    );
    };

    const styles = StyleSheet.create({
        topText:{
            alignItems : 'center',
            justifyContent : 'center',
            marginTop: 50,
          },
        
          textStyle:{
            color:'#fff',
            fontSize: 40,
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
        
          imageMaison:{
            width : 75,
            height : 75,
            marginLeft : 15,
          },
        
          imageCoeur:{
            marginLeft : 40,
            width : 40,
            height : 35,
          },
        
          textAgence:{
            fontSize: 20,
            marginLeft: 40,
            marginTop:-35,
          },
    });

export default ListeAgence;