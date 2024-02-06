import { Form } from "react-bootstrap";
import { BuyerLocation } from "../../library/order";

interface PurchaseFormParams {
    buyerName: string;
    setBuyerName: (name: string) => void;
    buyerMail: string;
    setBuyerMail: (mail: string) => void;
    buyerLocation: BuyerLocation;
    setBuyerLocation: (location: BuyerLocation) => void;
    buyerAddress: string;
    setBuyerAddress: (address: string) => void;
    buyerInstructions: string;
    setBuyerInstructions: (instructions: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    validated: boolean;
}

export function PurchaseForm({
    buyerName,
    setBuyerName,
    buyerMail,
    setBuyerMail,
    buyerLocation,
    setBuyerLocation,
    buyerAddress,
    setBuyerAddress,
    buyerInstructions,
    setBuyerInstructions,
    handleSubmit,
    validated
}: PurchaseFormParams) {

    return <Form
        id="purchaseForm"
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
                as="select"
                value={buyerLocation}
                onChange={(event) => setBuyerLocation(event.target.value as BuyerLocation)}
                style={{ marginBottom: '1rem' }}
                required
            >
                <option value="Portugal">Portugal</option>
                <option value="Other">Other</option>
            </Form.Control>

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
    </Form>
}