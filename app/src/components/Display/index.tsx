import { StyleSheet, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import React from 'react';

interface DisplayProps {
    values: string[];
}

const Display = ({ values }: DisplayProps) => {
    const toCurrencyValue = (values: string[]) => {
        const number = values.join('');
        const currencyValue = (parseFloat(number) / 100)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return currencyValue == 'NaN' ? 0 : currencyValue;
    };

    return (
        <Neomorph inner swapShadows style={styles.neomorph}>
            <View style={styles.view}>
                <Text style={styles.text}>R$ {toCurrencyValue(values)}</Text>
            </View>
        </Neomorph>
    );
};

const styles = StyleSheet.create({
    neomorph: {
        shadowRadius: 10,
        borderRadius: 40,
        backgroundColor: '#DDDDDD',
        width: 330,
        height: 125,
        marginBottom: 25,
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        justifyContent: 'center'
    },
    text: {
        color: '#818296',
        alignSelf: 'flex-end',
        fontSize: 32,
        marginLeft: 4
    },
    view: {
        marginLeft: 15,
        marginRight: 15
    }
});

export default Display;
