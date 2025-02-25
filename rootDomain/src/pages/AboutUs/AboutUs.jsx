import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Importing icons

const AboutUs = () => {
    return (
        <div className="about-us-page" style={aboutUsStyle}>
            
            {/* Logo Image Linked to Home */}
            <Link to="/" style={imageLinkStyle}>
                <img 
                    src="/media/neurons-grey.png" 
                    alt="Neurons Logo" 
                    style={imageStyle}
                />
            </Link>

            <h1>About Neurons.me</h1>
            <p>neurons.me is an open-source project developing technology that allows users to manage and shape the system according to their goals and direction.</p>
            <p>We are based in CDMX, and Austin TX, but collaborate as a global open-source community.</p>
            <p>Explore, contribute, and help shape the future of intelligent systems.</p>

            {/* Social Media Icons */}
            <div style={iconContainerStyle}>
                <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                    <FaGithub />
                </a>
                <a href="https://instagram.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                    <FaInstagram />
                </a>
                <a href="https://facebook.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                    <FaFacebookF />
                </a>
                <a href="https://linkedin.com/company/neurons-me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                    <FaLinkedinIn />
                </a>
            </div>
            {/* Explore Business Solutions Button */}
            <Link to="/business-solutions" style={exploreButtonStyle}>
                Explore Business Solutions
            </Link>
        </div>
    );
};

// Styles
const aboutUsStyle = {
    padding: '42px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#111',
    height: '100vh', // This locks the height to the viewport
    overflowY: 'auto', // <-- Add this to allow vertical scrolling
};

const imageStyle = {
    width: '120px',
    height: 'auto',
    marginBottom: '5px',
    cursor: 'pointer',
};

const imageLinkStyle = {
    display: 'inline-block',
    marginBottom: '8px',
};

const iconContainerStyle = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
};

const iconLinkStyle = {
    color: '#888', // Subtle grey
    fontSize: '28px',
    transition: 'color 0.3s ease',
};

const exploreButtonStyle = {
    marginTop: '40px',
    display: 'inline-block',
    padding: '12px 24px',
    border: '1px solid #fff',
    borderRadius: '5px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: 'transparent',
};

export default AboutUs;