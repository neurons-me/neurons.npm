import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  const dynamicButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '5px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: 'transparent',
  };

  const iconLinkStyle = {
    fontSize: '28px',
    opacity: 0.9,
    transition: 'opacity 0.3s ease, color 0.3s ease',
  };

  return (
    <div style={{ padding: '1.16rem', textAlign: 'center' }}>
      <Link to="/" style={imageLinkStyle}>
        <img src="https://neurons.me/neurons.me.png" alt="Neurons Logo" style={imageStyle} />
      </Link>
      <h1>Neurons.Me</h1>
      <div style={iconContainerStyle}>
        <a
          href="https://github.com/neurons-me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconLinkStyle, color: theme.palette.text.primary }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/neurons.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconLinkStyle, color: '#E4405F' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/neurons.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconLinkStyle, color: '#1877F2' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com/company/neurons-me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconLinkStyle, color: '#0A66C2' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
        >
          <FaLinkedinIn />
        </a>
      </div>
      <p>
      Empowering people and organizations through transparent, decentralized technology.
      </p>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '24px' }}>
        实现 定义的方法
      </div>

      <div style={{ marginTop: '42px' }}>
        <Link
          to="/business-solutions"
          style={{ ...dynamicButtonStyle, marginRight: '12px', marginTop: '12px', marginBottom: '12px' }}
        >
          Explore Business Solutions
        </Link>
        <Link
          to="/open-source"
          style={{ ...dynamicButtonStyle, marginRight: '12px', marginTop: '12px', marginBottom: '12px' }}
        >
          Open Source Code
        </Link>
        
        {/*
        <Link to="/blog" style={dynamicButtonStyle}>
          Read Our Blog
        </Link>
        */}
      </div>
    
    </div>
  );
};

const imageStyle = {
  width: '111px',
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

const clientSectionStyle = {
  marginTop: '42px',
};

const clientLogoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '21px',
};

const clientLogoStyle = {
  height: '42px',
  width: 'auto',
  opacity: 0.6,
  filter: 'grayscale(100%)',
  transition: 'opacity 0.3s',
  cursor: 'pointer',
};


export default Home;