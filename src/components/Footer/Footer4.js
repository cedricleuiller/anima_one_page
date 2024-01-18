import React from 'react';
import {FacebookShareButton,
        PinterestShareButton,
        TelegramShareButton,
        LinkedinShareButton,
        TwitterShareButton} from "react-share";
import {FacebookIcon,
        PinterestIcon,
        TelegramIcon,
        LinkedinIcon,
        TwitterIcon} from "react-share";

function Footer4() {
    return (
        <>
        <footer id="footer">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                        <article className="footer-info-block">
                            <ul className="list-unstyled flickr">
                                <li><a href="/"><img src="img/preview/blog1.jpg" className="img-fluid" alt=""/></a></li>
                                <li><a href="/"><img src="img/preview/blog2.jpg" className="img-fluid" alt=""/></a></li>
                                <li><a href="/"><img src="img/preview/blog5.jpg" className="img-fluid" alt=""/></a></li>
                                <li><a href="/"><img src="img/preview/blog3.jpg" className="img-fluid" alt=""/></a></li>
                                <li><a href="/"><img src="img/preview/blog4.jpg" className="img-fluid" alt=""/></a></li>
                                <li><a href="/"><img src="img/preview/blog6.jpg" className="img-fluid" alt=""/></a></li>
                                <li><a href="/"><img src="img/preview/blog8.jpg" className="img-fluid" alt=""/></a></li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <article className="footer-info-block">
                            <div className="section-sub-title">
                                <article className="section-title-body white">
                                    <h4 className="head-title">INFORMATION</h4>
                                </article>
                            </div>
                            <p>The <a href="/"> Anema</a>  is a unique and modern one page multipurpose template that is suitable for All. The Unique Style is getting more popular, so show yourself from the best side!</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>        
                </div>
                <div className="footer-bottom">
                    <div className="row">

                        <div className="col-md-8 order-1 col-xs-12 col-sm-8">
                        <ul className="footer-icon list-unstyled">
                                <li>
                                    <FacebookShareButton url="https://youtu.be/3aSb1WPK4Kg" 
                                    quote= "Anema" hashtag="#anema">
                                        <FacebookIcon round={true} size={32}></FacebookIcon>
                                    </FacebookShareButton>
                                    
                                </li>
                                <li>
                                    <PinterestShareButton url="https://youtu.be/3aSb1WPK4Kg" media="https://youtu.be/3aSb1WPK4Kg">
                                        <PinterestIcon round={true} size={32}></PinterestIcon>
                                    </PinterestShareButton>    
                                </li>  
                                <li>
                                    <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg" >
                                        <LinkedinIcon round={true} size={32}></LinkedinIcon>
                                    </LinkedinShareButton>    
                                </li>
                                <li>
                                    <TwitterShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                        <TwitterIcon round={true} size={32}></TwitterIcon>
                                    </TwitterShareButton>    
                                </li>
                                <li>
                                    <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                        <TelegramIcon round={true} size={32}></TelegramIcon>
                                    </TelegramShareButton>    
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="footer-logo">
                                <img src="img/logo-big-shop1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
        </>
    )
}

export default Footer4
