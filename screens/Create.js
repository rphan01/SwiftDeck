import { StyleSheet, Text,Button, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { FlatList } from 'react-native';
// import { auth } from '../firebase';
//<3


const Create = () =>{
    // const[vocab, setVocab] = useState(['']);
    // const[def, setDef] = useState(['']);
    // const data =[];
    const[data, setData] = useState([{vocab: "", def: ""}])

    const handleClick = () =>{
        setData([...data, {vocab: "", def: ""}])
    }

    const handleChange =(e,i)=>{
        const {name, value} = e.target
        const onchangeVal =[...data]
        onchangeVal[i][name]= value
        setData(onchangeVal)
    }
    var count = 0;
    // const handle=(e) =>{
    //     const data = {vocab,def}
    // }

    const handle = () => {
        const newV = [...vocab];
        newV.push('');
        setVocab(newV);
        const newD = [...def];
        newD.push('');
        setDef(newD);
    };

    // const handleD = () => {
    //     const newD = [...def];
    //     newD.push('');
    //     setDef(newD);
    // };

    const changeV = (text, index) =>{
        const newC = [...vocab];
        newC[index] = text;
        setVocab(newC);
       
    };
    const changeD = (text, index) =>{
        const newD = [...def];
        newD[index] = text;
        setDef(newD);
    };
    
    //data.concat({key:"0012", word:  vocab, definition: definition});

    const navigation = useNavigation();

    return(
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/swiftDeck.png')}
                    style = {styles.head_logo}></Image>

            
            <View style = {{flexDirection: "column", position: 'absolute', width: 390, height: 530, top: 210}}>
               <ScrollView>
                    <View style = {styles.each}>
                        
                        {data.map((val,i) =>(
                            <View>
                                <TextInput style = {styles.term} value = {val}multiline={true}  onChange= {(e) => handleChange(e,i)} />
                                <TextInput style = {styles.definition} value = {val} multiline={true} onChange= {(e) => handleChange(e,i)} /> 
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={()=> {console.log(data);handleClick}}>
                    <View style = {styles.createB}>
                        <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>
                            Create
                        </Text>
                    </View>
                 </TouchableOpacity> 

                {/* <View >
                             <TextInput
                             value={vocab}
                             multiline= {true} 
                             style = {styles.term}
                             onChangeText={text =>{console.log(vocab);  changeV(text, count)}}>
                             </TextInput>
                        </View>

                        <View >
                             <TextInput 
                             value={def}
                             multiline= {true} 
                             style = {styles.definition}
                             onChangeText={text =>{console.log(def);  changeD(text, count)}}>
                             </TextInput>
                        </View>
                    
                     <TouchableOpacity onPress={() => {{handle} 
                        count += 1;
                        console.log(data);
                        data.push({key: ""+count, word:  vocab, definition: def})}}>
                    <View style = {styles.createB}>
                        <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>
                            Create
                        </Text>
                    </View>
                </TouchableOpacity>  */}





                {/* <TouchableOpacity onPress={handleClick}>
                    <View style = {styles.createB}>
                        <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>
                            Create
                        </Text>
                    </View>
                 </TouchableOpacity> 
               {data.map((val,index) =>
                    
                    <View style ={styles.each}>
                    <TextInput
                    name="vocab"
                    value = {val.vocab}
                    multiline= {true} 
                    style = {styles.term}
                    onChangeText={(e) => handleChange(e,index)}>
                    </TextInput>

                    <TextInput
                    name="def"
                    value = {val.def}
                    multiline= {true} 
                    style = {styles.definition}
                    onChangeText={(e) => handleChange(e,index)}>
                    </TextInput>
                    
                
                    </View>
                    
                    
                    
               )} */}


            
            {/* <View style = {{flexDirection: "column", position: 'absolute', width: 390, height: 640, top: 210}}>
               
                <View style = {styles.each}>
                    {vocab.map((input, index)=>(
                        <View key = {index}>
                             <TextInput value ={input} 
                             onChangeText={text =>{console.log(vocab);  changeV(text, index)}}
                             multiline= {true} 
                             style = {styles.term}>
                             </TextInput>
                        </View>
                    ))}
                    {def.map((input, index)=>(
                        <View key = {index}>
                             <TextInput value ={input} 
                             onChangeText={text =>{console.log(def);  changeD(text, index)}} 
                             multiline= {true} 
                             style = {styles.definition}>
                             </TextInput>
                        </View>
                    ))}
                     <TouchableOpacity onPress={() => {console.log(data); 
                        count += 1;
                        data.push({key: ""+count, word:  vocab, definition: def})}}>
                    <View style = {styles.createB}>
                        <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>
                            Create
                        </Text>
                    </View>
                </TouchableOpacity> 
                </View>
                </View> */}

                {/* <View>
                    {def.map((input, index)=>(
                        <View key = {index}>
                             <TextInput value ={input} 
                             onChangeText={text =>{console.log(def);  changeD(text, index)}} 
                             multiline= {true} 
                             style = {styles.definition}>
                             </TextInput>
                        </View>
                    ))}
                <FlatList data = {data}
                render = {({item}) => <TouchableOpacity style = {styles.sets}> 

                </TouchableOpacity>}>
                </FlatList>
                </View> */}
            
           {/* <View style= {styles.create}>
                <View>
                    {vocab.map((input, index)=>(
                        <View key = {index}>
                             <TextInput value ={input} 
                             onChangeText={text =>{console.log(vocab);  changeV(text, index)}} 
                             multiline= {true} 
                             style = {styles.term}>
                             </TextInput>
                        </View>
                    ))}
                </View>

                <View>
                    {def.map((input, index)=>(
                        <View key = {index}>
                             <TextInput value ={input} 
                             onChangeText={text =>{console.log(def);  changeD(text, index)}} 
                             multiline= {true} 
                             style = {styles.definition}>
                             </TextInput>
                        </View>
                    ))}
                </View> */}

                {/* <KeyboardAvoidingView style = {{flex:1}} behavior='padding' keyboardVerticalOffset={100}>
                    <TextInput value ={vocab} onChangeText={text => setVocab(text)} multiline= {true} style = {styles.term}></TextInput>
                    <TextInput multiline= {true} style = {styles.definition}></TextInput>
                </KeyboardAvoidingView> */}
                {/* <TouchableOpacity onPress={handleV}>
                    <View style = {styles.createB}>
                        <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 10, fontSize: 30, fontWeight: 'bold'}}>
                            Create
                        </Text>
                    </View>
                </TouchableOpacity> 
           </View> */}

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
    sets:{
        borderRadius: 10,
        backgroundColor: '#a2d8f7',
        width: 350,
        height: 150,
        left:20,
        marginBottom: 10,
        flexDirection: 'row',
        
      },

    create:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 350,
      height: 500,
      top: 200,
      backgroundColor: '#a2d8f7',
      position: "absolute",
    },

    each:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:300,
        height: 130,
        backgroundColor: "#b8e3ff",
        right:50,
        top: 50,
       position:'absolute', 
        fontFamily: "Gill Sans",
        fontSize: 30,
        
        paddingTop: 20,
        
      },

      term:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:280,
        height:30,
        backgroundColor: "#a2d8f7",
        left:0,
        top: 0,
        color: "#FFF",
        fontFamily: "Gill Sans",
        fontSize: 20,
        
        
      },

      definition:{
        paddingHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        width:280,
        height: 60,
        backgroundColor: "#a2d8f7",
        left:0,
        top: 10,
        color: "#FFF",
        fontFamily: "Gill Sans",
        fontSize: 20,
        
        
      },

      createB:{
        borderRadius:10,
        width:280,
        height: 30,
        backgroundColor: "#b8e3ff",
        top: 350,
        right:-135,
        position:'absolute'
        
      },

  });

  export default Create;
