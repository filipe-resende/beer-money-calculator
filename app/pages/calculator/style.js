import { StyleSheet } from 'react-native';

export const backgroundColor = '#f2f3f7';
export const textColor = '#676878';
const shadowRadius = 4;

const CalculatorStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    linearGradient: {
        flex: 1
    }
});

const HeaderStyles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        marginEnd:'8%',
        flexDirection: 'row'
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        backgroundColor: backgroundColor,
        shadowRadius: shadowRadius,
        borderRadius: 100,
        width: 45,
        height: 45,
        justifyContent: 'center'
    }
});

const FooterStyles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    touchableOpacity: {
        justifyContent: 'center',
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        color: textColor
    },
    neomorph: {
        shadowRadius: shadowRadius,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        width: 40,
        height: 40,
        justifyContent: 'center'
    }
});

const BackspaceStyles = StyleSheet.create({
    touchableOpacity: {
        flex: 1,
        justifyContent: 'center',
        margin: '2%'
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        backgroundColor: backgroundColor,
        shadowRadius: shadowRadius,
        borderRadius: 60,
        width: 150,
        height: 68,
        textAlign: 'center',
        justifyContent: 'center'
    }
});

const NumericStyles = StyleSheet.create({
    view: {
        flex: 0.8,
        justifyContent: 'center'
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
        alignSelf: 'flex-end',
        margin: '2%'
    },
    text: {
        color: textColor,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Gilroy-Bold'
    },
    neomorph: {
        backgroundColor: backgroundColor,
        shadowRadius: shadowRadius,
        borderRadius: 100,
        width: 68,
        height: 68
    }
});

const OperationKeyboardStyles = StyleSheet.create({
    view: {
        flex: 0.3
    },
    button: {
        margin: '10%'
    },
    neomorph: {
        shadowRadius: shadowRadius,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        width: 45,
        height: 45
    },
    viewText: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: textColor,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Gilroy-Bold',
        flexWrap: 'nowrap'
    }
});

const PercentStyles = StyleSheet.create({
    viewText: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    button: {
        paddingStart: '2%',
        paddingEnd: '2%',
        marginHorizontal: '1%',
        marginTop: '2%',
        marginBottom: '2%',
        textAlign: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap'
    },
    text: {
        color: textColor,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Gilroy-Bold',
        flexWrap: 'nowrap'
    },
    neomorph: {
        shadowRadius: shadowRadius,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        width: 50,
        height: 50
    }
});

const HistoricStyles = StyleSheet.create({
    view: {
        alignItems: 'flex-end'
    },
    neomorph: {
        shadowRadius: shadowRadius,
        backgroundColor: backgroundColor,
        borderRadius: 40,
        width: 330,
        height: 125,
        margin: '5%',
        justifyContent: 'center'
    },
    text: {
        color: textColor,
        alignSelf: 'flex-end',
        fontSize: 32,
        marginEnd: '5%',
        fontWeight: 'bold'
    }
});

const DisplayStyles = StyleSheet.create({
    touchableOpacity: {
        paddingTop: '2%',
        paddingBottom: '2%',
        flexWrap: 'nowrap'
    },
    view: {
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    neomorphOut: {
        shadowRadius: 3,
        borderRadius: 40,
        backgroundColor: backgroundColor,
        width: 350,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 40,
        position: 'absolute',
        zIndex: 1
    },
    neomorphInner: {
        justifyContent: 'center',
        shadowRadius: 7,
        borderRadius: 40,
        backgroundColor: '#a8b79a',
        width: 330,
        height: 100,
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, .40)',
        borderWidth: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text: {
        color: '#42434D',
        alignSelf: 'flex-end',
        fontSize: 36,
        marginEnd: '5%',
        fontFamily: 'Quartz-Bold',
        letterSpacing: 5
    },
    historicText: {
        color: 'rgba(64, 66, 62, 0.65)',
        alignSelf: 'flex-end',
        fontFamily: 'Quartz-Bold',
        fontSize: 20,
        marginEnd: '5%'
    }
});

export {
    CalculatorStyles,
    HeaderStyles,
    FooterStyles,
    BackspaceStyles,
    NumericStyles,
    PercentStyles,
    DisplayStyles,
    HistoricStyles,
    OperationKeyboardStyles
};
