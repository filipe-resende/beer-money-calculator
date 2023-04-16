import { Text, TouchableOpacity, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import Clipboard from '@react-native-clipboard/clipboard';

import React from 'react';
import { DisplayStyles } from '../../../pages/calculator/style';
import { FormatNumber } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';

interface DisplayProps {
    keyboards: string;
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
                        <LinearGradient
                            style={DisplayStyles.linearGradient}
                            colors={['#A8B79A', '#85A28D', '#6C9184']}
                            start={{ x: 0.0, y: 0.25 }}
                            end={{ x: 1.0, y: 1.0 }}
                            locations={[0, 0.5, 0.6]}
                        >
                            <Text style={DisplayStyles.historicText}>
                                {historicKeyboards}
                            </Text>
                            <Text style={DisplayStyles.text}>
                                {keyboards}
                            </Text>
                        </LinearGradient>
                    </Neomorph>
                </Neomorph>
            </View>
        </TouchableOpacity>
    );
};

export default Display;
