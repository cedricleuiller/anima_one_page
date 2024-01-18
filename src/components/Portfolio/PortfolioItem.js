import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function PortfolioItem({portfolioUrl, portfolioTitle, portfolioInfo, portfolioSrc, portfolioAlt} ) {
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)} className="popup-content">
                <div className="block-popup">
                    <div className="">
                        <div className="row gx-5 d-flex align-items-center">
                            <div className="col-md-6">
                                <img alt="" src={portfolioSrc} className="img-fluid image"/>
                            </div>
                            <div className="col-md-6">
                                <h4>{portfolioTitle}</h4>
                                <p><span>{portfolioInfo}</span></p>
                                
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <span onClick={()=>setModalIsOpen(false)} className="close-btn"></span>
            </Modal>
            <div className="portfolio-cell">
                <div className="portfolio-item">
                    <div className="image-overlay">
                        <span onClick={()=>setModalIsOpen(true)} className="link">&nbsp;</span>
                        <div className="image-overlay-content">
                            <h4>{portfolioTitle}</h4>
                            <p>{portfolioInfo}</p>
                        </div>
                    </div>
                    <img src={portfolioSrc} alt={portfolioAlt} className="img-responsive"/>
                </div>
            </div>  
        </>
    )
}

export default PortfolioItem
