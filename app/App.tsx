import React,{useState} from 'react';import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import KeyboardPainel from './NumbersKeyboard';
import Display from './Display';


function App(): JSX.Element {

  const [displayNumber, setDisplayNumber] = useState(['']);

  const setSelectedValue = (message:string) => {
    setDisplayNumber([...displayNumber, message]);
  };

  return (
  <SafeAreaView style={{
      backgroundColor: '#DDDDDD',
    }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Display values={displayNumber} />
        </View>
        <View>
          {/* <KeyboardPainel setSelectedValue={setSelectedValue}/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
