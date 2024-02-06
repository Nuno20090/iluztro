
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function ThankYouPage() {

    const Navigate = useNavigate();

    return (
        <Container
            style={{ maxWidth: "30rem" }}>
            <div
                style={{
                    marginBlock: '4rem'
                }}>
                <h1>Thank you for your purchase!</h1>
                <div
                    style={{
                        marginBlock: '2rem'
                    }}>
                    <p>Your order is being processed and will be shipped soon.</p>
                    <p>If you have any questions, feel free to contact us at <a href="mailto:iluztro@gmail.com">iluztro@gmail.com</a>.</p>

                </div>
            </div>

            <Button
                variant={'outline-primary'}
                onClick={() => {
                    Navigate('/');
                }}
                className="larger-text"
                style={{
                    width: "100%",
                    border: "1px solid black"
                }}
            >
                Go to Home page
            </Button>
        </Container>
    );
}
