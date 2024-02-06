import { Button } from "react-bootstrap";
import { ReactComponent as BankTransferIcon } from '../../assets/svg/bank-transfer.svg';

interface BankTransferButtonParams {
    onSelected: () => void;
}

export function BankTransferButton({ onSelected }: BankTransferButtonParams) {
    return (
        <Button
            className='payment-method'
            onClick={() => onSelected()}
        >
            <BankTransferIcon></BankTransferIcon>
        </Button>
    );
}

