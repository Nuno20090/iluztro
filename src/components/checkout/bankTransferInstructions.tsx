
export function BankTransferInstructions() {
    return <div
        className='payment-instruction'>
        <h3>Bank Transfer</h3>
        <div>Make a bank transfer to the following account:</div>
        <div>IBAN: PT50 0000 0000 0000 0000 0000 000</div>
        <div>Account holder: Brigida Vicente</div>
        <div
            className='payment-final-instruction'>
            After making the transfer click 'Finalize purchase'
        </div>
    </div>
}