import { StyleSheet } from 'react-native';

export const backgroundColor = '#B4BACA';
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
        paddingBottom: '2%',
        paddingEnd: '10%',
        alignItems: 'flex-end'
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        shadowRadius: shadowRadius,
        borderRadius: 100,
        backgroundColor: backgroundColor,
        width: 60,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});

const FooterStyles = StyleSheet.create({
    view: {
        padding: 10,
        flex: 1,
        alignItems: 'center'
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
        width: 60,
        height: 60,
        justifyContent: 'center'
    }
});

const BackspaceStyles = StyleSheet.create({
    touchableOpacity: {
        paddingTop: '2%'
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        backgroundColor: backgroundColor,
        shadowRadius: shadowRadius,
        borderRadius: 60,
        width: 160,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});

const NumericStyles = StyleSheet.create({
    view: {
        flex: 1,
        paddingStart: '20%',
        paddingEnd: '15%'
    },
    viewText: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        paddingStart: '3%',
        paddingEnd: '3%',
        marginHorizontal: '1%',
        marginTop: '2%',
        marginBottom: '2%',
        textAlign: 'center',
        justifyContent: 'center'
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
        width: 60,
        height: 60
    }
});

const PercentStyles = StyleSheet.create({
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
        flexWrap: 'nowrap'
    },
    button: {
        paddingStart: '3%',
        paddingEnd: '3%',
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
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Gilroy-Bold',
        flexWrap: 'nowrap'
    },
    neomorph: {
        shadowRadius: shadowRadius,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        width: 60,
        height: 60
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
        paddingBottom: '4%'
    },
    view: {
        alignItems: 'center'
    },
    neomorphOut: {
        shadowRadius: 3,
        borderRadius: 40,
        backgroundColor: backgroundColor,
        width: 330,
        height: 140,
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
        width: 310,
        height: 120,
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
    HistoricStyles
};
