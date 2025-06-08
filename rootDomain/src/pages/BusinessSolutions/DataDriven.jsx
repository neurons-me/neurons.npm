import React from 'react';
import { Link } from 'react-router-dom';

const DataDriven = () => {
  return (
    <div style={containerStyle}>
      {/* Logo Image Linked to Home */}
      <Link to="/" style={{ marginBottom: '1rem' }}>
        <img src="/media/neurons-grey.png" alt="Neurons Logo" style={{ width: '150px', height: 'auto' }} />
      </Link>

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <h1>📊 Data-Driven Decisions for your Business</h1>

        <blockquote style={{ fontStyle: 'italic', margin: '1.5rem 0' }}>
          "In the age of data, the ability to make informed decisions is not just an advantage — it's a necessity."
        </blockquote>

        <section>
          <h2>🤖 Embracing Machine Learning</h2>
          <p>
            In the contemporary business landscape, the ability to make <strong>informed, data-driven decisions</strong> is not just an advantage; it's a necessity. With the advent of <strong>machine learning-driven algorithms</strong>, businesses have the opportunity to harness vast amounts of data to propel themselves forward, making smarter decisions rooted in deep analytical insights.
          </p>
          <p>
            However, before reaping the benefits of machine learning, there is a <strong>crucial preparatory journey</strong> that businesses must undertake — especially those led by non-tech-savvy individuals.
          </p>
        </section>

        <section>
          <h2>💡 Understanding the Value of Machine Learning</h2>
          <ul>
            <li>🔍 <strong>Analyze historical data</strong> to detect patterns that might go unnoticed.</li>
            <li>📈 <strong>Predict trends</strong> and market movements.</li>
            <li>🚚 <strong>Optimize supply chains</strong> for maximum efficiency.</li>
            <li>👥 <strong>Personalize customer experiences</strong> based on user behavior.</li>
            <li>📊 <strong>Enhance decision-making</strong> with data-backed insights.</li>
          </ul>
        </section>

        <section>
          <h2>🗂️ Getting Your Data Ready: The First Step</h2>

          <h3>1️⃣ Data Collection</h3>
          <p>Gather all relevant data from various sources within your organization, including:</p>
          <ul>
            <li>📊 Sales figures</li>
            <li>📝 Customer feedback</li>
            <li>💰 Operational costs</li>
            <li>🌐 Website analytics</li>
          </ul>

          <h3>2️⃣ Data Cleaning</h3>
          <p>Raw data often contains errors or inconsistencies. Clean data ensures <strong>accuracy and reliability</strong> by:</p>
          <ul>
            <li>Removing duplicates</li>
            <li>Fixing missing or inconsistent values</li>
            <li>Eliminating outliers that may skew results</li>
          </ul>

          <h3>3️⃣ Data Transformation</h3>
          <p>Machine learning algorithms require data in specific formats. This step includes:</p>
          <ul>
            <li>🧮 Normalizing data ranges</li>
            <li>🧾 Encoding categorical data</li>
            <li>❓ Handling missing values appropriately</li>
          </ul>

          <h3>4️⃣ Data Exploration</h3>
          <p>Before implementing complex models, <strong>explore your data</strong> to understand its characteristics, trends, and anomalies:</p>
          <ul>
            <li>Visualize trends 📊</li>
            <li>Identify patterns 📅</li>
            <li>Spot anomalies 🚨</li>
          </ul>
        </section>

        <section>
          <h2>🏗️ Re-factoring and Re-structuring: Building a Solid Foundation</h2>

          <h3>🔨 Feature Engineering</h3>
          <p>Create new data points from existing data that offer more value:</p>
          <p>Example: Derive the <strong>average purchase value</strong> from transaction history.</p>

          <h3>🧩 Data Segmentation</h3>
          <p>Improve model accuracy by segmenting data into relevant groups:</p>
          <p><strong>Customer data</strong> → Segmented by demographics, purchasing behavior, or engagement levels.</p>
        </section>

        <section>
          <h2>🧑‍💼 The Role of Professional Guidance</h2>
          <p>While these steps might seem overwhelming — especially for non-technical business owners — <strong>professional guidance</strong> can simplify the process:</p>
          <ul>
            <li>👩‍💻 Data Scientists can help translate business objectives into machine learning goals.</li>
            <li>📊 Machine Learning Experts can develop and train models for actionable insights.</li>
          </ul>

          <blockquote style={{ fontStyle: 'italic', margin: '1.5rem 0' }}>
            💡 Tip: Hiring the right expertise can turn complex data problems into simple business solutions.
          </blockquote>
        </section>

        <section>
          <h2>🚀 Embracing the Future</h2>
          <p>Integrating machine learning can <strong>transform your business</strong> by:</p>
          <ul>
            <li>💡 Enhancing operational efficiency</li>
            <li>📊 Improving strategic decision-making</li>
            <li>🤝 Aligning offerings with customer needs</li>
          </ul>
          <p>By preparing your data and adopting a data-centric mindset, your business can <strong>unlock the full potential of machine learning</strong>, staying ahead in a constantly evolving market.</p>
        </section>

        <section>
          <h2>✅ In Conclusion</h2>
          <p>The journey to machine learning is not just about adopting new technology — it's about adopting a <strong>new mindset</strong> toward decision-making. With well-prepared data, businesses can move from <strong>reactive</strong> to <strong>predictive</strong> strategies, leading the charge in a data-driven world.</p>

          <blockquote style={{ fontStyle: 'italic', margin: '1.5rem 0' }}>
            “Data is the new oil — but it needs refining before it becomes valuable.” 💎
          </blockquote>
        </section>

        <Link to="/business-solutions" style={backButtonStyle}>← Back to Business Solutions</Link>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '50px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


const backButtonStyle = {
  marginTop: '40px',
  display: 'inline-block',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '16px',
};

export default DataDriven;