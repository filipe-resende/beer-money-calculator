import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import Keyboards from './src/components/Keyboards';
import Display from './src/components/Display';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

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

    const subPercentValue = (percent: string) => {
        const numericString = GetCurrencyValue().replace(/[^\d.]/g, '');
        const currencyValue = parseFloat(numericString);
        const totalCalc =
            currencyValue - currencyValue * (Number(percent) / 100);

        const displayString = totalCalc
            .toFixed(2)
            .toString()
            .replace(/[.,\s]/g, '');
        setDisplayNumber([...displayString]);
    };

    const sumPercentValue = (percent: string) => {
        const numericString = GetCurrencyValue().replace(/[^\d.]/g, '');
        const currencyValue = parseFloat(numericString);
        const totalCalc =
            currencyValue + currencyValue * (Number(percent) / 100);

        const displayString = totalCalc
            .toFixed(2)
            .toString()
            .replace(/[.,\s]/g, '');
        setDisplayNumber([...displayString]);
    };

    const removeLastDigit = () => {
        const copyArr = [...displayNumber];
        copyArr.splice(-1);
        setDisplayNumber(copyArr);
    };

    return (
        <SafeAreaView
            style={styles.safeAreaView}
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
                        subPercentValue={subPercentValue}
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

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#DDDDDD',
        flex:1
    }
});

export default App;
