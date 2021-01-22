import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Users from "./components/Users";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>​Consulta à API JSONPlaceholder​</Text>
      <Users />
      <StatusBar style="auto" />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#89BBDD",
    textAlign: "center",
    padding: 20,
  },
});