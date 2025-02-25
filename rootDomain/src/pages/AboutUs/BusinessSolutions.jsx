import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BusinessSolutions = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ensure canvas covers the viewport
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const particlesArray = [];
        const numParticles = 80;

        // Handle window resize
        const handleResize = () => {
            setCanvasSize();
            initParticles(); // Re-initialize particles on resize
        };
        window.addEventListener('resize', handleResize);

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particlesArray.length = 0; // Clear existing particles
            for (let i = 0; i < numParticles; i++) {
                particlesArray.push(new Particle());
            }
        };

        // Connect particles with lines
        const connectParticles = () => {
            let opacity;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        opacity = 1 - distance / 100;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            connectParticles();
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Navigate to MDX page on click
    const handleGridClick = (path) => {
        navigate(`/mdx/${path}`);
    };

    return (
        <div style={businessSolutionsStyle}>
            {/* Canvas for Particles */}
            <canvas ref={canvasRef} style={canvasStyle}></canvas>

            {/* Logo Image Linked to Home */}
            <Link to="/" style={imageLinkStyle}>
                <img src="/media/neurons-grey.png" alt="Neurons Logo" style={imageStyle} />
            </Link>

            <h1>Business Solutions</h1>
            <p>Discover how neurons.me can help your business integrate decentralized solutions and drive innovation.</p>
            <p>We offer tools, APIs, and strategies tailored for enterprises seeking algorithmic and user-centric technology.</p>

            <Link to="/contact-us" style={contactButtonStyle}>Contact Us</Link>

            {/* Elegant Grid Section with Links to MDX */}
            <div style={gridContainerStyle}>
                <div style={gridItemStyle} onClick={() => handleGridClick('data-driven')}>
                    <h3>Preparing Your Business for Data-Driven Decisions</h3>
                    <p>Unlock the power of data analytics to make informed decisions and optimize your workflows.</p>
                </div>

                <div style={gridItemStyle} onClick={() => handleGridClick('plug-in-your-data')}>
                    <h3>Plug In Your Data</h3>
                    <p>Seamlessly integrate your data sources to empower AI-driven processes and real-time insights.</p>
                </div>

                <div style={gridItemStyle} onClick={() => handleGridClick('system-development')}>
                    <h3>System Development and Administration</h3>
                    <p>Custom development and administrative solutions to ensure your systems are scalable and secure.</p>
                </div>

                <div style={gridItemStyle} onClick={() => handleGridClick('ai-integration')}>
                    <h3>Preparing and Integrating Businesses for the AI Era</h3>
                    <p>Future-proof your operations by incorporating AI tools that adapt and evolve with your business.</p>
                </div>

                <div style={gridItemStyle} onClick={() => handleGridClick('marketing-solutions')}>
                    <h3>Marketing Solutions in the Digital World</h3>
                    <p>Boost visibility, engagement, and conversion through data-driven digital marketing strategies.</p>
                </div>

                <div style={gridItemStyle} onClick={() => handleGridClick('professional-branding')}>
                    <h3>Professional Branding and Guidelines</h3>
                    <p>Craft a cohesive brand identity that resonates with your audience and stands out in the market.</p>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Link to="/about-us" style={backButtonStyle}>← Back to About Us</Link>
            </div>
        </div>
    );
};

// Canvas Background
const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundColor: '#111', // Fallback color in case canvas fails
    opacity: 0.4,
};

// Main Styles
const businessSolutionsStyle = {
    padding: '50px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#222',
    minHeight: '100vh',
    position: 'relative',
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

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '40px',
};

const gridItemStyle = {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
};

const contactButtonStyle = {
    marginTop: '40px',
    display: 'inline-block',
    padding: '12px 24px',
    border: '1px solid #fff',
    borderRadius: '5px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    backgroundColor: 'transparent',
};

const backButtonStyle = {
    marginTop: '20px',
    display: 'inline-block',
    padding: '10px 20px',
    border: '1px solid #fff',
    borderRadius: '5px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
};

export default BusinessSolutions;