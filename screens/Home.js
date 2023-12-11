import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput,FlatList, ScrollView} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, getDocs, query, setDoc } from 'firebase/firestore/lite';
import { db } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';

function Home ({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid
  const add = async() =>{
    setDoc(doc(db, "users", uid), {email:user.email});
  }
  add();
  return(
    <LinearGradient style = {styles.container} colors= {["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')} style = {styles.head_logo}></Image>   
      <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate("Learn")}>
          <View style = {styles.learnB}></View>
          <Image source = {require('../assets/learnIcon.png')} style = {{position: "absolute", bottom: 184, left: -22, height: 165, width: 165}} ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Card")}>
          <View style = {styles.cardB}></View>
          <Image source = {require('../assets/cardIcon.png')}
              style = {{position: "absolute", bottom: 140, left: -19, height: 190, width: 190}} ></Image>
        </TouchableOpacity>
      </View>
      <Image style = {{position: 'absolute', width: 570, height: 400, top: 300, left: -94}}source = {require('../assets/divider.png')}></Image>
      <View style = {{flexDirection: "column", position:'absolute', top: 390 , width:390, height: 350}}>
          {/* <FlatList data ={route.params} 
          renderItem = {({item}) => <TouchableOpacity style = {styles.sets}>
              <Text style = {styles.item}>{item.title}</Text>
              </TouchableOpacity>
          }
        /> */}
      </View>
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
    justifyContent: 'center',
    position: 'absolute',
    flex:1,
    width: '100%',
    height: "50%",
    resizeMode: 'contain',
    bottom: '60%',
  },
  learnB:{
    borderRadius: 10,
    width: 140,
    height: 140,
    backgroundColor: '#a2d8f7',
    bottom: 160,
    right: 10,
    marginRight: 20,
    borderWidth:1,
    borderColor:"white",
    alignItems:'center'
  },
  cardB:{
    borderRadius: 10,
    width: 140,
    height: 140,
    backgroundColor: '#a2d8f7',
    bottom: 160,
    left: 10,
    borderWidth:1,
    borderColor:"white",
    alignItems: 'center',
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
    width: 400,
    height: 200,
    top: 740,
    position: "absolute",
  },
  });

  export default Home;

