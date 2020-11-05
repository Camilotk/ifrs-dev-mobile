import React, {useState} from "react";
import { TextInput } from "react-native";
import styles from "./style";

function TextArea() {
    const [state, setState] = useState({text: ''});

    return (
       <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        value={state.text}
        />
    );
}

export default TextArea;