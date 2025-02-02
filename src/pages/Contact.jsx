import { useState } from "react";
import { validateEmail } from '../utils/helpers.js';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
        setEmail(inputValue);
        } else if (inputType === 'name') {
        setName(inputValue);
        } else {
        setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        alert(`Thankyou ${name}. Your message has been sent.`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <>
        <div>
            <h1>Contact Page</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                value={email}
                name="Email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />

                <input
                value={name}
                name="Name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                />

                <input
                value={message}
                name="Message"
                onChange={handleInputChange}
                type="message"
                placeholder="message"
                />

                <button type="submit">Submit</button>
            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        </>
    );
};

export default Contact;