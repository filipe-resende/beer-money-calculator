import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface BackspaceKeyboardProps {
  removeLastDigit: () => void;
}

const BackspaceKeyboard = ({removeLastDigit}: BackspaceKeyboardProps) => {
    return (
        <TouchableOpacity style={styles.touchableOpacity} onPressIn={() => removeLastDigit()}>
            <Neomorph swapShadows style={styles.neomorph}>
                <View>
                    <Text style={styles.text}>
                        <Icon name="backspace" size={20} color="#818296" />
                    </Text>
                </View>
            </Neomorph>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableOpacity:{
        paddingTop:'1%'
    },
    text:{
        textAlign: 'center',
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 60,
        backgroundColor: '#DDDDDD',
        width: 160,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
export default BackspaceKeyboard;
