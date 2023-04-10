import { StyleSheet } from 'react-native';

const CalculatorStyles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#DDDDDD',
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
        shadowRadius: 3,
        borderRadius: 100,
        backgroundColor: '#DDDDDD',
        width: 60,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});

const FooterStyles = StyleSheet.create({
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
        justifyContent: 'center'
    }
});

const BackspaceStyles = StyleSheet.create({
    touchableOpacity: {
        paddingTop: '1%'
    },
    text: {
        textAlign: 'center'
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 60,
        backgroundColor: '#DDDDDD',
        width: 160,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});

const NumericStyles = StyleSheet.create({
    view: {
        paddingStart: '20%',
        paddingEnd: '15%',
        flex: 1
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
        marginTop: '1%',
        marginBottom: '2%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#818296',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 32
    },
    neomorph: {
        shadowRadius: 3,
        borderRadius: 100,
        backgroundColor: '#DDDDDD',
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

const DisplayStyles = StyleSheet.create({
    view: {
        alignItems: 'center'
    },
    neomorph: {
        shadowRadius: 10,
        borderRadius: 40,
        backgroundColor: '#DDDDDD',
        width: 330,
        height: 125,
        margin: '5%',
        justifyContent: 'center'
    },
    text: {
        color: '#818296',
        alignSelf: 'flex-end',
        fontSize: 32,
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
    DisplayStyles
};
