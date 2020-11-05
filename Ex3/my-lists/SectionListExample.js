import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	SectionList
} from "react-native";
import Constants from "expo-constants";

const DATA = [
	{
		title: "Main dishes",
		data: ["Piza", "Burger", "Risotto"]
	},
	{
		title: "Sides",
		data: ["French Fries", "Onion Rings", "Fried Shrimps"]
	},
	{
		title: "Drinks",
		data: ["Water", "Coke", "Beer"]
	},
	{
		title: "Dessets",
		data: ["Cheese Cake", "Ice Cream"]
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const SectionListExample = () => (
	<SafeAreaView style={styles.container}>
		<SectionList
		  sections={DATA}
		  keyExtractor={(item, index) => item + index}
		  renderItem={ ({item}) => <Item title={item} />}
		  renderSectionHeader={ ({ section: {title} }) => (
			  <Text style={styles.header}>{title}</Text>
		  )}
		/>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginHorizontal: 16
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8
	},
	header: {
		fontSize: 32,
		backgroundColor: "#fff"
	},
	title: {
		fontSize: 24
	}
});

export default SectionListExample;
