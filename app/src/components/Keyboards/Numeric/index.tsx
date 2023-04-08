import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import BackspaceKeyboard from '../Backspace';

interface PreviewLayoutProps {
    values: string[];
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
    children?: React.ReactNode;
}

const NumericKeyboard = ({
    values: keyboards,
    setSelectedValue,
    removeLastDigit
}: PreviewLayoutProps) => {
    const [innerStates, setInnerStates] = useState<boolean[]>(
        new Array(keyboards.length).fill(false)
    );

    return (
        <View style={styles.view}>
            <View style={styles.row}>
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
                            style={styles.button}
                        >
                            <Neomorph
                                key={keyboard}
                                inner={innerStates[index]}
                                swapShadows
                                style={styles.neomorph}
                            >
                                <View style={styles.viewText}>
                                    <Text style={styles.text}>{keyboard}</Text>
                                </View>
                            </Neomorph>
                        </TouchableOpacity>
                    );
                })}
                <BackspaceKeyboard removeLastDigit={removeLastDigit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        paddingStart: '20%',
        paddingEnd: '15%',
        flex: 1
    },
    viewText: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
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
        fontSize: 32
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 100,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60
    }
});

export default NumericKeyboard;
