import PercentKeyboard from './Percent';
import NumericKeyboard from './Numeric';

interface KeyboardProps {
    setSelectedValue: (value: string) => void;
    removeLastDigit: () => void;
}

const Keyboards = ({ setSelectedValue, removeLastDigit }: KeyboardProps) => {
    return (
        <>
            <PercentKeyboard values={['10%', '15%', '20%']} />
            <NumericKeyboard
                values={['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']}
                setSelectedValue={setSelectedValue}
                removeLastDigit={removeLastDigit}
            />
        </>
    );
};
export default Keyboards;
