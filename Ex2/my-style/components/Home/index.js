import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import styles from './style';
import TextArea from "../TextArea";

function Home() {
    const [state, setTitle] = useState({text: ''});
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeading}>Título</Text>
            <TextInput style={styles.titleTextInput}
            onChangeText={(newTitle) => setTitle(newTitle) }
            value={state.title} />
            <Text style={styles.textAreaTitle}>Digite a sua anotação</Text>
            <TextArea />
        </View>
    );
}

export default Home;