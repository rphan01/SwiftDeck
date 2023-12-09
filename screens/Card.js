import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import SingleCard from './SingleCard';

// for flatlist: create separate card.js for rendering a single card, then pass each word/def through card component
const Card = (navigation) =>{
  const dataSource = [
    {key: '002', word: '0', definition: 'A'},
    {key: '003', word: '1', definition: 'B'},
    {key: '005', word: '2', definition: 'C'},
    {key: '006', word: '3', definition: 'D'},
    {key: '007', word: '4', definition: 'E'},
    {key: '008', word: '5', definition: 'F'},
    {key: '009', word: '6', definition: 'G'},
    {key: '0010', word: '7', definition: 'H'},
  ]; 
  navigation = useNavigation();

  // var[index, setIndex] = useState(0);
  // var[cardFront, setCardFront] = useState(dataSource[0].word);
  // var[isDef, setIsDef] = useState(true);

  // function previousCard() {
  //   if (index>0) {
  //     setIndex(index-1); 
  //   }
  //   else {
  //     setIndex(dataSource.length-1);
  //   }
  //   setCardFront(dataSource[index].word);
  //   setIsDef(true);
  // }

  // function nextCard() {
  //   if(index<dataSource.length-1){
  //     setIndex(index+1);
  //   }
  //   else {
  //     setIndex(0);
  //   }
  //   setCardFront(dataSource[index].word);
  //   setIsDef(true);
  //   console.log(index);
  // }

  // function flipCard() {
  //   if(isDef)
  //     setCardFront(dataSource[index].definition);
  //   else
  //     setCardFront(dataSource[index].word);
  //   setIsDef(!isDef);
  //   console.log(index);
  // }

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
      {/* <TouchableOpacity onPress={()=>flipCard()}>
        <View style = {styles.box}>
          <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 100, fontSize: 14, fontWeight: 'bold'}}>
              {cardFront}
          </Text>
        </View>
      </TouchableOpacity>  */}
      {/* <View style = {{flexDirection: 'row'}}>  
        <TouchableOpacity onPress={()=>previousCard()} style = {styles.circleButton}>
          <Image source ={require('../assets/left_arrow.png')} style = {{height: 40, width: 40, top:10, right:2}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>nextCard()} style = {styles.circleButton}>
        <Image source ={require('../assets/right_arrow.png')} style = {{height: 40, width: 40, top:10, left: 2}}/>
        </TouchableOpacity>
      </View> */}
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
    position: 'absolute',
    flex:1,
    width: 400,
    height: 400,
    left: -5,
    resizeMode: 'contain',
    bottom: 515,
  },
  box:{
    borderRadius: 10,
    width: 300,
    height: 250,
    backgroundColor: '#a2d8f7',
    top: 0,
    right: 0,
  },
  learnB:{
    borderRadius: 10,
    width: 110,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom: 150,
    right: 10,
    },
  gameB:{
    borderRadius: 10,
    width: 110,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom: 150,
    right: 0,
  },
  cardB:{
    borderRadius: 10,
    width: 110,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom: 150,
    left: 10,
  },
  set:{
    borderRadius: 10,
    width: 350,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom:-30,
    right:-175,
    position: "absolute",
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
