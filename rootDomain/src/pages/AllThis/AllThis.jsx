import React from 'react'
import { Link } from 'react-router-dom'
import AllThisOptions from "../../components/AllThis/AllThisOptions";
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { useTheme } from '@mui/material/styles';

export default function AllThis() {
  const theme = useTheme();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
          <img
            src="/media/all-this/webp/all.this.webp"
            alt="Neurons Logo"
            style={{ width: '300px', height: 'auto', filter: 'var(--image-filter)' }}
          />
        </Link>
      </div>
      <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
        All.This Library
      </h1>
      <blockquote style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#555' }}>
        “A modular system to make data usable and intelligent by design.”
      </blockquote>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '2rem' }}>
        <a href="https://github.com/neurons-me/all.this" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaGithub />
        </a>
        <a href="https://www.npmjs.com/package/all.this" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <SiNpm />
        </a>
        <a href="https://www.facebook.com/all.this.stuff" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaFacebookF />
        </a>
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          What is all.this?
        </h2>
        <p>
          <code>all.this</code> is a collection of modular JavaScript libraries designed to handle various types of data — from audio and images to text and blockchain interactions. It's the foundation for preparing and normalizing input for machine learning and AI applications.
        </p>
        <div style={{ marginTop: '1rem', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace' }}>
          <div><strong>Include All.This modules to your npm project by running:</strong></div>
          <div style={{ marginTop: '0.5rem', color: '#333' }}>npm install all.this</div>
        </div>
        <div style={{ marginTop: '1rem', backgroundColor: '#f1f1f1', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace' }}>
          <div><strong>Example:</strong></div>
          <pre style={{ marginTop: '0.5rem' }}>
            <code>{`import Me from 'all.this/me';`}</code>
          </pre>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Explore Submodules
        </h2>
        <AllThisOptions />
      </section>
    </div>
  )
}