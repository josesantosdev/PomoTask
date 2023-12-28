import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import Routes from './src/routes';
export default function App() {

  return (
    <PaperProvider>
      <Routes />
      <StatusBar />
    </PaperProvider>
  );
};