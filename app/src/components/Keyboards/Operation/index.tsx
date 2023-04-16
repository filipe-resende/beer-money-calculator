import React, { useState } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text } from 'react-native';
import { OperationKeyboardStyles } from '../../../../pages/calculator/style';

interface EqualsKeyboardProps {
    keyboards: string[];
    children?: React.ReactNode;
    setOperationCalc: (value: string) => void;
}

const OperationKeyboard = ({
    keyboards,
    setOperationCalc
}: EqualsKeyboardProps) => {

    const [innerStates, setInnerStates] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    return (
        <View style={OperationKeyboardStyles.view}>
            {keyboards.map((keyboard, index) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    key={keyboard}
                    style={OperationKeyboardStyles.button}
                    onPress={() => setOperationCalc(keyboard)}
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
                >
                    <Neomorph
                        inner={innerStates[index]}
                        swapShadows
                        style={OperationKeyboardStyles.neomorph}
                    >
                        <View style={OperationKeyboardStyles.viewText}>
                            <Text style={OperationKeyboardStyles.text}>
                                {keyboard}
                            </Text>
                        </View>
                    </Neomorph>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default OperationKeyboard;
