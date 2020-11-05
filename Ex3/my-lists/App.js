import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollViewExample from './ScrollViewExample';
import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';

export default function App() {
 return (
	 <SectionListExample />
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
