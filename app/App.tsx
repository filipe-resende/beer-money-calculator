import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Keyboards from './src/components/Keyboards';
import Display from './src/components/Display';

function App(): JSX.Element {
    const [displayNumber, setDisplayNumber] = useState(['']);

    const setSelectedValue = (message: string) => {
        setDisplayNumber([...displayNumber, message]);
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
                    <Display values={displayNumber} />
                </View>
                <View>
                    <Keyboards setSelectedValue={setSelectedValue} removeLastDigit={removeLastDigit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
