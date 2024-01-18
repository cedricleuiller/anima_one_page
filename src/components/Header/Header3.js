import React, {useState} from 'react'
import Navbar3 from './../Navbar/Navbar3'
import {Link} from 'react-scroll'
function Header3() {
    const [fixHeader, setFixed] = useState(false);
    //let winHeight = window.innerHeight;
    const fixedHeader = () =>{
        if (window.innerWidth>768){
            if (window.scrollY>=(window.innerHeight-100)){
                setFixed(true);
            }
            else{
                setFixed(false);
                 
            }
        }
        else {
            setFixed(false);
        }
        
        
    }

    window.addEventListener('scroll', fixedHeader);

    return (
        <>
         
        <Link to='home'  id="totop"  className={fixHeader?'d-block':'d-none'} smooth={false} duration={800}>
            <i className="ion-ios-arrow-thin-up"></i>
        </Link>
        <header id="header" className='header-top-fixed'>
            <div className="full-screen-block">
                <div className='header-body header-body-fixed' id="header-body-fixed">
                    <div id="container-fixed">
                        <Navbar3/>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header3
