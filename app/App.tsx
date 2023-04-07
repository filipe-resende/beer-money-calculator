import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Keyboards from './src/components/Keyboards';
import Display from './src/components/Display';
import Header from './src/components/Header';

function App(): JSX.Element {
    const [displayNumber, setDisplayNumber] = useState(['00']);

    const setSelectedValue = (message: string) => {
        setDisplayNumber([...displayNumber, message]);
    };

    const GetCurrencyValue = (): string => {
        const number = displayNumber.join('');
        const currencyValue = (parseFloat(number) / 100)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return currencyValue == 'NaN' ? '0' : currencyValue;
    };

    const sumPercentValue = (percent: string) => {
        const currencyValue = parseFloat(GetCurrencyValue());
        const total = currencyValue + currencyValue * (Number(percent) / 100);

        const displayString = total.toFixed(2).toString().replace(/[.,\s]/g, '');
        setDisplayNumber([...displayString]);
    };

    const removeLastDigit = () => {
        const copyArr = [...displayNumber];
        copyArr.splice(-1);
        setDisplayNumber(copyArr);
    };

    return (
        <SafeAreaView
            style={{
                backgroundColor: '#DDDDDD'
            }}
        >
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Header />
                </View>
                <View>
                    <Display values={displayNumber} />
                </View>
                <View>
                    <Keyboards
                        sumPercentValue={sumPercentValue}
                        setSelectedValue={setSelectedValue}
                        removeLastDigit={removeLastDigit}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
