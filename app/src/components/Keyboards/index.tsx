import PercentKeyboard from './Percent';
import NumericKeyboard from './Numeric';

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
        <>
            <PercentKeyboard
                percentCalc={percentCalc}
                keyboards={['5', '10', '15', '20']}
            />
            <NumericKeyboard
                values={['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']}
                setSelectedValue={setSelectedValue}
                removeLastDigit={removeLastDigit}
                removeAllDigits={removeAllDigits}
            />
        </>
    );
};
export default Keyboards;
