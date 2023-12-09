import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput,FlatList, ScrollView} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
// import { auth } from '../firebase';


function Home ({route, navigation }) {
//   const dataSource =[]

//   dataSource.push(route.params)
//   console.log(dataSource)
// //   let newArr = dataSource.map(function (item) => {
// //     return { key: item.title, value: [item.term, item.def] };
// // })
//   let newarr =dataSource.map((item) =>{
//     for(let i = 0; i < item.length; i++){
//     return { key: item[0].title, value: [item[i].term, item[i].def] };
//     }
//   })
//   console.log(newarr)

  

    return(
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/swiftDeck.png')}
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

              <TouchableOpacity onPress={() => navigation.navigate("Learn")}>
                <View style = {styles.learnB}></View>
                <Image source = {require('../assets/learnIcon.png')}
                   style = {{position: "absolute", bottom: 184, left: -27, height: 145, width: 145}} ></Image>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Game")}>
                <View style = {styles.gameB}></View>
                <Image source = {require('../assets/gameIcon.png')}
                   style = {{position: "absolute", bottom: 184, right: -18, height: 145, width: 145}} ></Image>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Card")}>
                <View style = {styles.cardB}></View>
                <Image source = {require('../assets/cardIcon.png')}
                   style = {{position: "absolute", bottom: 146, left: -20, height: 165, width: 165}} ></Image>
              </TouchableOpacity>
            </View>

            

          
          <Image style = {{position: 'absolute', width: 570, height: 400, top: 300, left: -94}}source = {require('../assets/divider.png')}></Image>
          {/* <Image style = {{position: 'absolute', width: 200, height: 200, left: 100,top: 250}}source = {require('../assets/sets.png')}></Image> */}
            

            <View style = {{flexDirection: "column", position:'absolute', top: 390 , width:390, height: 350}}>
                <FlatList data ={route.params} 
                renderItem = {({item}) => <TouchableOpacity style = {styles.sets}>
                   <Text style = {styles.item}>{item.title}</Text>
                   
                   </TouchableOpacity>
                }
              />
            </View>

            {/* <View style = {{position:'absolute', top: 390, backgroundColor: '#FFF', width:390, height: 350}}>
            <FlatList
              data={dataSource}
              renderItem={({item}) =>   
              <View style = {styles.border}>  
                <TouchableOpacity onPress = {() => console.log("ur mother")}>  
                <Text >{item.firstName} {item.lastName}</Text>      
                <Text>{item.description}</Text> 
                </TouchableOpacity>  
              </View>
              }
            />
            </View>   */}

            <View style ={styles.nav}>

              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image source = {require('../assets/homeIcon.png')}
                   style = {{position: "absolute",left: 45, top: 10, height: 50, width: 50}} ></Image>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Title")}>
              <Image source = {require('../assets/createIcon.png')}
                   style = {{position: "absolute", left: 175, top: 10, height: 50, width: 50}} ></Image>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source = {require('../assets/profile.png')}
                   style = {{position: "absolute", left: 300, top: 10, height: 50, width: 50}} ></Image>
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
      flex:1,
      width: 400,
      height: 400,
      left: -5,
      resizeMode: 'contain',
      bottom: 515,
    },

    learnB:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 110,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom: 170,
      right: 10,
      borderWidth:1,
      borderColor:"white",
    },

    gameB:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 110,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom: 170,
      right: 0,
      borderWidth:1,
      borderColor:"white",
    },
    
    cardB:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 110,
      height: 110,
      backgroundColor: '#a2d8f7',
      bottom: 170,
      left: 10,
      borderWidth:1,
      borderColor:"white",
    },


    sets:{
      borderRadius: 10,
      backgroundColor: '#a2d8f7',
      width: 350,
      height: 150,
      left:20,
      marginBottom: 10,
      flexDirection: 'row',
      borderWidth:1,
      borderColor:"white",
      
    },

    item:{
      fontSize: 25,
      fontFamily: "Gill Sans",
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#FFF",
      flex:1,
      top: 50,
      
    },

    nav:{
      flexDirection: 'row',
      backgroundColor: '#1379B2',
      borderRadius: 10,
      // borderWidth: 1,
      width: 400,
      height: 200,
      top: 740,
      position: "absolute",
    },

  });

  export default Home;

