import React from 'react';
import { Link } from 'react-router-dom';

const MdxLayout = ({ children, meta }) => {
    return (
        <div style={layoutStyle}>
            <h1>{meta.title}</h1>
            <p>{meta.description}</p>
            <div>{children}</div>
            <Link to="/business-solutions" style={backLink}>← Back to Business Solutions</Link>
        </div>
    );
};

const layoutStyle = {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#111',
    minHeight: '100vh',
};

const backLink = {
    marginTop: '20px',
    display: 'inline-block',
    color: '#00bfff',
    textDecoration: 'none',
};

export default MdxLayout;