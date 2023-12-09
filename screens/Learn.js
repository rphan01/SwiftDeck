import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
// import { auth } from '../firebase';


const Learn = () =>{
    
   

    const navigation = useNavigation();

    return(
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>

            

            <Image source = {require('../assets/logo.png')}
                    style = {styles.head_logo}></Image>

            <View style={{flexDirection:'row'}}>
                
             
             <View style = {styles.question}></View>
            
               
              <TouchableOpacity>
                <View style = {styles.c1}></View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style = {styles.c2}></View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style = {styles.c3}></View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style = {styles.c4}></View>
              </TouchableOpacity>  

            </View>
            
            
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },


    head_logo:{
        position: 'absolute',
        width: 300,
        height: 300,
        top: 10,
      },

    question:{
        borderRadius: 10,
        borderWidth: 1,
        width: 350,
        height: 200,
        backgroundColor: '#a2d8f7',
        bottom: 80,
        right: 0,
    },

    c1:{
        borderRadius: 10,
        width: 350,
        height: 60,
        backgroundColor: '#a2d8f7',
        top: 160,
        right: 0,
        position: 'absolute',
    },

    c2:{
        borderRadius: 10,
        width: 350,
        height: 60,
        backgroundColor: '#a2d8f7',
        top: 230,
        right: 0,
        position: 'absolute',
    },

    c3:{
        borderRadius: 10,
        width: 350,
        height: 60,
        backgroundColor: '#a2d8f7',
        top: 300,
        right: 0,
        position: 'absolute',
    },

    c4:{
        borderRadius: 10,
        width: 350,
        height: 60,
        backgroundColor: '#a2d8f7',
        top: 370,
        right: 0,
        position: 'absolute',
    },  

  });

  export default Learn;
