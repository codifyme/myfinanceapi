import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
import Dropdown from './Dropdown';


function Navbar() {
    const[click, setClick]=useState(false);
    const[dropdown, setDropdown]=useState(false);
    const[button, setButton]=useState(true);

    const handleClick = ()=>setClick(!click);
    const closeMobileMenu =()=>setClick(false);

    const onMouseEnter=()=>{
        if(window.innerWidth<960){
            setDropdown(false);

        } else{
            setDropdown(true);
        }
    };
    const onMouseLeave=()=>{
        if(window.innerWidth<960){
            setDropdown(false);

        } else{
            setDropdown(false);
        }
    };



    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else {
                setButton(true)
            }
        };

        useEffect(()=>{
            showButton();
        },[]);

    window.addEventListener('resize', showButton);

    
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
           <div  className='navbar'>
               <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        {/* <MdFingerprint className='navbar-icon' /> Bluehat */}
                        {/* <i class="fal fa-user-secret"> LarcoMar</i> */}
                        <i class="fab fa-redhat">WhiteHat</i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {/* <i className={click ? 'fas fa-times':'fas fa-bars'}/> */}
                        {click ? <FaTimes/>:<FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home 
                            </Link>

                        </li>
                        <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >
                            <Link to='/Docs' className='nav-links' onClick={closeMobileMenu}>
                                Docs<i className='fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                            Pricing
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
                            Sign In
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/register' className="nav-links-mobile">
                                    <Button buttonStyle='btn--outline'>REGISTER</Button>
                                </Link>
                            ):(
                                <Link to='/register' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>REGISTER</Button>
                                </Link>
                            )}
                        </li>
                        {/* <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ):(
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                                </Link>
                            )}
                        </li> */}
                   </ul>
               </div>
           </div>
           </IconContext.Provider>
        </>
    )
}
export default Navbar;
