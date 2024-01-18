import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function PortfolioBlockModal({portfolioKey, portfolioTitle, portfolioInfo, portfolioSrc, portfolioCat} ) {
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)} className="popup-content light">
                <div className="block-popup">
                    <div className="">
                        <div className="row gx-5 d-flex align-items-center">
                            <div className="col-md-6">
                                <img alt="" src={portfolioSrc} className="img-fluid image"/>
                            </div>
                            <div className="col-md-6">
                                <h4>{portfolioTitle}</h4>
                                <p> Category: <span>{portfolioCat}</span></p>
                                
                                <p>{portfolioInfo}</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <span onClick={()=>setModalIsOpen(false)} className="close-btn"></span>
            </Modal>
            <div className="col-md-6 col-lg-4"  key={portfolioKey}>
                <div className="portfolio-block dark">
                    <span  className="modal-link"  onClick={()=>setModalIsOpen(true)}>
                        <img alt="" className="img-fluid" src={portfolioSrc}/>
                    </span>
                    <div className="portfolio-content">
                        <p>{portfolioCat}</p>
                        <h4 className="modal-link" onClick={()=>setModalIsOpen(true)}>{portfolioTitle}</h4>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default PortfolioBlockModal
