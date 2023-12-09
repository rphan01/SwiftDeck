import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
// import { auth } from '../firebase';


const Profile = () =>{
   

    const navigation = useNavigation();

    return(
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/logo.png')}
                    style = {styles.head_logo}></Image>

            {/* <View style={{flexDirection:'row'}}>
              <TouchableOpacity>
                <View style = {styles.gameB}></View>
                <Image source = {require('../assets/gameIcon.png')}
                   style = {{position: "absolute", bottom: 200, right: -10, height: 200, width: 200}} ></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {styles.learnB}></View>
                <Image source = {require('../assets/learnIcon.png')}
                   style = {{position: "absolute", bottom: 200, left: -10, height: 200, width: 200}} ></Image>
              </TouchableOpacity>
            </View> */}
            
            <View style = {{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View style = {styles.learnB}></View>
                <Image source = {require('../assets/learnIcon.png')}
                   style = {{position: "absolute", bottom: 164, left: -27, height: 145, width: 145}} ></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {styles.gameB}></View>
                <Image source = {require('../assets/gameIcon.png')}
                   style = {{position: "absolute", bottom: 164, right: -18, height: 145, width: 145}} ></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {styles.cardB}></View>
                <Image source = {require('../assets/cardIcon.png')}
                   style = {{position: "absolute", bottom: 125, left: -20, height: 165, width: 165}} ></Image>
              </TouchableOpacity>
            </View>

            <Text 
              style = {{left: 20, color: '#FFF', fontSize: 23, fontWeight: 'bold', position: "absolute",bottom: 465, fontFamily: "Gill Sans"}}
            >SETS</Text>

            <View style = {{flexDirection: "column"}}>
             <TouchableOpacity>
                <View style = {styles.set}></View>
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

    learnB:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 110,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom: 150,
      right: 10,
    },

    gameB:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 110,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom: 150,
      right: 0,
    },
    
    cardB:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 110,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom: 150,
      left: 10,
    },

    set:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 350,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom:-30,
      right:-175,
      position: "absolute",
    },

  });

  export default Profile;
