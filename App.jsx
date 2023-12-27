import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack'
import HomeScreen from "./src/screens/HomeScreen";
import CreateTaskScreen from "./src/screens/CreateTaskScreen";
import TimerScreen from "./src/screens/TimerScreen";
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import AdminScrean from "./src/screens/AdminScreen";


const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <PaperProvider>
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
      <StatusBar />
    </PaperProvider>
  );
};