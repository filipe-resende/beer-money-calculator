import { Neomorph } from 'react-native-neomorph-shadows';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar,
    BackHandler,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight + 10
    : 64;

const Header = () => {
    return (
        <View style={styles.view}>
            <Neomorph swapShadows style={styles.neomorph}>
                <TouchableOpacity
                onPressIn={() => BackHandler.exitApp()}
                >
                    <Text style={styles.text}>
                        <Icon name="power-off" size={20} color="#818296" />
                    </Text>
                </TouchableOpacity>
            </Neomorph>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        paddingTop: statusBarHeight,
        paddingBottom: '2%',
        paddingEnd: '10%',
        alignItems: 'flex-end'
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
