import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Keyboards from '../../src/components/Keyboards';
import Display from '../../src/components/Display';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import { CalculatorStyles, backgroundColor } from './style';
import { FormatNumber, GetCurrencyValue } from '../../utils';

function Calculator(): JSX.Element {
    const [historicDisplay, setHistoricDisplay] = useState<string>('');
    const [displayNumber, setDisplayNumber] = useState<string[]>([]);

    const updateHistoricDisplay = (percent: string, isSub: boolean) => {
        const historicValue = `${FormatNumber(displayNumber)} ${
            isSub ? '+' : '-'
        } ${percent}% = `;

        setHistoricDisplay(historicValue);
    };

    const cleanHistoricDisplay = () => {
        setHistoricDisplay('');
    };

    const cleanDisplay = () => {
        setDisplayNumber(["000"]);
    };

    const setSelectedValue = (number: string) => {
        cleanHistoricDisplay();
        setDisplayNumber([...displayNumber, number]);
    };



    const removeAllDigits = () => {
        cleanHistoricDisplay();
        cleanDisplay();
    };

    const removeLastDigit = () => {
        cleanHistoricDisplay();
        const displayNumbers = [...displayNumber];
        displayNumbers.splice(-1);
        setDisplayNumber(displayNumbers);
    };

    const percentCalc = (percent: string, isSub: boolean) => {
        const currencyValue = convertToNumber();
        const totalCalc = isSub
            ? currencyValue + currencyValue * (Number(percent) / 100)
            : currencyValue - currencyValue * (Number(percent) / 100);

        const displayString = converterToString(totalCalc);

        if (
            displayNumber.length &&
            displayNumber.some((value) => value !== '0')
        )
            updateHistoricDisplay(percent, isSub);

        setDisplayNumber([...displayString]);
    };

    const converterToString = (totalCalc: number) => {
        return totalCalc
            .toFixed(2)
            .toString()
            .replace(/[.,\s]/g, '');
    };

    const convertToNumber = () => {
        const numericString = GetCurrencyValue(displayNumber).replace(
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
                <View>
                    <Header />
                </View>
                <View>
                    <Display
                        keyboards={displayNumber}
                        historicKeyboards={historicDisplay}
                    />
                </View>
                <View>
                    <Keyboards
                        percentCalc={percentCalc}
                        setSelectedValue={setSelectedValue}
                        removeAllDigits={removeAllDigits}
                        removeLastDigit={removeLastDigit}
                    />
                </View>
                <View>
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Calculator;
