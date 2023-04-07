import { Neomorph } from 'react-native-neomorph-shadows';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar,
    BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight + 10
    : 64;

const Header = () => {
    return (
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPressIn={() => BackHandler.exitApp()}
        >
            <Neomorph swapShadows style={styles.neomorph}>
                <View>
                    <Text style={styles.text}>
                        <Icon name="power-off" size={20} color="#818296" />
                    </Text>
                </View>
            </Neomorph>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableOpacity: {
        paddingTop: statusBarHeight
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 100,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
export default Header;
