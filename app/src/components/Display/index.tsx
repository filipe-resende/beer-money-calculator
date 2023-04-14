import { Text, TouchableOpacity, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import Clipboard from '@react-native-clipboard/clipboard';

import React from 'react';
import { DisplayStyles } from '../../../pages/calculator/style';
import { FormatNumber } from '../../../utils';

interface DisplayProps {
    keyboards: string[];
    historicKeyboards: string;
}

const Display = ({ keyboards, historicKeyboards }: DisplayProps) => {
    return (
        <TouchableOpacity
            style={DisplayStyles.touchableOpacity}
            onPress={() => Clipboard.setString(historicKeyboards)}
        >
            <View style={DisplayStyles.view}>
                <Neomorph style={DisplayStyles.neomorphOut}>
                    <Neomorph inner={false} style={DisplayStyles.neomorphInner}>
                        <Text style={DisplayStyles.historicText}>
                            {historicKeyboards}
                        </Text>
                        <Text style={DisplayStyles.text}>
                            {FormatNumber(keyboards)}
                        </Text>
                    </Neomorph>
                </Neomorph>
            </View>
        </TouchableOpacity>
    );
};

export default Display;
