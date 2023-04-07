import PercentKeyboard from './Percent';
import NumericKeyboard from './Numeric';

interface KeyboardProps {
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
    sumPercentValue: (value: string) => void;
}

const Keyboards = ({
    setSelectedValue,
    removeLastDigit,
    sumPercentValue
}: KeyboardProps) => {
    return (
        <>
            <PercentKeyboard
                sumPercentValue={sumPercentValue}
                values={['5', '10', '15', '20']}
            />
            <NumericKeyboard
                values={['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']}
                setSelectedValue={setSelectedValue}
                removeLastDigit={removeLastDigit}
            />
        </>
    );
};
export default Keyboards;
