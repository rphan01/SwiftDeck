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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});