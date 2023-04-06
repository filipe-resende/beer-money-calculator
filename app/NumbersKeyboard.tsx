import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

interface KeyboardProps{
  setSelectedValue: (value: string) => void;
};

const KeyboardPainel = ({setSelectedValue}: KeyboardProps) => {
  return (
    <NumericKeyboard
      values={[
        '7',
        '8',
        '9',
        '4',
        '5',
        '6',
        '1',
        '2',
        '3',
        '0',
        '00',
        '.',
      ]}
       setSelectedValue={setSelectedValue}>
    </NumericKeyboard>
  );
};

interface PreviewLayoutProps {
  values: string[];
  setSelectedValue: (value: string) => void;
  children?: React.ReactNode;
};

const NumericKeyboard = ({
  values,
  setSelectedValue
}: PreviewLayoutProps) => (
  <View style={styles.view}>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={styles.button}>
            <Neomorph
            swapShadows
            style={styles.neomorph}
          >
          <Text style={styles.text}>
            {value}
          </Text>
          </Neomorph>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  view:{
    paddingStart: 30,
    paddingEnd: 30, 
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingStart: 20,
    paddingEnd: 20,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 20,
    minWidth: '30%',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color:"#FFF"
  },
  neomorph:{
    shadowRadius: 2,
    borderRadius: 180,
    backgroundColor: '#DDDDDD',
    width: 60,
    height: 30,
  }
});

export default KeyboardPainel;