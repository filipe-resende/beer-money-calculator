import { Neomorph } from 'react-native-neomorph-shadows';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    BackHandler,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = () => {
    return (
        <View style={styles.view}>
            <Neomorph inner swapShadows style={styles.neomorph}>
                <TouchableOpacity
                // onPressIn={() => BackHandler.exitApp()}
                >
                    <Text style={styles.text}>
                        <Icon name="calculator" size={20} color="#818296" />
                    </Text>
                </TouchableOpacity>
            </Neomorph>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        paddingTop: '3%',
        paddingBottom: '2%',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60,
        // textAlign: 'center',
        justifyContent: 'center'
    }
});
export default Footer;
