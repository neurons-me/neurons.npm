

import React from 'react';
import { Link } from 'react-router-dom';

const SystemDevelopment = () => {
  // Add global styles for ul
  return (
    <>
      <style>
        {`
          ul {
            list-style: none;
            padding-left: 0;
          }
        `}
      </style>
      <div style={containerStyle}>
      {/* Logo Image Linked to Home */}
      <Link to="/" style={logoLinkStyle}>
        <img src="/media/neurons-grey.png" alt="Neurons Logo" style={logoStyle} />
      </Link>

      <h1> System Development and Administration</h1>

      <blockquote><strong>“Innovation thrives when your systems run smoothly.”</strong></blockquote>

      <h2>💡 Why System Development Matters</h2>
      <p>
        In today’s fast-paced digital world, a well-structured system is the backbone of any successful business. <strong>neurons.me</strong> provides tailored solutions that help businesses build robust systems, streamline operations, and create scalable infrastructures — all while maintaining the flexibility needed for innovation and growth.
      </p>

      <h2>⚙️ What We Offer</h2>
      <h3>🖥️ Custom System Development</h3>
      <ul>
        <li><strong>API Integrations</strong> for seamless data flow between services.</li>
        <li><strong>Cloud-Based Solutions</strong> for scalability and accessibility.</li>
        <li><strong>Decentralized Architecture</strong> for data privacy and autonomy.</li>
      </ul>

      <h3>🛡️ System Administration</h3>
      <ul>
        <li><strong>24/7 Monitoring</strong> to ensure system uptime and reliability.</li>
        <li><strong>Security & Compliance</strong> to protect sensitive data.</li>
        <li><strong>Performance Optimization</strong> for smooth and fast operations.</li>
      </ul>

      <h3>📊 Data-Driven Operations</h3>
      <ul>
        <li><strong>Real-Time Dashboards</strong> for instant visibility into operations.</li>
        <li><strong>Automated Reports</strong> for informed decision-making.</li>
        <li><strong>AI-Enhanced Monitoring</strong> to predict and prevent system failures.</li>
      </ul>

      <h2>🧑‍💼 Built for Innovators, Managed by Experts</h2>
      <p>
        At <strong>neurons.me</strong>, we believe that businesses should focus on <strong>innovation</strong>, not infrastructure. Our expert team ensures your systems run efficiently while you focus on strategy and growth.
      </p>

      <blockquote><em>“You focus on your ideas — we’ll handle the backend.”</em></blockquote>

      <h2>🚀 Scaling for the Future</h2>
      <p>
        We design systems with <strong>scalability</strong> in mind, so as your business grows, your infrastructure adapts with it. From <strong>startup-friendly solutions</strong> to <strong>enterprise-level frameworks</strong>, neurons.me provides a seamless path to growth.
      </p>

      <h3>🔄 Future-Proof Technologies We Use:</h3>
      <ul>
        <li><strong>Node.js</strong> &amp; <strong>React.js</strong> for agile web development</li>
        <li><strong>PostgreSQL</strong> &amp; <strong>MongoDB</strong> for versatile data storage</li>
        <li><strong>Docker</strong> &amp; <strong>Kubernetes</strong> for scalable deployments</li>
        <li><strong>Blockchain</strong> integration for decentralized applications (dApps)</li>
      </ul>

      <h2>🤝 Why Choose neurons.me?</h2>
      <ul>
        <li>✅ <strong>Custom-Tailored Solutions</strong> — built for your unique needs</li>
        <li>✅ <strong>Expert System Management</strong> — 24/7 monitoring and support</li>
        <li>✅ <strong>Scalability &amp; Security</strong> — grow safely and efficiently</li>
        <li>✅ <strong>Cutting-Edge Technologies</strong> — stay ahead of the curve</li>
      </ul>

      <h2>📞 Ready to Optimize Your Systems?</h2>
      <p>
        Let’s build something extraordinary together. <br />
        <Link to="/contact-us" style={contactLinkStyle}><strong>👉 Contact Us Today</strong></Link>
      </p>

      <p>
        <Link to="/business-solutions" style={{ color: '#009a89', fontWeight: 'bold', textDecoration: 'none' }}>
          ← Back to Business Solutions
        </Link>
      </p>
    </div>
    </>
  );
};

// Styles
const containerStyle = {
  padding: '42px',
  textAlign: 'center',
  minHeight: '100vh',
};

const logoStyle = {
  width: '120px',
  height: 'auto',
  marginBottom: '10px',
};

const logoLinkStyle = {
  display: 'inline-block',
  marginBottom: '20px',
};

const contactLinkStyle = {
  display: 'inline-block',
  marginTop: '30px',
  padding: '10px 24px',
  border: '1px solid #fff',
  borderRadius: '5px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
};

export default SystemDevelopment;