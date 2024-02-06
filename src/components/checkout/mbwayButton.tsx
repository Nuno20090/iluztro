import { Button } from "react-bootstrap";
import { ReactComponent as MbWayIcon } from '../../assets/svg/mbway.svg';

interface MBWayButtonParams {
    onSelected: () => void;
}

export function MBWayButton({ onSelected }: MBWayButtonParams) {
    return (
        <Button
            className='payment-method'
            onClick={() => onSelected()}
        >
            <MbWayIcon></MbWayIcon>
        </Button>
    );
}


