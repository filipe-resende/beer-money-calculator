import PercentKeyboard from './Percent';
import NumericKeyboard from './Numeric';
import { View } from 'react-native';
import OperationsKeyboard from './Operation';

interface KeyboardProps {
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
    removeAllDigits: () => void;
    percentCalc: (percent: string, isSub: boolean) => void;
}

const Keyboards = ({
    setSelectedValue,
    removeLastDigit,
    removeAllDigits,
    percentCalc
}: KeyboardProps) => {
    return (
        <View>
            <PercentKeyboard
                percentCalc={percentCalc}
                keyboards={['5', '10', '15', '20']}
            />
            <View
                style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'nowrap'
                }}
            >
                <NumericKeyboard
                    values={['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']}
                    setSelectedValue={setSelectedValue}
                    removeLastDigit={removeLastDigit}
                    removeAllDigits={removeAllDigits}
                />
            </View>
        </View>
    );
};
export default Keyboards;
