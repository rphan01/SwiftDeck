import React, { useState, useEffect } from 'react';
import { Button, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

import { addDoc, collection, doc, getDocs, query, setDoc } from 'firebase/firestore/lite';
import { db } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';

const Title = () =>{
  const navigation= useNavigation();
  const [name,setName] = useState('');
  // db.collection("users").collection("decks")({
  //   title:  name
  // });
  const auths = getAuth();
  const user = auths.currentUser;
  const uid = user.uid;
    
  const setDName = async() =>{
    setDoc(doc(db, "users",uid, "decks", name), {title:name, td: []})
  }

  const addTitle = async() =>{
    const val = doc(db, 'users',uid)
    const collectionVal = collection(val, 'decks')
    addDoc(collectionVal, {title:name} )
  }
    
  const q = query(collection(db, 'users'));

  // const each = async() =>{
  //   const querySnapshot =  await getDocs(q);
  //   querySnapshot.forEach((doc)=>{
  //     console.log(doc.id, " => ", doc.data());
  //   })
  // }

  return (
    <LinearGradient style = {styles.container} colors= {["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')} style = {styles.head_logo}></Image>
        <View style = {styles.box}>
          <TextInput onChangeText={(newText)=>{setName(newText);}}  
                     placeholder="Name of the Deck"
                     style = {styles.title}>          
          </TextInput>
            <TouchableOpacity onPress ={()=> {addTitle();navigation.navigate("Add", {names: JSON.stringify(name)});setDName();}} >
              <View style= {styles.createB}>
                  <Text style = {{color: "#FFF",fontFamily: "Gill Sans",fontSize: 25, fontWeight:'bold', top: 10}}>Create</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> {navigation.navigate("Home");}}>
              <View style= {styles.backB}>
                <Text style = {{color: "#FFF",fontFamily: "Gill Sans",fontSize: 15, fontWeight:'bold', top: 5}}>Back</Text>
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
    height: 150,
    backgroundColor: '#a2d8f7',
    bottom: 20,
    right: 0,
    borderWidth:1,
    borderColor:"white",
    alignItems: 'center'
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
  create:{
    borderRadius: 10,
    width: 350,
    height: 500,
    top: 200,
    backgroundColor: '#a2d8f7',
    position: "absolute",
  },
  title:{
    paddingHorizontal: 10,
    borderRadius: 10,
    width:280,
    height:35,
    backgroundColor: "#b8e3ff",
    top: 30,
    color: "#FFF",
    fontFamily: "Gill Sans",
    fontSize: 15,
    borderWidth:1,
    borderColor:"white",
    marginBottom:-25,
    },
  createB:{
    borderRadius:10,
    width:180,
    height: 50,
    backgroundColor: "#b8e3ff",
    top: 70,
    alignItems:'center'
    },
  backB:{
    borderRadius:10,
    width:210,
    height: 30,
    backgroundColor: "#b8e3ff",
    top:140,
    alignItems: 'center'
  },
});

export default Title;