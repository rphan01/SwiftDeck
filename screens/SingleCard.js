import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function SingleCard({term}) {
    var[cardFront, setCardFront] = useState(term.word);
    var[isDef, setIsDef] = useState(true);
    function flipCard() {
        if(isDef)
          setCardFront(term.definition);
        else
          setCardFront(term.word);
        setIsDef(!isDef);
      }
    return (
            <TouchableOpacity onPress={()=>flipCard()}>
                <View style = {styles.box}>
                    <Text style = {styles.cardText}>
                        {cardFront}
                    </Text>
                </View>
            </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    cardText: {
      color: "#FFF" ,
      textAlign: 'center',
      fontFamily: 'Gill Sans',
      fontSize: 14,
      fontWeight: 'bold',
      top: 75,
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
      borderWidth:1,
      borderColor: "#FFF",
      width: 370,
      height: 190,
      backgroundColor: '#a2d8f7',
      alignItems: 'center',
      top: 0,
      marginBottom: 15,
      
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
    }
  
    });