import { Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import React from 'react';
import { DisplayStyles } from '../../../pages/calculator/style';

interface DisplayProps {
    values: string[];
}

const Display = ({ values }: DisplayProps) => {
    const toCurrencyValue = (values: string[]) => {
        const number = values.join('');
        const currencyValue = (parseFloat(number) / 100)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return currencyValue == 'NaN' ? '0.00' : currencyValue;
    };

    return (
        <View style={DisplayStyles.view}>
            <Neomorph inner swapShadows style={DisplayStyles.neomorph}>
                <Text style={DisplayStyles.text}>
                    R$ {toCurrencyValue(values)}
                </Text>
            </Neomorph>
        </View>
    );
};

export default Display;
