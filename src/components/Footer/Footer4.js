import React from 'react';
import logo from '../../images/Base-logo-blanc-400w-250h.png'

function Footer4() {
    return (
        <>
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <article className="footer-info-block">
                            <div className="section-sub-title">
                                <article className="section-title-body white">
                                    <h4 className="head-title">En résumé</h4>
                                </article>
                            </div>
                            <p>DJ C-One passionné de la musique est toujours prêt à transformer n'importe quelle occasion en une expérience sonore mémorable.</p>
                            <p>
                                Investi et garant d'une satisfaction client, chaque événement est organisé et préparé avec passion pour émerveiller vos soirées ! Les joies, les sourires et les remerciements des clients sont les meilleurs retours !
                            </p>
                        </article>
                    </div>        
                </div>
                <div className="footer-bottom">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="footer-logo text-center">
                                <img src={logo} alt="logo"/>
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
