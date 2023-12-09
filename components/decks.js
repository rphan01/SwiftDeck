import AsyncStorage from "@react-native-async-storage/async-storage";
import { data } from "./data";
const decks_key = 'SwiftDeck:data';

export function getData(){
    return data;
}

export async function getDecks(){
    try{
        const store = await AsyncStorage.getItem(decks_key);
        if (store === null){
            AsyncStorage.setItem(decks_key, JSON.stringify);
        }
        return store === null? data : JSON.parse(store);
    }catch(error){
        console.log(error);
    }
}

export async function getDecks(){
    try{
        const store = await AsyncStorage.getItem(decks_key);
        if (store === null){
            AsyncStorage.setItem(decks_key, JSON.stringify);
        }
        return store === null? data : JSON.parse(store);
    }catch(error){
        console.log(error);
    }
}

export async function getDeck(id){
    try{
        const result = await AsyncStorage.getItem(decks_key);
        return JSON.parse(result)[id];
    }catch(error){
        console.log(error);
    }
}

export async function saveDeckTitleAS(title){
    try{
        await AsyncStorage.mergeItem{
            decks_key,
            JSON.stringify({
                [title]: {
                    title,
                    questions:[]
                }
            })
        }
    }
}