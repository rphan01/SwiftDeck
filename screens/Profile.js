import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { db } from '../FirebaseConfig';
import { addDoc, arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

function Profile() {
  const navigation= useNavigation();
  const auths = getAuth();
  const user = auths.currentUser;
  const email = user.email;

  const signOut = async() => {
    signOut(auths).then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
      console.log(error);
    });    
  }
  
  return (
    <LinearGradient style = {styles.container} colors= {["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')} style = {styles.head_logo}></Image>
      <View style = {styles.box}>
        <Text style = {styles.welcome}>HELLO!</Text>
        <Text style = {styles.email}>Login: {email}</Text>
        <TouchableOpacity onPress = {() => signOut()}>
          <Text style = {styles.outB}>LOG OUT</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress = {() => {navigation.navigate('Home')}}>
          <View style = {styles.backB}>
            <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>BACK</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    borderRadius: 10,
    width: 300,
    height: 450,
    backgroundColor: '#a2d8f7',
    top: 50,
    right: 0,
    borderWidth:1,
    borderColor:"white",
    alignItems: 'center',
  },
  head_logo:{
    position: 'absolute',
    flex:1,
    width: 400,
    height: 400,
    left: -5,
    resizeMode: 'contain',
    bottom: 515,
  },
  welcome:{
    top: 50,
    fontSize: 30,
    color: "#FFF",
    fontWeight:'bold',
    fontFamily: "Gill Sans",
  },
  email:{
    top: 100,
    fontSize: 20,
    color: "#FFF",
    fontWeight:'bold',
    fontFamily: "Gill Sans",
  },
  outB:{
    top: 120,
    fontSize: 20,
    color: "#FF0000",
    fontWeight:'bold',
    fontFamily: "Gill Sans",
  },
  backB:{
    borderRadius:10,
    width:210,
    height: 30,
    backgroundColor: "#b8e3ff",
    top: 200, 
  },
});

export default Profile;