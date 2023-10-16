import React from "react";
import {Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/screens/HomeScreen";
import CreateTaskScreen from "./src/screens/CreateTaskScreen";
import TimerScreen from "./src/screens/TimerScreen";
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar"; 
import styked from 'nativewind';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator options={{
          
        }}>
          <Tab.Screen 
            name="Cadastro de Tarefas" 
            component={CreateTaskScreen}
            options={{
              tabBarLabel: 'Tasks',
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="tasks" size={24} color="black"/>
              ),
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Entypo name="home" size={24} color="black"/>
              ),
            }}
          />
          <Tab.Screen 
            name="Pomodoro" 
            component={TimerScreen}
            options={{
              tabBarLabel: 'Pomodoro',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="time-sharp" size={24} color="black"/>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar />
    </PaperProvider>  
  );
};