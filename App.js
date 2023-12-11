import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Login from "./screens/Login"; 
import Register from "./screens/Register";
import Home from "./screens/Home";
import Learn from "./screens/Learn";
import Card from "./screens/Card";
import Profile from "./screens/Profile";
import Creates from "./screens/Creates";
import Add from "./screens/Add";
import Title from "./screens/Title";

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name = "Login"
          component={Login}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Register"
          component={Register}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Home"
          component={Home}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Learn"
          component={Learn}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Card"
          component={Card}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Profile"
          component={Profile}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Title"
          component={Title}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Creates"
          component={Creates}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
        name = "Add"
        component={Add}
        options = {{
          headerShown: false
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
