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

        // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            alert(`Email is invalid`);
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        window.location.href = `mailto:christopher.makousky@(download resume for details)?subject=Communique from ${name} (${email})&body=${message}`;

        alert(`Thank you ${name}.`);

        // If everything goes according to plan, clear out the input fields and the error message.
        setName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');
    };

    return (
        <>
            <section className="container text-center">
                <h1>Contact Page</h1>
                <form className="form" onSubmit={handleFormSubmit}>
                    <input
                        required={true}
                        onMouseLeave={() => {if (name === '') setErrorMessage(`The Name field is required!`)}}
                        className="form-text"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />

                    <input
                        required={true}
                        onMouseLeave={() => {if (email === '') setErrorMessage(`The Email field is required!`)}}
                        className="form-text"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />

                    <textarea
                        required={true}
                        onMouseLeave={() => {if (message === '') setErrorMessage(`The Message field is required!`)}}
                        id="message-area"
                        className="form-text"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="message"
                        placeholder="Message"
                    />

                    <button id="submit-button" type="submit">Submit</button>
                </form>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </section>
        </>
    );
};

export default Contact;