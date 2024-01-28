import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form } from 'react-bootstrap';
import { ReactComponent as MbWayIcon } from '../../assets/svg/mbway.svg';
import { ReactComponent as BankTransferIcon } from '../../assets/svg/bank-transfer.svg';

export function PurchaseDetails() {

    const [buyerName, setBuyerName] = useState<string>("");
    const [buyerMail, setBuyerMail] = useState<string>("");
    const [buyerAddress, setBuyerAddress] = useState<string>("");
    const [buyerInstructions, setBuyerInstructions] = useState<string>("");

    const [paymentMethod, setPaymentMethod] = useState<"BT" | "MbWay" | undefined>();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        event.stopPropagation();

        setValidated(true);
    };

    const sendTestMail = async () => {

        const paramA = "paramA";
        const paramB = "paramB";
        const paramC = "paramC";

        const result = await emailjs.send(
            "service_b75c7mf",
            "template_cpuwrrq",
            {
                param_a: paramA,
                param_b: paramB,
                paramC: paramC,
            },
            "E_UkF_2jrxNy73-y6"
        );

        console.log(result.status + " : " + result.text);
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}>

            <div
                style={{
                    minWidth: '300px',
                    maxWidth: '600px',
                    width: '100%',
                }}
            >
                <h3>Your Details</h3>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    style={{
                        textAlign: 'left',
                    }}
                >
                    <Form.Group
                        className="mb-3"
                        controlId="buyerName"
                    >
                        <Form.Label
                            size="lg"
                        >
                            Name
                        </Form.Label>

                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder=""
                            value={buyerName}
                            onChange={(event) => setBuyerName(event.target.value)}
                            required
                        />

                        <Form.Control.Feedback
                            type="invalid">
                            Please provide a name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="buyerMail"
                    >
                        <Form.Label
                            size="lg"
                        >
                            Mail
                        </Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder=""
                            value={buyerMail}
                            onChange={(event) => setBuyerMail(event.target.value)}
                            required
                        />
                        <Form.Control.Feedback
                            type="invalid"
                        >
                            Please provide your mail just in case we need to contact you
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="buyerAddress"
                    >
                        <Form.Label
                            size="lg"
                        >
                            Delivery address
                        </Form.Label>
                        <Form.Control
                            size="lg"
                            as="textarea"
                            rows={5}
                            value={buyerAddress}
                            onChange={(event) => setBuyerAddress(event.target.value)}
                            required
                        />

                        <Form.Control.Feedback
                            type="invalid"
                        >
                            Please provide your the delivery address
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="buyerInstructions"
                    >
                        <Form.Label
                            size="lg"
                        >
                            Special instructions (optional)
                        </Form.Label>

                        <Form.Control
                            size="lg"
                            as="textarea"
                            rows={3}
                            value={buyerInstructions}
                            onChange={(event) => setBuyerInstructions(event.target.value)}
                        />
                    </Form.Group>

                    <Button
                        type="submit">
                        Submit form
                    </Button>
                </Form >

                <h3>Payment</h3>

                <div>
                    <div
                        className="payment-methods"
                    >
                        <Button
                            className='payment-method bt'
                            onClick={() => setPaymentMethod("BT")}
                        >
                            <BankTransferIcon
                                className='bank-transfer'>
                            </BankTransferIcon>
                        </Button>

                        <Button
                            className='payment-method'
                            onClick={() => setPaymentMethod("MbWay")}
                        >
                            <MbWayIcon></MbWayIcon>
                        </Button>
                    </div>
                </div>

                {paymentMethod === "BT" &&
                    <div
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
                {paymentMethod === "MbWay" &&
                    <div
                        className='payment-instruction'>
                        <h3>MB Way</h3>
                        <div>Make a transfer to the following MB Way account:</div>
                        <div>934 680 592</div>
                        <div
                            className='payment-final-instruction'>
                            After making the transfer click 'Finalize purchase'
                        </div>
                    </div>
                }

                {(paymentMethod === "BT" ||
                    paymentMethod === "MbWay") &&
                    <div>
                        <Button
                            className='finalize-purchase'
                            onClick={() => sendTestMail()}
                        >Finalize purchase</Button>

                    </div>
                }

            </div >
        </div >
    );
}