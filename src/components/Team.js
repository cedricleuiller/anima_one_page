import React from 'react'
import { Partners } from './Partners'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'

function Team() {

    return (
        <>
            <section>
                <div className="block color-scheme-2">
                    <div className="container">
                        <div className="section-sub-title center">
                            <article className="section-title-body white">
                                <h1 className="head-title">Mon équipe / Partenaires</h1>
                            </article>
                        </div>
                        <div className="row justify-content-center justify-content-around">
                            {
                                Partners.map((partner) => (
                                    <div key={partner.id} className="col-lg-3 col-md-6 col-sm-12">
                                        <article className="author-block" >
                                            <figure className="figure-hover-overlay">
                                                <img className="img-fluid" src={partner.picture} alt="" title="" />

                                                <div className="author-information">
                                                    <h4>{partner.name}</h4>
                                                    <p className="author-prof">{partner.job}</p>
                                                    <a href={partner.website}>{partner.website}</a>
                                                </div>

                                            </figure>
                                            <div className="left-icon">
                                                <ul className="author-icon list-unstyled">
                                                    <li>
                                                        <a href={partner.instagram} target='_blank' rel="noopener noreferrer"><InstagramIcon fontSize='large'/></a>
                                                        <a href={partner.website} target='_blank' rel="noopener noreferrer"><LanguageIcon fontSize='large'/></a>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {/* <div className="col-lg-3 col-md-6 col-sm-12">
                            <article className="author-block">
                                <figure className="figure-hover-overlay">
                                    <img className="img-fluid" src="img/preview/team1.jpg" alt="" title=""/>

                                    <div className="author-information">
                                        <h4>Lucy Fletcher</h4>
                                        <p className="author-prof">Co Founder & CEO</p>
                                        
                                    </div>

                                </figure>
                                <div className="left-icon">
                                    <ul className="author-icon list-unstyled">
                                        <li>
                                            <FacebookShareButton url="https://youtu.be/3aSb1WPK4Kg" 
                                            quote= "Anema react" hashtag="#react">
                                                <FacebookIcon round={false} size={36}></FacebookIcon>
                                            </FacebookShareButton>
                                        </li>
                                        <li>
                                            <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TelegramIcon round={false} size={36}></TelegramIcon>
                                            </TelegramShareButton>
                                        </li>
                                        <li>
                                            <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg" >
                                                <LinkedinIcon round={false} size={36}></LinkedinIcon>
                                            </LinkedinShareButton> 
                                        </li>
                                        <li>
                                            <TwitterShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TwitterIcon round={false} size={36}></TwitterIcon>
                                            </TwitterShareButton>
                                        </li>
                                    </ul>    
                                </div>
                            </article> 
                        </div> */}
                            {/* <div className="col-lg-3 col-md-6 col-sm-12">
                            <article className="author-block">
                                <figure className="figure-hover-overlay">
                                    <img className="img-fluid" src="img/preview/team2.jpg" alt="" title=""/>

                                    <div className="author-information">
                                        <p className="author-prof">Manager</p>
                                        <h4>Braun Carter</h4>
                                        
                                    </div>

                                </figure>
                                <div className="left-icon">
                                <ul className="author-icon list-unstyled">
                                        <li>
                                            <FacebookShareButton url="https://youtu.be/3aSb1WPK4Kg" 
                                            quote= "Anema react" hashtag="#react">
                                                <FacebookIcon round={false} size={36}></FacebookIcon>
                                            </FacebookShareButton>
                                        </li>
                                        <li>
                                            <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TelegramIcon round={false} size={36}></TelegramIcon>
                                            </TelegramShareButton>
                                        </li>
                                        <li>
                                            <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg" >
                                                <LinkedinIcon round={false} size={36}></LinkedinIcon>
                                            </LinkedinShareButton> 
                                        </li>
                                        <li>
                                            <TwitterShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TwitterIcon round={false} size={36}></TwitterIcon>
                                            </TwitterShareButton>
                                        </li>
                                    </ul>    
                                </div>
                            </article> 
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <article className="author-block">
                                <figure className="figure-hover-overlay">
                                    <img className="img-fluid" src="img/preview/team3.jpg" alt="" title=""/>

                                    <div className="author-information">
                                        <p className="author-prof">Designer</p>
                                        <h4>Suzi Entani</h4>
                                        
                                    </div>

                                </figure>
                                <div className="left-icon">
                                <ul className="author-icon list-unstyled">
                                        <li>
                                            <FacebookShareButton url="https://youtu.be/3aSb1WPK4Kg" 
                                            quote= "Anema react" hashtag="#react">
                                                <FacebookIcon round={false} size={36}></FacebookIcon>
                                            </FacebookShareButton>
                                        </li>
                                        <li>
                                            <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TelegramIcon round={false} size={36}></TelegramIcon>
                                            </TelegramShareButton>
                                        </li>
                                        <li>
                                            <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg" >
                                                <LinkedinIcon round={false} size={36}></LinkedinIcon>
                                            </LinkedinShareButton> 
                                        </li>
                                        <li>
                                            <TwitterShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TwitterIcon round={false} size={36}></TwitterIcon>
                                            </TwitterShareButton>
                                        </li>
                                    </ul>    
                                </div>
                            </article> 
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <article className="author-block">
                                <figure className="figure-hover-overlay">
                                    <img className="img-fluid" src="img/preview/team4.jpg" alt="" title=""/>

                                    <div className="author-information">
                                        <p className="author-prof">Developer</p>
                                        <h4>Jimmy Kllay</h4>
                                        
                                    </div>

                                </figure>
                                <div className="left-icon">
                                <ul className="author-icon list-unstyled">
                                        <li>
                                            <FacebookShareButton url="https://youtu.be/3aSb1WPK4Kg" 
                                            quote= "Anema react" hashtag="#react">
                                                <FacebookIcon round={false} size={36}></FacebookIcon>
                                            </FacebookShareButton>
                                        </li>
                                        <li>
                                            <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                                                <TelegramIcon round={false} size={36}></TelegramIcon>
                                            </TelegramShareButton>
                                        </li>
                                        <li>
                                            <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg" >
                                                <LinkedinIcon round={false} size={36}></LinkedinIcon>
                                            </LinkedinShareButton> 
                                        </li>
                                        <li>
                                        <PinterestShareButton url="https://youtu.be/3aSb1WPK4Kg" media="https://youtu.be/3aSb1WPK4Kg">
                                            <PinterestIcon round={false} size={36}></PinterestIcon>
                                        </PinterestShareButton>
                                        </li>
                                    </ul>   
                                </div>
                            </article> 
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
