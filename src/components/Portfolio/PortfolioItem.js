import React, { useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function PortfolioItem({ videoTitle, videoDesc, videoSrc }) {
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <Modal isOpen={ModalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="popup-content">
                <div className="block-popup">
                    <div className="">
                        <div className="row gx-5 d-flex align-items-center">
                            <div className="col-md-6">
                                {/* <img alt="" src={portfolioSrc} className="img-fluid image"/> */}
                                <video controls className='img-fluid image' loop muted>
                                    <source src={videoSrc} type='video/mp4' />
                                    Votre navigateur ne prend pas en compte les vidéos HTML5.
                                </video>
                            </div>
                            <div className="col-md-6">
                                <h4>{videoTitle}</h4>
                                <p><span>{videoDesc}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <span onClick={() => setModalIsOpen(false)} className="close-btn"></span>
            </Modal>
            <div className="portfolio-cell">
                <div className="portfolio-item">
                    <div className="image-overlay">
                        <span onClick={() => setModalIsOpen(true)} className="link">&nbsp;</span>
                        <div className="image-overlay-content">
                            <h4>{videoTitle}</h4>
                            <p>{videoDesc}</p>
                        </div>
                    </div>
                    <video controls className='img-fluid image' loop muted>
                        <source src={videoSrc} type='video/mp4' />
                        Votre navigateur ne prend pas en compte les vidéos HTML5.
                    </video>
                    {/* <img src={portfolioSrc} alt={portfolioAlt} className="img-responsive"/> */}
                </div>
            </div>
        </>
    )
}

export default PortfolioItem