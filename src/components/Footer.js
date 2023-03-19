import React from 'react';
import { FaLinkedinIn, FaGithub, FaQuora, FaCodepen, FaInstagram, FaDiscord } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <a href='https://www.linkedin.com/in/saket-palarapu-270652204/' rel='noreferrer' target='_blank'><FaLinkedinIn size={30} /></a>
            <a href='https://github.com/Saket03-P/' rel='noreferrer' target='_blank'><FaGithub size={30} /></a>
            <a href='https://instagram.com/saket_p_?igshid=ZDdkNTZiNTM=' rel='noreferrer' target='_blank'><FaInstagram size={30} /></a>
            <a href='https://www.quora.com/profile/Saket-157' rel='noreferrer' target='_blank'><FaQuora size={30} /></a>
            <a href='https://codepen.io/saket03p' rel='noreferrer' target='_blank'><FaCodepen size={30} /></a>
            <a href='https://dsc.bio/760475304559902770' rel='noreferrer' target='_blank'><FaDiscord size={30} /></a>
        </footer>
    )
}

export default Footer