//src/pages/Introduction/Contact.jsx
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
const ContactPage = () => {
  return (
    <div className="contact-page" style={{ padding: '1.16rem', textAlign: 'center' }}>

      {/* Logo */}
      <Link to="/" style={imageLinkStyle}>
        <img 
          src="https://neurons.me/neurons.me.png" 
          alt="Neurons Logo" 
          style={imageStyle}
        />
      </Link>

      <h1>Contact Us</h1>
      <p>
      Reach out directly or connect with us through our social platforms.
      </p>
      <p>
        <a href="mailto:hello@neurons.me" style={{ color: 'inherit', textDecoration: 'underline' }}>
          hello@neurons.me
        </a>
      </p>
      {/* Social Icons */}
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
      <a 
        href="https://wa.me/527291671525?text=neurons.me%20-%20Info%20Request" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '10px 20px',
          border: '2px solid rgb(0, 154, 137)',
          color: 'rgb(0, 154, 137)',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          backgroundColor: 'transparent'
        }}
      >
        Chat on WhatsApp
      </a>
      <Link 
        to="/schedule" 
        style={{
          marginTop: '24px',
          display: 'inline-block',
          padding: '12px 24px',
          marginLeft: '12px',
          backgroundColor: 'rgb(0, 154, 137)',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 130, 120)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 154, 137)'}
      >
        Schedule a Call
      </Link>
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

export default ContactPage;