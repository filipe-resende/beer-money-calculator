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
            <View style={styles.viewText}>
              <Text style={styles.text}>
              {value}
              </Text>
            </View>
          </Neomorph>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  view:{
    paddingStart: "20%",
    paddingEnd: "15%", 
    flex: 1
  },
  viewText:{
    flex:1,
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingStart: '3%',
    paddingEnd: '3%',
    marginHorizontal: '1%',
    marginTop: '1%',
    marginBottom: '2%',
    textAlign: 'center',
    justifyContent:"center",
  },
  text: {
    color: 'oldlace',
    textAlign: 'center',
    alignItems:"center",
    fontSize:32
  },
  neomorph:{
    shadowRadius: 3,
    borderRadius: 100,
    backgroundColor: '#DDDDDD',
    width: 60,
    height: 60,
  }
});

export default KeyboardPainel;