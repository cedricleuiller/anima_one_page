import React from 'react'
import {Link} from 'react-scroll'
function Welcome2() {
    return (
        <section>
            <div className="block color-scheme-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-sub-title center">
                                <article className="section-title-body white">
                                <h1 className="head-title">We care about our all <span>clients</span> and can make their <span>life</span> more easier !</h1>
                                        <p className="head-text">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <Link to='portfolio' className="btn-default white btn-move" smooth={false} duration={800}>Portfolio</Link>&nbsp;
                                        <Link to='contact' className="btn-default active btn-move t1" smooth={false} duration={800}>Contact</Link>
                                </article>
                            </div>   
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Welcome2
