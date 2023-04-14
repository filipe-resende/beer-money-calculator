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

const Header = () => {
    const statusBarHeight = StatusBar.currentHeight
        ? StatusBar.currentHeight + 10
        : 64;
    return (
        <View style={[HeaderStyles.view, { paddingTop: statusBarHeight }]}>
            <Neomorph swapShadows style={HeaderStyles.neomorph}>
                <TouchableOpacity onPressIn={() => BackHandler.exitApp()}>
                    <Text style={HeaderStyles.text}>
                        <Icon name="power-off" size={20} color={textColor} />
                    </Text>
                </TouchableOpacity>
            </Neomorph>
        </View>
    );
};

export default Header;
