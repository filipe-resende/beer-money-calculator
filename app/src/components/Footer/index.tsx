import { Neomorph } from 'react-native-neomorph-shadows';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FooterStyles } from '../../../pages/calculator/style';

const Footer = () => {
    return (
        <View style={FooterStyles.view}>
            <Neomorph inner swapShadows style={FooterStyles.neomorph}>
                <TouchableOpacity
                // onPressIn={() => BackHandler.exitApp()}
                >
                    <Text style={FooterStyles.text}>
                        <Icon name="calculator" size={20} color="#818296" />
                    </Text>
                </TouchableOpacity>
            </Neomorph>
        </View>
    );
};

export default Footer;
