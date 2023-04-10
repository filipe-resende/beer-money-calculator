import React, { useState } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text } from 'react-native';
import { PercentStyles } from '../../../../pages/calculator/style';

interface EqualsKeyboardProps {
    keyboards: string[];
    children?: React.ReactNode;
    percentCalc: (percent: string, isSub: boolean) => void;
}

const PercentsKeyboard = ({ keyboards, percentCalc }: EqualsKeyboardProps) => {
    const [innerStates, setInnerStates] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    const [innerStatesSub, setInnerStatesSub] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    return (
        <View style={PercentStyles.view}>
            <View style={PercentStyles.row}>
                {keyboards.map((keyboard, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={keyboard}
                        onPress={() => percentCalc(keyboard, true)}
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
                        style={PercentStyles.button}
                    >
                        <Neomorph
                            inner={innerStates[index]}
                            swapShadows
                            style={PercentStyles.neomorph}
                        >
                            <View style={PercentStyles.viewText}>
                                <Text style={PercentStyles.text}>
                                    + {keyboard}%
                                </Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={PercentStyles.row}>
                {keyboards.map((keyboard, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={keyboard}
                        onPress={() => percentCalc(keyboard, false)}
                        onPressIn={() => {
                            let newInnerStates = [...innerStatesSub];
                            newInnerStates[index] = true;
                            setInnerStatesSub(newInnerStates);
                        }}
                        onPressOut={() => {
                            let newInnerStates = [...innerStatesSub];
                            newInnerStates[index] = false;
                            setInnerStatesSub(newInnerStates);
                        }}
                        style={PercentStyles.button}
                    >
                        <Neomorph
                            inner={innerStatesSub[index]}
                            swapShadows
                            style={PercentStyles.neomorph}
                        >
                            <View style={PercentStyles.viewText}>
                                <Text style={PercentStyles.text}>
                                    - {keyboard}%
                                </Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default PercentsKeyboard;
