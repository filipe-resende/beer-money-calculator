import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface BackspaceKeyboardProps {
  removeLastDigit: () => void;
}

const BackspaceKeyboard = ({removeLastDigit}: BackspaceKeyboardProps) => {
    return (
        <TouchableOpacity onPress={() => removeLastDigit()}>
            <Neomorph swapShadows style={styles.neomorph}>
                <View>
                    <Text>
                        <Icon name="backspace" size={20} color="oldlace" />
                    </Text>
                </View>
            </Neomorph>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    neomorph: {
        shadowRadius: 3,
        borderRadius: 100,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60
    }
});
export default BackspaceKeyboard;
