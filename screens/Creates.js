import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { db } from '../FirebaseConfig';
import { collection, addDoc, getDocs, doc, query, where, getDoc} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

function Creates ({ navigation, route }) {
  const dataSource = [ 
    {key: '001', word: 'Creator of Python', definition:'Guido van Rossum'}, 
    {key: '002', word: 'program', definition:'a sequence of instructions that can be interpreted and executed by a computer'}, 
    {key: '003', word: 'dictionary ', definition:'an object that lets you use a key to look up a value'}, 
    {key: '004', word: 'inheritance', definition: 'defines an is-a relationship'}, 
    {key: '005', word: 'variable', definition: "a name used to refer to a value stored in the computer's memory "}, 
    {key: '006', word: 'recursion', definition: 'a technique in which a function calls itself in order to solve a problem'}, 
    {key: '007', word: 'infinite recursion', definition: 'a situation in which the base case is never reached'}, 
    {key: '008', word: 'argument', definition: 'a value passed into a function when it is invoked'}, 
    {key: '009', word: 'set', definition: 'data type that represents an unordered collection of values that does not allow duplicate elements'}
  ]; 

  const[list, setList] = useState(dataSource)
  const {name} = route.params
  const auths = getAuth();
  const user = auths.currentUser;
  const uid = user.uid;
  function handleRemove(id){
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  useEffect(() =>{
    const loadData = async() => {
      // // const docs = doc(db, "users",uid, "decks", names);
      // const docs = collection(db, "decks")
      // const q = query(docs, where('td', '!=', false));
      // const querySnapshot = await (getDocs(q))
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.get("td"))
      // })
      const docs = doc(db, "users", uid, "decks", JSON.parse(name))
      const docSnap = await getDoc(docs);
      const array = docSnap.data().td
      dataSource.push(array)
    }
    loadData();
  }, [])
  return (
    <LinearGradient style={styles.container} colors ={["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')}
              style = {styles.head_logo}></Image>
        <View style = {{flexDirection: "column", position: 'absolute', width: 390, height: 530, top: 230}}>
      <FlatList
      data={dataSource}
      renderItem={({item}) => 
          <View style={styles.border}>
          
          <Text style={styles.itemName} >{item.word}</Text>
          <Text style={styles.itemDesc}>{item.definition}</Text>
          </View>
      } />
      </View>
      <TouchableOpacity onPress ={()=> {navigation.navigate("Add", {names:name});}}>
          <View style = {styles.createB}>
              <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>
                  Create
              </Text>
          </View>
      </TouchableOpacity>
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
  },
  head_logo:{
    justifyContent: 'center',
    position: 'absolute',
    flex:1,
    width: '100%',
    height: "70%",
    resizeMode: 'contain',
    bottom: '60%',
  },
  itemName: {
    padding: 10,
    paddingTop:20,
    fontSize: 18,
    fontWeight:'bold',
    height: 60,
    fontFamily: "Gill Sans",
    color: "#FFF",
    width: 393,
  },
  itemDesc: {
    padding: 10,
    paddingTop: 0,
    fontSize: 15,
    height: 44,
    fontFamily: "Gill Sans",
    color: "#FFF",
    height:80,
  },
  border: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: '#a2d8f7',
    marginBottom: 10,
    borderRadius: 10,
  },
  createB:{
      borderRadius:10,
      width:280,
      height: 30,
      backgroundColor: "#b8e3ff",
      top: 720,
      left:50,
    },
});
  
export default Creates;