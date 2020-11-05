import {StyleSheet} from 'react-native';
import  headingText from '../../style/common.style';
import  textInput  from '../../style/common.style';
import theme from '../../style/theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: theme.CONTAINER_PADDING,
        alignItems: 'center'
    },
    titleHeading: {
        ...headingText,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        marginTop: 10,
        marginBottom: 5
    },
    titleTextInput: {
        ...textInput,
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
        padding: theme.CONTAINER_PADDING,
        alignSelf: 'stretch',
        marginBottom: 15
    },
    textAreaTitle: {
        ...headingText,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        marginBottom: 5
    },
    textArea: {
        flex: 1,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_LIGHT,
        padding: theme.CONTAINER_PADDING,
        alignSelf: 'stretch',
        overflow: 'scroll',
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT
    }
});