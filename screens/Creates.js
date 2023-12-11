import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { db } from '../FirebaseConfig';
import { collection, addDoc, getDocs, doc, query, where, getDoc} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

function Creates ({ navigation, route }) {
    const {name} = route.params
    const {dataList} = route.params
    console.log(dataList)
    

  
    const [data, setData] = useState([])

    const auths = getAuth();
    const user = auths.currentUser;
    const uid = user.uid;
    

    

    // useEffect(() =>{
    //   const loadData = async() => {
    //     // // const docs = doc(db, "users",uid, "decks", names);
    //     // const docs = collection(db, "decks")
    //     // const q = query(docs, where('td', '!=', false));
    //     // const querySnapshot = await (getDocs(q))
    //     // querySnapshot.forEach((doc) => {
    //     //   console.log(doc.get("td"))
    //     // })
    //     const docs = doc(db, "users", uid, "decks", names)
    //     const docSnap = await getDoc(docs);
        
    //     const array = docSnap.data().td
        
    //     data.push(array)
    //   }
    //   loadData();
    //   console.log(data)
    // }, [])
    
  

    return (
        <LinearGradient style={styles.container} colors ={["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/swiftDeck.png')}
                    style = {styles.head_logo}></Image>
             <View style = {{flexDirection: "column", position: 'absolute', width: 390, height: 530, top: 230}}>
            <FlatList
            data={data}
            extraData={data}
            renderItem={({item}) => 
                
                <View style={styles.border}>
                <Text style={styles.itemName}>{item.word}</Text>
                <Text style={styles.itemDesc}>{item.definition}</Text>
                </View>
            } />
            </View>
             
             <TouchableOpacity onPress ={()=> {navigation.navigate("Add", {names:JSON.stringify(name)});}}>
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
        position: 'absolute',
        flex:1,
        width: 400,
        height: 400,
        left: -5,
        resizeMode: 'contain',
        bottom: 515,
    },
    itemName: {
      padding: 10,
      paddingTop:20,
      fontSize: 20,
      fontWeight:'bold',
      height: 44,
      fontFamily: "Gill Sans",
      color: "#FFF",
      width: 390,
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