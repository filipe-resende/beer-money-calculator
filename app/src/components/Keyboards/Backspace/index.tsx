import React, { useState } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BackspaceStyles } from '../../../../pages/calculator/style';

interface BackspaceKeyboardProps {
    removeLastDigit: () => void;
    removeAllDigits: () => void;
}

const BackspaceKeyboard = ({
    removeLastDigit,
    removeAllDigits
}: BackspaceKeyboardProps) => {
    const [innerNeomorph, setInnerNeomorph] = useState(false);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={BackspaceStyles.touchableOpacity}
            onPress={() => {
                removeLastDigit();
            }}
            onLongPress={() => removeAllDigits()}
            onPressIn={() => setInnerNeomorph(true)}
            onPressOut={() => setInnerNeomorph(false)}
        >
            <Neomorph
                inner={innerNeomorph}
                swapShadows
                style={BackspaceStyles.neomorph}
            >
                <View>
                    <Text style={BackspaceStyles.text}>
                        <Icon name="backspace" size={20} color="#818296" />
                    </Text>
                </View>
            </Neomorph>
        </TouchableOpacity>
    );
};

export default BackspaceKeyboard;
