import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-bootstrap';

export function PurchaseDetails() {
    const form = useRef<HTMLFormElement>(null);

    const sendTestMail = () => {

        console.log("Hello?");

        const paramA = "paramA";
        const paramB = "paramB";
        const paramC = "paramC";

        emailjs.send(
            "service_b75c7mf",
            "template_cpuwrrq",
            {
                param_a: paramA,
                param_b: paramB,
                paramC: paramC,
            },
            "E_UkF_2jrxNy73-y6"
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!form.current) {
            return;
        }

        emailjs.sendForm(
            "service_b75c7mf",
            'template_ccf6ccw',
            form.current,
            'E_UkF_2jrxNy73-y6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <>
            <div>
                <Button
                    onClick={() => sendTestMail()}
                >Send Test Mail</Button>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
}