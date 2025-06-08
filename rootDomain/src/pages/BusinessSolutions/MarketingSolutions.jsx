import React from 'react';
import { Link } from 'react-router-dom';

const MarketingSolutions = () => {
  return (
    <div style={pageStyle}>
      <Link to="/" style={logoLinkStyle}>
        <img
          src="/media/neurons-grey.png"
          alt="Neurons Logo"
          style={logoStyle}
        />
      </Link>

      <h1>Marketing Solutions in the Digital World</h1>

      <blockquote>
        <strong>“Visibility isn’t just about being seen — it’s about being seen by the right audience.”</strong>
      </blockquote>

      <h2>🌟 The Power of Strategic Marketing</h2>
      <p>In today’s <strong>digital-first world</strong>, cutting through the noise requires more than just ads — it demands <strong>precision, timing, and engagement</strong>. At <strong>neurons.me</strong>, we design <strong>data-driven marketing strategies</strong> that connect your brand with the right audience at the right time.</p>
      <p>We go beyond traditional marketing to create a holistic strategy that elevates visibility, boosts engagement, and drives growth.</p>

      <h2>🚀 Our Core Marketing Services</h2>

      <h3>🔍 1. Search Engine Optimization (SEO)</h3>
      <ul>
        <li><strong>Keyword Research</strong> — targeting high-traffic, relevant terms</li>
        <li><strong>On-Page SEO</strong> — optimizing meta tags, headings, and content structure</li>
        <li><strong>Technical SEO</strong> — improving site speed, crawlability, and mobile-friendliness</li>
        <li><strong>Link Building</strong> — boosting domain authority through trusted backlinks</li>
      </ul>

      <h3>📱 2. Social Media Strategies</h3>
      <ul>
        <li><strong>Content Calendars</strong> tailored for each platform</li>
        <li><strong>Targeted Ad Campaigns</strong> for optimal reach</li>
        <li><strong>Community Engagement</strong> through comments, stories, and direct messaging</li>
        <li><strong>Performance Analytics</strong> to refine strategies</li>
      </ul>

      <h3>🛒 3. Conversion-Focused Campaigns</h3>
      <ul>
        <li><strong>Landing Page Optimization</strong> for higher lead capture</li>
        <li><strong>A/B Testing</strong> to fine-tune messaging and design</li>
        <li><strong>Email Marketing</strong> strategies for nurturing leads</li>
        <li><strong>Retargeting Campaigns</strong> to bring back interested users</li>
      </ul>

      <h3>📊 4. Data-Driven Insights</h3>
      <ul>
        <li><strong>Real-Time Performance Tracking</strong></li>
        <li><strong>User Behavior Analysis</strong></li>
        <li><strong>Customer Journey Mapping</strong></li>
        <li><strong>ROI-Focused Reports</strong></li>
      </ul>

      <h2>💡 Why Choose neurons.me?</h2>
      <ul>
        <li>✅ <strong>Tailored Strategies</strong> — because no two brands are the same</li>
        <li>✅ <strong>Cross-Platform Expertise</strong> — from Google to TikTok, we’ve got you covered</li>
        <li>✅ <strong>User-Centric Focus</strong> — prioritizing meaningful engagement over vanity metrics</li>
        <li>✅ <strong>Scalable Solutions</strong> — grow your marketing efforts alongside your business</li>
      </ul>

      <h2>🌐 Connecting You to the Right Audience</h2>
      <p>At <strong>neurons.me</strong>, we understand that <strong>visibility</strong> is key, but <strong>relevance</strong> is what drives results. Our strategies focus on <strong>connecting your brand with the right people</strong>, ensuring that every marketing effort adds value and strengthens your brand’s position in the market.</p>

      <blockquote>
        💡 <em>“We don’t just get you in the game; we make sure you’re playing to win.”</em>
      </blockquote>

      <h2>📞 Ready to Boost Your Digital Presence?</h2>
      <p>Let’s transform your marketing strategy into a growth engine.<br />
        <Link to="/contact"><strong>👉 Start Your Marketing Journey</strong></Link>
      </p>

      <p><Link to="/business-solutions">← Back to Business Solutions</Link></p>
    </div>
  );
};

const pageStyle = {
  padding: '1rem',
  maxWidth: '900px',
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
};

const logoStyle = {
  width: '150px',
  height: 'auto',
};

const logoLinkStyle = {
  marginBottom: '1rem',
};

const backButtonStyle = {
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

export default MarketingSolutions;