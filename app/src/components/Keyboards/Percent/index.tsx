import { Neomorph } from 'react-native-neomorph-shadows';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface EqualsKeyboardProps {
  values: string[];
  children?: React.ReactNode;
};

const PercentsKeyboard = ({values} : EqualsKeyboardProps) => {
  return (
  <View style={styles.view}>
  <View style={styles.row}>
    {values.map(value => (
      <TouchableOpacity 
        key={value}
        onPress={() => console.log(value)}
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
)};

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
export default PercentsKeyboard