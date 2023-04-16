import { Neomorph } from 'react-native-neomorph-shadows';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    BackHandler,
    View,
    Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    HeaderStyles,
    textColor
} from '../../../pages/calculator/style';
import React, { useState } from 'react';

const Header = () => {
    const [neumorph, setNuemorph] = React.useState(false);    
    const statusBarHeight = StatusBar.currentHeight
        ? StatusBar.currentHeight + 10
        : 64;
        
    return (
        <View style={[HeaderStyles.view, { paddingTop: statusBarHeight }]}>
            <Switch value={neumorph} onValueChange={setNuemorph} />
            <Neomorph swapShadows style={HeaderStyles.neomorph}>
                <TouchableOpacity onPressIn={() => BackHandler.exitApp()}>
                    <Text style={HeaderStyles.text}>
                        <Icon name="power-off" size={16} color={textColor} />
                    </Text>
                </TouchableOpacity>
            </Neomorph>
        </View>
    );
};

export default Header;
