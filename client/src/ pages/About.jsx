import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      {/* Title Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#007bff' }}>About Our Platform</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>
          Welcome to our Project & Task Management Portal, built to empower students and developers to showcase their work effectively.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={boxStyle}>
          <h3>🎯 Our Mission</h3>
          <p>To provide a simple and efficient system for tracking student projects, daily tasks, and portfolios in real time.</p>
        </div>
        <div style={boxStyle}>
          <h3>👁️ Our Vision</h3>
          <p>To bridge the gap between project planning and execution, helping students showcase their practical skill sets.</p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>💻 Tech Stack Used</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Frontend:</strong> React.js, Vite, React Router, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB / RESTful APIs</li>
        </ul>
      </div>

      {/* Features List */}
      <div style={{ marginBottom: '30px' }}>
        <h2>✨ Key Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={featureItemStyle}>📁 Project Directory & Progress Tracking</div>
          <div style={featureItemStyle}>✅ Task Assignment & Status Updates</div>
          <div style={featureItemStyle}>💼 Student Portfolio Showcase</div>
          <div style={featureItemStyle}>👤 User Profile Management</div>
        </div>
      </div>

      {/* Contact & Support */}
      <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
        <p style={{ color: '#777' }}>
          Have questions or feedback? Contact us at <strong>support@projectportal.com</strong>
        </p>
      </div>
    </div>
  );
};

// Inline CSS Styles
const boxStyle = {
  flex: 1,
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

const featureItemStyle = {
  background: '#eef6ff',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '14px',
  borderLeft: '4px solid #007bff'
};

export default About;