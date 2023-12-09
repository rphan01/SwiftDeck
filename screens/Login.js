import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState, } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { fb_auth } from '../FirebaseConfig.ts';

const Login = () =>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = fb_auth;

    const navigation = useNavigation();
    
    const signIn = async() => {
      setLoading(true);
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
        alert("Invalid username or password.");
      } finally {
        setLoading(false);
      }
    }

    // const signUp = async() => {
    //   setLoading(true);
    //   try {
    //     const response = await createUserWithEmailAndPassword(auth, email, password);
    //     console.log(response);
    //     alert("Thank you for joining SwiftDeck");
    //   } catch (error) {
    //     console.log(error);
    //     alert("Try Again");
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    return(
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/swiftDeck.png')}
                    style = {styles.logo}></Image>

            <Text style = {{top: 10, color: "#FFF", fontSize: 30, fontWeight: "bold", fontFamily: "Gill Sans"}}>Welcome Back!</Text>
            <Text style = {{top: 15, color: "#FFF", fontSize: 15, fontWeight: "bold", fontFamily: "Gill Sans"}}>Login to your account</Text>

            <TextInput 
                style = {styles.uInput}
                placeholder={'Username'} 
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
                secureTextEntry = {true}
            />

            <TouchableOpacity onPress={() => signIn()}>
               <View style = {styles.loginB} >
                    <Text 
                    style = {{left: 55, color: '#FFF', fontSize: 23, fontWeight: 'bold', top: 10, fontFamily: "Gill Sans"}}
                    >LOGIN</Text>
               </View>
            </TouchableOpacity>

            <Text style = {{top:150 ,right: 31}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style = {{top:132, left:75, textDecorationLine: 'underline'}}>Sign Up!</Text>
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
        flex:1,
        width: 410,
        height: 400,
        left: -10,
        resizeMode: 'contain',
        top: 10,
      },

      uInput:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:300,
        height: 50,
        backgroundColor: "#b8e3ff",
        top: 40
        // fontWeight: 'bold',
      },

      pInput:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:300,
        height: 50,
        top: 70,
        backgroundColor: "#b8e3ff",
        
      },

      loginB:{
        borderRadius: 10,
        // borderWidth: 1,
        width: 190,
        height: 50,
        backgroundColor: '#87d0ff',
        top: 110,
        
      },

  });

  export default Login;

