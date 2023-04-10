import { Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import React from 'react';
import { DisplayStyles } from '../../../pages/calculator/style';
import { FormatNumber } from '../../../utils';

interface DisplayProps {
    values: string[];
}

const Display = ({ values }: DisplayProps) => {
    return (
        <View style={DisplayStyles.view}>
            <Neomorph inner swapShadows style={DisplayStyles.neomorph}>
                <Text style={DisplayStyles.text}>{FormatNumber(values)}</Text>
            </Neomorph>
        </View>
    );
};

export default Display;
