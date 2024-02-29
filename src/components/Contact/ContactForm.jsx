import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import emailjs, { init } from "@emailjs/browser"
import { MyRecaptcha } from '../ReCaptcha/Recaptcha';

Modal.setAppElement('#root')

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');

    const [nameError, setNameError] = useState({});
    const [emailError, setEmailError] = useState({});
    const [phoneError, setPhoneError] = useState({})
    const [textError, setTextError] = useState({});

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const form = useRef();
    const recaptchaRef = useRef();

    //Initialisation de la clé EmailJS
    init(process.env.REACT_APP_API_KEY_EMAILJS);


    const Validate = () => {
        const nameError = {};
        const emailError = {};
        const textError = {};
        let isValid = true;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const isValidEmail = (email) => {
            return emailRegex.test(email);
        };

        if (name.trim().length < 1) {

            nameError.errText = "*Nom Requis";
            isValid = false
        }
        if (email.trim().length < 1) {

            emailError.errText = "*Email Requis";
            isValid = false;
        }

        if (!isValidEmail(email)) {
            emailError.errText = "*Email Invalide"
            isValid = false
        }

        if (phone.trim().length > 0) {
            const cleanedPhone = phone.replace(/\s/g, "");
            if (isNaN(cleanedPhone) || cleanedPhone.length !== 10) {
                phoneError.errText = "*numéro invalide."
                isValid = false;
            }
        }
        if (text.trim().length < 1) {

            textError.errText = "*Message  Requis"
            isValid = false;
        }
        setNameError(nameError)
        setEmailError(emailError)
        setPhoneError(phoneError)
        setTextError(textError)
        return isValid
    }

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'C-One',
        from_phone: phone,
        message: text,
    }

    const doSubmit = (e) => {
        e.preventDefault();

        const captchaResolved = recaptchaRef.current.getValue();

        if (!captchaResolved) {
            alert("Veuillez cocher la case : 'Je ne suis pas un robot'.")
            return
        }

        const isValid = Validate();
        if (isValid) {

            setModalIsOpen(true);

            emailjs.send('service_5mfwx4h', 'DjContactFormId', templateParams).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setName('')
                    setEmail('')
                    setPhone('')
                    setText('')
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
        }
    }

    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="popup-send">
                <div className="block-popup">
                    <h4> {name},</h4>
                    <h4>Le mail a été envoyé avec succès</h4>
                    <h4>Merci.</h4>
                </div>
                <span onClick={() => setModalIsOpen(false)} className="close-btn"></span>
            </Modal>
            <div id="form-wrapper">
                <div id="form-inner">
                    <div id="MainResult"></div>
                    <div id="MainContent">
                        <form id="MyContactForm" name="MyContactForm" method="post" onSubmit={doSubmit} ref={form}>
                            <p className="name">
                                <input type="text" name="name" id="name" placeholder="Votre Nom*" value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="name" id="nameLb">
                                    <span className="error">{nameError.errText}</span>
                                </label>
                            </p>
                            <p>
                                <input type="text" name="email" id="email" placeholder="Votre Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email" id="emailLb">
                                    <span className="error error1">{emailError.errText}</span>
                                </label>
                            </p>
                            <p>
                                <input type="text" name="phone" id="phone" placeholder="Votre Téléphone (XX XX XX XX XX)" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label htmlFor="phone" id="phoneLb">
                                    <span className="error error1">{phoneError.errText}</span>
                                </label>
                            </p>
                            <p className="textarea">
                                <textarea name="message" id="message" placeholder="Votre Message: date de prestation, besoin spécifique ou autres demandes.*" rows="4" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                                <label htmlFor="message" id="messageLb">
                                    <span className="error">{textError.errText}</span>
                                </label>
                            </p>
                            <div className="clearfix"></div>
                            <div className="text-center">
                                <MyRecaptcha
                                    ref={recaptchaRef}
                                />
                                <br />
                                <input type="submit" className="contact-btn btn-move t2" value="Envoyer Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;