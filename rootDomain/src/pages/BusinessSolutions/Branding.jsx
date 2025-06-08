

import React from 'react';
import { Link } from 'react-router-dom';

const Branding = () => {
  const containerStyle = {
    padding: '1rem',
    maxWidth: '900px',
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageLinkStyle = {
    marginBottom: '1rem',
  };

  const imageStyle = {
    width: '150px',
    height: 'auto',
  };

  const textBlockStyle = {
    textAlign: 'left',
    width: '100%',
  };

  const backButtonStyle = {
    marginTop: '2rem',
    display: 'inline-block',
    padding: '12px 24px',
    border: '1px solid currentColor',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    alignSelf: 'flex-start',
  };

  return (
    <div style={containerStyle}>
      {/* Logo Image Linked to Home */}
      <Link to="/" style={imageLinkStyle}>
        <img src="/media/neurons-grey.png" alt="Neurons Logo" style={imageStyle} />
      </Link>

      <div style={textBlockStyle}>
        <h1>🎨 Professional Branding and Guidelines</h1>
        <blockquote><em>“Your brand isn’t just your logo — it’s the entire experience your audience has with your business.”</em> 💡</blockquote>

        <p>In the crowded digital world, <strong>your brand is your voice</strong>. At <strong>neurons.me</strong>, we transform businesses into recognizable, trustworthy brands that resonate with their audiences and stand out in their industries.</p>

        <h2>🚀 <strong>Why Branding Matters</strong></h2>
        <ul>
          <li>💖 <strong>Build Trust</strong> — Consistent branding fosters reliability and loyalty</li>
          <li>📢 <strong>Strengthen Visibility</strong> — Stand out in a saturated market</li>
          <li>🎯 <strong>Communicate Purpose</strong> — Share your mission and values effectively</li>
          <li>💸 <strong>Increase Value</strong> — Strong branding can command premium pricing</li>
        </ul>

        <h2>🎨 <strong>What We Offer</strong></h2>
        <h3>🔗 Brand Identity Design</h3>
        <p>From logos and color palettes to typography and brand marks, we create a <strong>visual identity</strong> that aligns with your brand’s personality.</p>

        <h3>📖 Brand Guidelines</h3>
        <p>Ensure consistency across all platforms with a comprehensive guide covering logo usage, typography rules, tone of voice, and more.</p>

        <h3>📊 Strategic Brand Development</h3>
        <p>We craft a roadmap for your brand’s growth, helping you connect with the right audience and strengthen market positioning.</p>

        <h3>🗣️ Content & Messaging Frameworks</h3>
        <p>From taglines to mission statements, we help shape your brand’s narrative to communicate with clarity and impact.</p>

        <h2>💡 <strong>The Branding Journey</strong></h2>
        <ol>
          <li>🔍 <strong>Discovery</strong> — Understand your core values, mission, and audience.</li>
          <li>🎨 <strong>Design</strong> — Create a visual identity that aligns with your brand’s voice.</li>
          <li>📖 <strong>Document</strong> — Build a detailed brand guide for consistency.</li>
          <li>📢 <strong>Deploy</strong> — Apply your branding across all platforms—web, social media, and print.</li>
          <li>📈 <strong>Evolve</strong> — Continuously refine your brand to stay relevant and impactful.</li>
        </ol>

        <h2>🏆 <strong>Why Choose neurons.me?</strong></h2>
        <ul>
          <li>✅ <strong>User-Centric Design Philosophy</strong></li>
          <li>✅ <strong>Data-Driven Brand Strategies</strong></li>
          <li>✅ <strong>Tailored Guidelines for Multi-Platform Consistency</strong></li>
          <li>✅ <strong>Ongoing Support for Brand Evolution</strong></li>
        </ul>
        <p>We don’t just create logos — we craft <strong>brand stories</strong> that connect, engage, and inspire.</p>

        <h2>🎯 <strong>Success Stories</strong></h2>
        <ul>
          <li><strong>Retail Startup</strong> — Increased brand recognition by 300% within 6 months</li>
          <li><strong>Tech Company</strong> — Successfully launched a cohesive multi-platform branding strategy</li>
          <li><strong>Creative Agency</strong> — Developed a bold rebrand that boosted client engagement</li>
        </ul>

        <h2>📞 <strong>Ready to Elevate Your Brand?</strong></h2>
        <p>Let’s shape a brand that your audience remembers. <br />
          <Link to="/contact-us">👉 <strong>Start Your Branding Journey</strong></Link>
        </p>

        <Link to="/business-solutions" style={backButtonStyle}>← Back to Business Solutions</Link>
      </div>
    </div>
  );
};

export default Branding;