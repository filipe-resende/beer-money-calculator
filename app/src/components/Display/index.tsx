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
        <View style={styles.view}>
            <Neomorph inner swapShadows style={styles.neomorph}>
                <Text style={styles.text}>R$ {toCurrencyValue(values)}</Text>
            </Neomorph>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    },
    neomorph: {
        shadowRadius: 10,
        borderRadius: 40,
        backgroundColor: '#DDDDDD',
        width: 330,
        height: 125,
        margin: '5%',
        justifyContent: 'center'
    },
    text: {
        color: '#818296',
        alignSelf: 'flex-end',
        fontSize: 32,
        marginEnd: '5%'
    }
});

export default Display;
