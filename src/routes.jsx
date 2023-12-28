import React from 'react';

import AdminScrean from "./screens/AdminScreen";
import CreateTaskScreen from "./screens/CreateTaskScreen";
import HomeScreen from "./screens/HomeScreen";
import TimerScreen from "./screens/TimerScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'rgb(37 99 235)',
              paddingTop: 10,
            }
          }}
        >
          <Tab.Screen
            name="Cadastro de Tarefas"
            component={CreateTaskScreen}
            options={{
              tabBarLabel: 'Tasks',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="tasks" size={24} color="white" />
              ),
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#D9D9D6",
              tabBarLabelStyle: {
                fontSize: 14,
                margin: 0,
              },
            }}
          />
          <Tab.Screen
            name="Sua Lista de Tarefas"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={24} color="white" />
              ),
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#D9D9D6",
              tabBarLabelStyle: {
                fontSize: 14,
                margin: 0,
              },
            }}
          />
          <Tab.Screen
            name="Pomodoro"
            component={TimerScreen}
            options={{
              tabBarLabel: 'Pomodoro',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="time-sharp" size={24} color="white" />
              ),
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#D9D9D6",
              tabBarLabelStyle: {
                fontSize: 14,
                margin: 0,
              },
            }}
          />
          <Tab.Screen
            name="Admin"
            component={AdminScrean}
            options={{
              tabBarLabel: 'Config',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cog-sharp" size={24} color="white" />
              ),
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#D9D9D6",
              tabBarLabelStyle: {
                fontSize: 14,
                margin: 0,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Routes;