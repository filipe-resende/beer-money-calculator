import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import BackspaceKeyboard from '../Backspace';
import { NumericStyles } from '../../../../pages/calculator/style';

interface PreviewLayoutProps {
    values: string[];
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
    removeAllDigits: () => void;
    children?: React.ReactNode;
}

const NumericKeyboard = ({
    values: keyboards,
    setSelectedValue,
    removeLastDigit,
    removeAllDigits
}: PreviewLayoutProps) => {
    const [innerStates, setInnerStates] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    return (
        <View style={NumericStyles.view}>
            <View style={NumericStyles.row}>
                {keyboards.map((keyboard, index) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            key={keyboard}
                            onPress={() => setSelectedValue(keyboard)}
                            onPressIn={() => {
                                let newInnerStates = [...innerStates];
                                newInnerStates[index] = true;
                                setInnerStates(newInnerStates);
                            }}
                            onPressOut={() => {
                                let newInnerStates = [...innerStates];
                                newInnerStates[index] = false;
                                setInnerStates(newInnerStates);
                            }}
                            style={NumericStyles.button}
                        >
                            <Neomorph
                                key={keyboard}
                                inner={innerStates[index]}
                                swapShadows
                                style={NumericStyles.neomorph}
                            >
                                <View style={NumericStyles.viewText}>
                                    <Text style={NumericStyles.text}>
                                        {keyboard}
                                    </Text>
                                </View>
                            </Neomorph>
                        </TouchableOpacity>
                    );
                })}
                <BackspaceKeyboard
                    removeAllDigits={removeAllDigits}
                    removeLastDigit={removeLastDigit}
                />
            </View>
        </View>
    );
};

export default NumericKeyboard;
