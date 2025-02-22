import React, { useState } from 'react';
import './css/styles.css'; // Your existing CSS
import IconFooter from '../../components/Footer/IconFooter'; // Import the IconFooter component

const Welcome = () => {
    const [isReadmeOpen, setReadmeOpen] = useState(false);

    const openReadme = () => {
        setReadmeOpen(true);
    };

    const closeReadme = () => {
        setReadmeOpen(false);
    };

    return (
        <div className="welcome-page">
            {/* Background Video */}
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/media/neurons.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Overlay */}
            <div className="overlay"></div>

            {/* Modal Content */}
            <div className="modal">
                <img src="/media/neurons-grey.png" alt="neurons" width="89" />
                <h2><strong>neurons.me</strong></h2>
                <p>Go Algorithmic</p>
                <div className="buttons">
                    <a href="https://media.neurons.me" className="btn">About Us</a>
                    <a href="https://docs.neurons.me" className="btn">Docs</a>
                </div>
            </div>

            {/* Render the IconFooter here */}
            <IconFooter openReadme={openReadme} />

            {/* README Modal (Triggered by ⌘ Icon) */}
            {isReadmeOpen && (
                <div className="readme-modal" style={readmeModalStyle}>
                    <span className="close-readme" onClick={closeReadme} style={closeButtonStyle}>×</span>
                    <h1>⌘ - The Code is the Ultimate Truth</h1>
                    <p><i>Existence is logic in essence - La existencia es lógica en esencia.</i></p>
                    <p>Code embodies pure logic — it is honest, unambiguous, and cannot lie.</p>
                    <p>Explore neurons.me and dive into the algorithmic universe.</p>
                </div>
            )}
        </div>
    );
};

// Inline styles for the README modal
const readmeModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(50, 50, 50, 0.9)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    color: '#fff',
    zIndex: 1000,
    maxWidth: '600px',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#fff',
};

export default Welcome;