import React, {useState} from 'react'
import {Link} from 'react-scroll'
import logo from './../../images/logo-big-shop.png'

function Navbar3() {
    const [navToggle, setnavToggle] = useState(true);

    return (
        <>

            <nav className="navbar navbar-default  navbar-expand-md">
                <div className="navbar-header">
                <Link to='home'  className="header-logo"  smooth={false} duration={800}>
                                    <span></span>
                                    <img src={logo} alt="logo"/>
                                </Link>
                                <button onClick={()=>setnavToggle(!navToggle)} type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#bs-example-navbar-collapse-1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                
                </div>
                <div className={navToggle?'collapse navbar-collapse':'collapse navbar-collapse show'}  id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav  navbar-right menu-item-5" id="navbar-full">
                        <li className="current home"><span className="bg-icon">1</span><span className="rotated-title effect">Home</span><Link to='home' className="link-item " smooth={false} duration={800} activeClass="active">Home</Link></li>
                        <li className="about"><span className="bg-icon">2</span><span className="rotated-title effect">About</span><Link to='about' className="link-item" smooth={false} duration={800} activeClass="active">About</Link></li>                                            
                        <li className="service"><span className="bg-icon">3</span><span className="rotated-title effect">Services</span><Link to='services' className="link-item" smooth={false} duration={800} activeClass="active">Service</Link></li>
                        <li className="work"><span className="bg-icon">4</span><span className="rotated-title effect">Works</span><Link to='portfolio' className="link-item" smooth={false} duration={800} activeClass="active">Works</Link></li>
                        <li className="contact"><span className="bg-icon">5</span><span className="rotated-title effect">Contact</span><Link to='contact' className="link-item" smooth={false} duration={800} activeClass="active">Contact</Link></li>
                    </ul>
                </div>
            </nav> 
        </>
    )
}

export default Navbar3
