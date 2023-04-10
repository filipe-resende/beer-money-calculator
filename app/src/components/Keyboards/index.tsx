import PercentKeyboard from './percent';
import NumericKeyboard from './numeric';

interface KeyboardProps {
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
    sumPercentValue: (value: string) => void;
    subPercentValue: (value: string) => void;
}

const Keyboards = ({
    setSelectedValue,
    removeLastDigit,
    sumPercentValue,
    subPercentValue
}: KeyboardProps) => {
    return (
        <>
            <PercentKeyboard
                sumPercentValue={sumPercentValue}
                subPercentValue={subPercentValue}
                keyboards={['5', '10', '15', '20']}
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
