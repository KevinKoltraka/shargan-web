import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './navbarElements';
const Navbar = ({toggle}) => {
    const [scrollNav , setScrollNav] = useState(false);
    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav} onClick={toggleHome}>
            <NavbarContainer >
                <NavLogo to="/">Shargan Consulting</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={20}
                        activeClass="active"
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={20}
                        >Mission</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={20}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signin" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={20}
                        >STUDENT JOURNEY ALBANIA</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to="/contact">Contact us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar