import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterExternalLink,
    SocialMedia,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights,
} from './footerElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">Our Story</FooterLink>
                            <FooterLink to="/">Our Mission</FooterLink>
                            <FooterLink to="/">Our Vision</FooterLink>
                            <FooterLink to="/">What We Do</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/contact">Support</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterExternalLink href="https://www.instagram.com/shargan_consulting/" target="_blank" rel="noopener noreferrer">Instagram</FooterExternalLink>
                            <FooterExternalLink href="https://www.tiktok.com/@sharganconsulting" target="_blank" rel="noopener noreferrer">TikTok</FooterExternalLink>
                            <FooterExternalLink href="https://www.linkedin.com/in/klodjan-shaqiri-80536263/?originalSubdomain=al" target="_blank" rel="noopener noreferrer">LinkedIn</FooterExternalLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Shargan</SocialLogo>
                        <WebsiteRights>Shargan © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto:info@sharganconsulting.com" target="_blank" aria-label="Email">
                                <FaEnvelope />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/shargan_consulting?igsh=dDlhNHJuYjBrMXBw" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://wa.me/355699305604" target="_blank" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/klodjan-shaqiri-80536263/?originalSubdomain=al" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
