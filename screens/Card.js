import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import SingleCard from './SingleCard';

const Card = (navigation) =>{
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
  navigation = useNavigation();

  return(
    <LinearGradient style = {styles.container} colors= {["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')} style = {styles.head_logo}></Image>
      <View style = {{flexDirection: "column", position: 'absolute', width: 390, height: 530, top: 230, alignItems:'center'}}>
        <FlatList
          data={dataSource}
          renderItem={({item}) =>      
            <SingleCard term = {item}/>
          } />
      </View>
      <TouchableOpacity onPress = {() => {navigation.navigate("Home")}}>
                <View style = {styles.backB}>
                  <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>BACK</Text>
                </View>
      </TouchableOpacity>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
  cardText: {
    color: "#FFF" ,
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    top: 100, fontSize: 14,
    fontWeight: 'bold'
  },
  circleButton: {
    height: 60,
    width: 60,
    backgroundColor: '#b8e3ff',
    borderRadius: 60,
    alignItems: "center",
    marginRight: 30,
    marginTop: 40,
    left: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head_logo:{
    justifyContent: 'center',
    position: 'absolute',
    flex:1,
    width: '100%',
    height: "50%",
    resizeMode: 'contain',
    bottom: '60%',
  },
  box:{
    borderRadius: 10,
    width: 300,
    height: 250,
    backgroundColor: '#a2d8f7',
    top: 0,
    right: 0,
  },
  backB:{
    borderRadius:10,
    width:210,
    height: 30,
    backgroundColor: "#b8e3ff",
    top: 370, 
  },
  });

  export default Card;