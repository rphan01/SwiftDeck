import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useEffect } from '@react-navigation/native';
import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fb_auth } from '../FirebaseConfig.ts';
import { db } from '../FirebaseConfig';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const Register = () =>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = fb_auth;

    // const auths = getAuth();
    // const user = auths.currentUser;
    // const uid = user.uid;
    // console.log(user.email)

    
    // const add = async () =>{
    //   const cVal = collection(db, 'users')
    //   addDoc(cVal, {emails:email})
    //   setDoc(doc(db, "users", uid), {emails:email});
    // }
    const signUp = async() => {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert("Thank you for joining SwiftDeck");
        const docRef = await addDoc(collection(db, 'users'),{
          emails: email,
        });
        console.log(docRef.id);
        

        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
        alert("make the password longer loser");
      } finally {
        setLoading(false);
        // firestore().collection("users").add({
        //   email:email
        // })
      }
    }

    const navigation = useNavigation();

    return(
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/logo.png')}
                    style = {styles.logo}></Image>

            <Text style = {{top: 0, color: "#FFF", fontSize: 30, fontWeight: "bold", fontFamily: "Gill Sans"}}>Welcome!</Text>
            <Text style = {{top: 10 , color: "#FFF", fontSize: 15, fontWeight: "bold", fontFamily: "Gill Sans"}}>
              Please enter a valid email and password. The password must be at least 6 characters long.
            </Text>


            <TextInput 
                style = {styles.emails}
                placeholder={'Email'} 
                placeholderTextColor={"#FFF"}
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput 
                style = {styles.pInput} 
                placeholder={'Password'} 
                placeholderTextColor={"#FFF"} 
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <TouchableOpacity onPress = {() => signUp()}>
               <View style = {styles.loginB} >
                    <Text 
                    style = {{left: 55, color: '#FFF', fontSize: 23, fontWeight: 'bold', top: 10, fontFamily: "Gill Sans"}}
                    >Sign Up!</Text>
               </View>
            </TouchableOpacity>

            <Text style = {{top:168 ,right: 25}}>Already have an account?</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                <Text style = {{top:150, left:80, textDecorationLine: 'underline'}}>Login!</Text>
            </TouchableOpacity>

            
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

    logo:{
        position: 'absolute',
        width: 400,
        height: 400,
        top: 10,
      },

      uInput:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:300,
        height: 50,
        backgroundColor: "#b8e3ff",
        top: 40,
        // fontWeight: 'bold',
      },

      emails:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:300,
        height: 50,
        backgroundColor: "#b8e3ff",
        top: 70,
        // fontWeight: 'bold',
      },

      
      pInput:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:300,
        height: 50,
        top: 100,
        backgroundColor: "#b8e3ff",
        
      },

      loginB:{
        borderRadius: 10,
        // borderWidth: 1,
        width: 190,
        height: 50,
        backgroundColor: '#87d0ff',
        top: 140,
        
      },

  });

  export default Register;

