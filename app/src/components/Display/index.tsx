import { StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.view}>
        <Text style={styles.text}>
          {values}
        </Text>
      </View>
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
    marginRight:25,
    justifyContent:"center"
  },
  text:{
    color: 'oldlace',
    alignSelf: 'flex-end',
    fontSize:32,
    marginLeft:4,    
  },
  view:{
    marginLeft:15,
    marginRight:15
  }
});

export default Display;