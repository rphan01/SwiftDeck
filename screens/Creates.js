import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

function Creates ({route, navigation }) {
//   console.log(route.params);
    //dataSource contains the data we want rendered as a list
    //the dataSource should contain a unique key for each item in the array
     
  
   
    

  //   // console.log(route.params.listData)
  //  // setListData(listData.concat(route.params));
  //  const[listData, setListData] = useState(dataSource);
  //  const term = route.params.term;
  //  const def = route.params.def;
  //  const count = route.params.count;
  //  dataSource.push({word: term, definition: def});
 
    // useEffect(()=>{
    //   if(route.params){
    //     setListData(listData.concat(route.params))
        
    //     // setListData(listData.concat({word:route.params.word, definition: route.params.definition}));
    //     // console.log(listData)
    //   }
    // }, [route.params]);
    
    
    // console.log(listData)
    // function please(){
    //     dataSource.push(route.params);
    //     console.log(dataSource[0]);
    // }


    return (
        <LinearGradient style={styles.container} colors ={["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/swiftDeck.png')}
                    style = {styles.head_logo}></Image>
             <View style = {{flexDirection: "column", position: 'absolute', width: 390, height: 530, top: 230}}>
            <FlatList
            data={route.params}
            extraData={route.params}
            renderItem={({item}) => 
                
                <View style={styles.border}>
                <Text style={styles.itemName}>{item.term}</Text>
                <Text style={styles.itemDesc}>{item.def}</Text>
                </View>
            } />
            </View>
             
             <TouchableOpacity onPress ={()=> {navigation.navigate("Add");}}>
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