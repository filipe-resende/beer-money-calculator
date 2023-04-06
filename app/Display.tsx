import { StyleSheet, Text } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import React from 'react';

interface DisplayProps {
  values: string[];
}

const Display = ({values} : DisplayProps) => {

  return (
    <Neomorph
    inner 
    swapShadows 
    style={styles.neomorph}>
      <Text style={styles.text}>
        {values}
      </Text>
    </Neomorph>
  );
};

const styles = StyleSheet.create({
  neomorph:{
    shadowRadius: 10,
    borderRadius: 40,
    backgroundColor: '#DDDDDD',
    width: 330,
    height: 125,
    marginBottom:25,
    marginTop:25,
    marginLeft:25,
    marginRight:25
  },
  text:{
    color:'#FFF'
  }
});

export default Display;