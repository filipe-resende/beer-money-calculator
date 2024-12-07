import { Neomorph } from 'react-native-neomorph-shadows';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    BackHandler,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HeaderStyles, textColor } from '../../../pages/calculator/style';
import React from 'react';

const Header = () => {
    const [innerNeomorph, setInnerNeomorph] = React.useState(false);

    const statusBarHeight = StatusBar.currentHeight
        ? StatusBar.currentHeight + 5
        : 40;

    return (
        <View style={[HeaderStyles.view, { paddingTop: statusBarHeight }]}>
            <Neomorph
                inner={innerNeomorph}
                swapShadows
                style={HeaderStyles.neomorph}
            >
                <TouchableOpacity
                    onPress={() => BackHandler.exitApp()}
                    onPressIn={() => setInnerNeomorph(true)}
                    onPressOut={() => setInnerNeomorph(false)}
                >
                    <Text style={HeaderStyles.text}>
                        <Icon name="power-off" size={16} color={textColor} />
                    </Text>
                </TouchableOpacity>
            </Neomorph>
        </View>
    );
};

export default Header;
