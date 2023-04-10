import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Keyboards from '../../src/components/keyboards';
import Display from '../../src/components/display';
import Header from '../../src/components/header';
import Footer from '../../src/components/footer';
import { CalculatorStyles } from './style';
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

    const setSelectedValue = (number: string) => {
        cleanHistoricDisplay();
        setDisplayNumber([...displayNumber, number]);
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
