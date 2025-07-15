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

  return (
    <div style={{ padding: '1.16rem', textAlign: 'center' }}>
      <Link to="/" style={imageLinkStyle}>
        <img src="https://neurons.me/neurons.me.png" alt="Neurons Logo" style={imageStyle} />
      </Link>
      <h1>About Neurons.Me</h1>
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
      <p>
        <b>neurons.me</b> is a technology firm focused on developing <b>open-source</b> solutions and delivering <b>IT and media services</b> to forward-thinking companies. 
        Our mission is to empower users and organizations with tools that are transparent, decentralized, and adaptable to their unique goals.
      </p>
      <p>
        Whether contributing to the <b>open-source</b> community or building <b>custom systems for enterprise clients</b>, we believe in technology that serves people — not the other way around.
      </p>
      <p>
        Our design philosophy centers on <b>open standards</b>, <b>auditability</b>, and <b>user empowerment</b>. We build tools that allow users to <b>own their data</b>, <b>understand their systems</b>, and <b>shape their outcomes</b>.
      </p>
      <p>
        <b>neurons.me</b> was started by <a href="https://suign.github.io" target="_blank" rel="noopener noreferrer"><b>suiGn</b></a>. Our work is driven by the idea that <b>intelligence</b> should be <b>visible</b>, <b>explainable</b>, and shaped by those it serves.
      </p>
      
      <div style={{ marginTop: '42px' }}>
        <Link to="/business-solutions" style={{ ...dynamicButtonStyle, marginRight: '12px' }}>
          Explore Business Solutions
        </Link>
        <Link to="/open-source" style={{ ...dynamicButtonStyle, marginRight: '12px' }}>
          Explore Open Source Libraries
        </Link>
        <Link to="/blog" style={dynamicButtonStyle}>
          Read Our Blog
        </Link>
      </div>

  <div style={clientSectionStyle}>
        <p style={{ marginBottom: '21px', fontWeight: 'bold' }}>Trusted by forward-thinking teams</p>
        <div style={clientLogoContainerStyle}>
          <a href="https://davidlachapelleamor.com/exposicion/#colaboradores" target="_blank" rel="noopener noreferrer">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/7WVN43LAWJC23MRHXYKYOFWNLA.jpg" alt="David LaChapelle" style={clientLogoStyle} />
          </a>
          <a href="https://www.linkedin.com/company/auto-traslados-sin-rodar/" target="_blank" rel="noopener noreferrer">
            <img src="/media/auto_traslados_sin_rodar_logo_neurons_me-removebg-preview.png" alt="Auto Traslados Sin Rodar" style={clientLogoStyle} />
          </a>
          <a href="https://www.flaunt.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://d3g9pb5nvr3u7.cloudfront.net/sites/53d11ffdc15252005dffeb73/1497222710/256.jpg" alt="Flaunt Magazine" style={clientLogoStyle} />
          </a>
          <a href="https://www.linkedin.com/company/fulltrailer/" target="_blank" rel="noopener noreferrer">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGI7dNK-Y2QQg/company-logo_100_100/B56ZWvKMXUHEAQ-/0/1742400441107/fulltrailer_logo?e=1754524800&amp;v=beta&amp;t=fJTY6ajDfVa219pO87twAA5AclbEzG2u41jBng0s_sQ" alt="Fulltrailer" style={clientLogoStyle} />
          </a>
          <a href="https://www.hyundaisureste.mx" target="_blank" rel="noopener noreferrer">
            <img src="media/hyundai.png" alt="Hyundai Sureste México" style={clientLogoStyle} />
          </a>
          <a href="https://www.facebook.com/MexicoEncuestaOficial/" target="_blank" rel="noopener noreferrer">
            <img src="/media/mexicoEncuesta.png" alt="México Encuesta Oficial" style={clientLogoStyle} />
          </a>
        </div>
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

const iconLinkStyle = {
  color: '#888',
  fontSize: '28px',
  transition: 'color 0.3s ease',
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
  transition: 'opacity 0.3s',
  cursor: 'pointer',
};


export default Home;