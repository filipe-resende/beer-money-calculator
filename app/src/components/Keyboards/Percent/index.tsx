import { Neomorph } from 'react-native-neomorph-shadows';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface EqualsKeyboardProps {
    values: string[];
    children?: React.ReactNode;
    sumPercentValue: (value: string) => void;
    subPercentValue: (value: string) => void;
}
const PercentsKeyboard = ({
    values,
    sumPercentValue,
    subPercentValue
}: EqualsKeyboardProps) => {
    return (
        <View style={styles.view}>
            <View style={styles.row}>
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => sumPercentValue(value)}
                        style={styles.button}
                    >
                        <Neomorph swapShadows style={styles.neomorph}>
                            <View style={styles.viewText}>
                                <Text style={styles.text}>+ {value}%</Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.row}>
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => subPercentValue(value)}
                        style={styles.button}
                    >
                        <Neomorph swapShadows style={styles.neomorph}>
                            <View style={styles.viewText}>
                                <Text style={styles.text}>- {value}%</Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginBottom: '2%',
        flex: 1
    },
    viewText: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        paddingStart: '3%',
        paddingEnd: '3%',
        marginHorizontal: '1%',
        marginTop: '1%',
        marginBottom: '2%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#818296',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60
    }
});
export default PercentsKeyboard;
