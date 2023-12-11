import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

const Learn = () =>{
  const navigation = useNavigation();
    
  const [current, setCurrent] = useState(0);
  const[score, setScore] = useState(0);
  const [showScore, setSScore] = useState(false);

  const dataSource = [ 
    {key: '001', word: 'Creator of Python', definition:'Guido van Rossum', options:['program', 'Creator of Python', 'dictionary']}, 
    {key: '002', word: 'program', definition:'a sequence of instructions that can be interpreted and executed by a computer',options:['recursion', 'inheritance', 'program'] }, 
    {key: '003', word: 'dictionary', definition:'an object that lets you use a key to look up a value',options:['variable', 'argument', 'dictionary']}, 
    {key: '004', word: 'inheritance', definition: 'defines an is-a relationship',options:['argument', 'variable', 'inheritance']}, 
    {key: '005', word: 'variable', definition: "a name used to refer to a value stored in the computer's memory" ,options:['argument', 'set', 'variable']}, 
    {key: '006', word: 'recursion', definition: 'a technique in which a function calls itself in order to solve a problem', options:['Creator of Python', 'recursion', 'infinite recursion']}, 
    {key: '007', word: 'infinite recursion', definition: 'a situation in which the base case is never reached', options:['recursion', 'set', 'infinite recursion']}, 
    {key: '008', word: 'argument', definition: 'a value passed into a function when it is invoked', options:['infinite recursion', 'argument', 'dictionary']}, 
    {key: '009', word: 'set', definition: 'data type that represents an unordered collection of values that does not allow duplicate elements', options:['inheritance', 'variable', 'set']}
  ]; 
  
  const handleAnswer = (selectedAnswer) => {
    const answer = dataSource[current]?.word;
    if (answer === selectedAnswer) {
      alert("Correct :D")
      setScore((previousScore) => previousScore +1);
    } else {
      alert('Incorrect :p')
    }
    const nextQ = current +1;
    if (nextQ < dataSource.length) {
      setCurrent(nextQ);
    } else{
      setSScore(true);
    }
  } 
  
  const startOver = () => {
    setCurrent(0);
    setScore(0);
    setSScore(false);
  }
    
  return(
    <LinearGradient style = {styles.container} colors= {["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')} style = {styles.head_logo}></Image>
      {showScore? 
      <View style = {styles.box}>
          <Text style = {styles.score}>{score}/{dataSource.length}</Text>
          <TouchableOpacity style = {styles.restart} onPress ={startOver}>
            <Text style = {styles.restartB}>Start Over?</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.homeB} onPress ={() => {navigation.navigate("Home")}}>
            <Text style = {styles.homeT}>Home</Text>
          </TouchableOpacity>
      </View>:
        <View style = {styles.question}>
          <Text style = {styles.questionT}>{dataSource[current]?.definition}</Text>
          {dataSource[current]?.options.map((item) =>{
            return <TouchableOpacity onPress = {() => handleAnswer(item)} style = {styles.c1}>
            <Text style = {styles.choiceT}>{item}</Text>
            </TouchableOpacity>
          })}
        </View>
      }   
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
    justifyContent: 'center',
    position: 'absolute',
    flex:1,
    width: '100%',
    height: "50%",
    resizeMode: 'contain',
    bottom: '60%',
  },
  question:{
    borderRadius: 10,
    borderWidth: 1,
    width: 350,
    height: 200,
    backgroundColor: '#a2d8f7',
    bottom: 80,
    alignItems:'center',
    marginTop: 20,
  },
  
  c1:{
    borderRadius: 10,
    width: 350,
    height: 60,
    backgroundColor: '#a2d8f7',
    top: 200,
    marginBottom: 15,
    alignItems:'center',
  },
  choiceT:{
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    color: "#FFF",
    top: 20,
  },
  box:{
    borderRadius: 10,
    width: 300,
    height: 300,
    backgroundColor: '#a2d8f7',
    top: 20,
    right: 0,
    borderWidth:1,
    borderColor:"white",
    alignItems:'center',
  },

  score:{
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    color: "#FFF",
    fontSize: 30,
    top: 100,
  },
  restart:{
    alignItems: 'center',
    top: 110,
    borderRadius:10,
      width:210,
      height: 30,
      backgroundColor: "#b8e3ff",
  },
  restartB:{
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    color: "#FFF",
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    top: 5
  },

  homeB:{
    alignItems: 'center',
    top: 250,
    borderRadius:10,
      width:100,
      height: 30,
      backgroundColor: "#b8e3ff",
  },
  homeT:{
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    color: "#FFF",
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    top: 5
  },

  questionT:{
    fontFamily:"Gill Sans",
    fontWeight: 'bold',
    color: "#FFF",
    top: 70,
    fontSize: 20,
  },
});

export default Learn;
