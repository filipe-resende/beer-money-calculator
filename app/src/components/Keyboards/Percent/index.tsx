import React, { useState } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface EqualsKeyboardProps {
    keyboards: string[];
    children?: React.ReactNode;
    sumPercentValue: (value: string) => void;
    subPercentValue: (value: string) => void;
}

const PercentsKeyboard = ({
    keyboards,
    sumPercentValue,
    subPercentValue
}: EqualsKeyboardProps) => {
    const [innerStates, setInnerStates] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    const [innerStatesSub, setInnerStatesSub] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    return (
        <View style={styles.view}>
            <View style={styles.row}>
                {keyboards.map((keyboard, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={keyboard}
                        onPress={() => sumPercentValue(keyboard)}
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
                        style={styles.button}
                    >
                        <Neomorph
                            inner={innerStates[index]}
                            swapShadows
                            style={styles.neomorph}
                        >
                            <View style={styles.viewText}>
                                <Text style={styles.text}>+ {keyboard}%</Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.row}>
                {keyboards.map((keyboard, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={keyboard}
                        onPress={() => subPercentValue(keyboard)}
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
                        style={styles.button}
                    >
                        <Neomorph
                            inner={innerStatesSub[index]}
                            swapShadows
                            style={styles.neomorph}
                        >
                            <View style={styles.viewText}>
                                <Text style={styles.text}>- {keyboard}%</Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginBottom: '2%',
        flex: 1
    },
    viewText: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        paddingStart: '3%',
        paddingEnd: '3%',
        marginHorizontal: '1%',
        marginTop: '1%',
        marginBottom: '2%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#818296',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60
    }
});
export default PercentsKeyboard;
