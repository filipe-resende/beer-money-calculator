import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Keyboards from '../../src/components/Keyboards';
import Display from '../../src/components/Display';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import { CalculatorStyles, backgroundColor } from './style';
import { FormatNumber, GetCurrencyValue } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

function Calculator(): JSX.Element {
    const [historicDisplay, setHistoricDisplay] = useState<string>('');
    const [peopleCount, setPeopleCount] = useState(1);
    const [displayCurreny, setDisplayCurrency] = useState<string>('');
    const [displayCharacters, setDisplayCharacters] = useState<string[]>([]);

    const divideAccountBetweenPeople = () => {
        const currencyValue = convertToNumber();

        if (currencyValue != 0) {
            const totalCalc = currencyValue / peopleCount;

            const displayString = converterToString(totalCalc);

            if (
                displayCharacters.length &&
                displayCharacters.some((value) => value !== '0')
            )
                updateDivideAccountBetweenPeople();

            setDisplayCharacters([...displayString]);
            setDisplayCurrencyFormat([...displayString]);
        }
    };

    const addPeopleCount = () => {
        let count = peopleCount + 1;
        setPeopleCount(count);
    };

    const removePeopleCount = () => {
        if (peopleCount != 1) {
            let count = peopleCount - 1;
            setPeopleCount(count);
        }
    };

    const updateHistoricDisplay = (percent: string, isSub: boolean) => {
        const historicValue = `${FormatNumber(displayCharacters)} ${
            isSub ? '+' : '-'
        } ${percent}% = `;

        setHistoricDisplay(historicValue);
    };

    const updateDivideAccountBetweenPeople = () => {
        const historicValue = `${FormatNumber(
            displayCharacters
        )} ${'/'} ${peopleCount}`;

        setHistoricDisplay(historicValue);
    };

    const cleanHistoricDisplay = () => {
        setHistoricDisplay('');
    };

    const setDisplayCurrencyFormat = (displayNumbers: string[]) => {
        var defaultNumber = FormatNumber(displayNumbers);
        setDisplayCurrency(defaultNumber);
    };

    const cleanDisplay = () => {
        setDisplayCharacters([]);
        setDisplayCurrencyFormat(['000']);
    };

    const setSelectedValue = (number: string) => {
        const displayNumbers = [...displayCharacters, number];
        cleanHistoricDisplay();

        setDisplayCharacters(displayNumbers);
        setDisplayCurrencyFormat(displayNumbers);
    };

    const removeAllDigits = () => {
        cleanHistoricDisplay();
        cleanDisplay();
    };

    const removeLastDigit = () => {
        cleanHistoricDisplay();
        const displayNumbers = [...displayCharacters];
        displayNumbers.splice(-1);
        setDisplayCharacters(displayNumbers);
        setDisplayCurrencyFormat(displayNumbers);
    };

    const percentCalc = (percent: string, isSub: boolean) => {
        const currencyValue = convertToNumber();
        const totalCalc = isSub
            ? currencyValue + currencyValue * (Number(percent) / 100)
            : currencyValue - currencyValue * (Number(percent) / 100);

        const displayString = converterToString(totalCalc);

        if (
            displayCharacters.length &&
            displayCharacters.some((value) => value !== '0')
        )
            updateHistoricDisplay(percent, isSub);

        setDisplayCharacters([...displayString]);
        setDisplayCurrencyFormat([...displayString]);
    };

    const converterToString = (totalCalc: number) => {
        return totalCalc
            .toFixed(2)
            .toString()
            .replace(/[.,\s]/g, '');
    };

    const convertToNumber = () => {
        const numericString = GetCurrencyValue(displayCharacters).replace(
            /[^\d.]/g,
            ''
        );
        const currencyValue = parseFloat(numericString);
        return currencyValue;
    };

    return (
        <SafeAreaView style={CalculatorStyles.safeAreaView}>
            <StatusBar
                backgroundColor={backgroundColor}
                translucent={true}
                barStyle="light-content"
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <LinearGradient
                    start={{ x: 0.0, y: 0.8 }}
                    end={{ x: 0.0, y: 1.2 }}
                    locations={[0, 0.1, 0.5]}
                    colors={[backgroundColor, backgroundColor, '#FFFFFF']}
                    style={CalculatorStyles.linearGradient}
                >
                    <View>
                        <Header />
                    </View>
                    <View>
                        <Display
                            keyboards={displayCurreny}
                            historicKeyboards={historicDisplay}
                        />
                    </View>
                    <View>
                        <Keyboards
                            divideAccountBetweenPeople={
                                divideAccountBetweenPeople
                            }
                            addPeopleCount={addPeopleCount}
                            removePeopleCount={removePeopleCount}
                            percentCalc={percentCalc}
                            setSelectedValue={setSelectedValue}
                            removeAllDigits={removeAllDigits}
                            removeLastDigit={removeLastDigit}
                            peopleCount={peopleCount}
                        />
                    </View>
                    <View>
                        <Footer />
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Calculator;
