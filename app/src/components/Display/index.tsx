import { Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import React from 'react';
import { DisplayStyles } from '../../../pages/calculator/style';
import { FormatNumber } from '../../../utils';

interface DisplayProps {
    keyboards: string[];
    historicKeyboards: string;
}

const Display = ({ keyboards, historicKeyboards }: DisplayProps) => {
    return (
        <View style={DisplayStyles.view}>
            <Neomorph inner swapShadows style={DisplayStyles.neomorph}>
                <Text style={DisplayStyles.historicText}>
                    {historicKeyboards}
                </Text>
                <Text style={DisplayStyles.text}>
                    {FormatNumber(keyboards)}
                </Text>
            </Neomorph>
        </View>
    );
};

export default Display;
