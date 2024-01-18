import React, {useState} from 'react'
import Modal from  'react-modal'
Modal.setAppElement('#root')
function NewsletterForm() {
    const [NewsEmail, setNewsEmail] = useState('');
    const [NewsEmailError, setNewsEmailError] = useState({});
    const [ModalIsOpen, setModalIsOpen] = useState(false);

    const doNewsSubmit=(e) =>{
        e.preventDefault();
        const isNewsValid = newsletterValidate();
        if (isNewsValid){

            //    ------   ready ---------
           
            setModalIsOpen(true);
           // alert("Thanks you.")

            //    -----------------------
        }
        }
    const newsletterValidate = () =>{
        const NewsEmailError = {};
        let isNewsValid = true;
        if (NewsEmail.trim().length < 1){
            NewsEmailError.errText = "*Email Field Required"; 
            isNewsValid = false;
            setNewsEmailError(NewsEmailError);
            return isNewsValid;
        }
        if (!NewsEmail.includes('@') || !NewsEmail.includes('.')){
            
            NewsEmailError.errText1 = "*Invalid Email Field"; 
            isNewsValid = false;
        }
        setNewsEmailError(NewsEmailError);
        return isNewsValid;
     }
    return (
        <>
        <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)} className="popup-send">
            <div className="block-popup">
            <h4>Thank you.</h4>
                <h4>{NewsEmail}</h4>
                <h4>is added</h4>
            </div>
            <span onClick={()=>setModalIsOpen(false)} className="close-btn"></span>
        </Modal>
                                <div id="newsletter-form-wrapper">
                                    <div id="newsletter-form-inner">
                                        <div id="NewsletterErrResults"></div>
                                        <div id="NewsletterResult"></div>
                                        <div id="NewsletterContent">
                                            <form id="MyNewsletter" name="MyNewsletter" className="text-center" method="post" onSubmit={doNewsSubmit}>
                                                <p>
                                                    <input type="text" name="email" id="newsletteremail" placeholder="Your Email" value={NewsEmail} onChange={(e)=>setNewsEmail(e.target.value)}/>
                                                    <label htmlFor="email" id="newsletteremailLb">
                                                        <span className="newslettererror error">{NewsEmailError.errText1}</span>
                                                        <span className="newslettererror error error1">{NewsEmailError.errText}</span> 
                                                    </label> 
                                                </p>

                                                <div className="clearfix"></div>
                                                <input type="submit" className="newsletter-btn btn-default white btn-move" value = "Newsletter"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>    
        </>
    )
}

export default NewsletterForm
