import PercentKeyboard from './Percent';
import NumericKeyboard from './Numeric';
import { View } from 'react-native';
import People from '../People';
interface KeyboardProps {
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
    removeAllDigits: () => void;
    percentCalc: (percent: string, isSub: boolean) => void;
    addPeopleCount: () => void;
    removePeopleCount: () => void;
    divideAccountBetweenPeople: () => void;
    peopleCount: number;
}

const Keyboards = ({
    setSelectedValue,
    removeLastDigit,
    removeAllDigits,
    percentCalc,
    addPeopleCount,
    removePeopleCount,
    divideAccountBetweenPeople,
    peopleCount
}: KeyboardProps) => {
    return (
        <View>
            <PercentKeyboard
                percentCalc={percentCalc}
                keyboards={['5', '10', '15', '20']}
            />
            <People
                divideAccountBetweenPeople={divideAccountBetweenPeople}
                addPeopleCount={addPeopleCount}
                removePeopleCount={removePeopleCount}
                peopleCount={peopleCount}
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
