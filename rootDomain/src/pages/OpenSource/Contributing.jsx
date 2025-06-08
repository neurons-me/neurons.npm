// File: src/pages/OpenSource/Contributing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contributing = () => {
    return (
        <div style={containerStyle}>
            <Link to="/" style={logoLinkStyle}>
                <img 
                    src="/media/neurons-grey.png" 
                    alt="Neurons Logo" 
                    style={logoStyle}
                />
            </Link>

            <h1>Contribute to Neurons.me</h1>
            <div style={{ color: 'rgb(0, 154, 137)', fontWeight: 500 }}>Build; Contribute; Grow;</div>
            <p>
                We welcome contributions from developers, designers, writers, and anyone passionate about building
                a more decentralized and user-centric future.
            </p>
            <p>
                Whether you're fixing bugs, improving documentation, or building new features, your help is appreciated.
            </p>
            <p>
                Visit our <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer">GitHub organization</a> to get started.
            </p>

            <Link to="/contact-us" style={buttonStyle}>Contact Us</Link>
        </div>
    );
};

const containerStyle = {
    padding: '48px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
};

const logoLinkStyle = {
    display: 'inline-block',
    marginBottom: '20px',
};

const logoStyle = {
    width: '100px',
    height: 'auto',
};

const buttonStyle = {
    marginTop: '30px',
    display: 'inline-block',
    padding: '12px 24px',
    border: '1px solid #fff',
    borderRadius: '5px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    backgroundColor: 'transparent',
};

export default Contributing;