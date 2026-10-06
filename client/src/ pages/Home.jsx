import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stats, setStats] = useState({ tasks: 0, projects: 0 });

  useEffect(() => {
    // Fetch count from server APIs
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setStats(prev => ({ ...prev, tasks: data.length || 0 })))
      .catch(err => console.log(err));

    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setStats(prev => ({ ...prev, projects: data.length || 0 })))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Welcome to Student Project Tracker</h1>
        <p style={{ color: '#666' }}>Manage your tasks, projects, and showcase your portfolio.</p>
      </div>

      {/* Dashboard Overview Cards */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>📁 Projects</h3>
          <p>Total Projects: <strong>{stats.projects}</strong></p>
          <Link to="/projects" style={buttonStyle}>View Projects</Link>
        </div>

        <div style={cardStyle}>
          <h3>✅ Tasks</h3>
          <p>Total Active Tasks: <strong>{stats.tasks}</strong></p>
          <Link to="/task" style={buttonStyle}>Manage Tasks</Link>
        </div>

        <div style={cardStyle}>
          <h3>💼 Portfolio</h3>
          <p>Showcase completed work</p>
          <Link to="/portfolio" style={buttonStyle}>View Portfolio</Link>
        </div>

        <div style={cardStyle}>
          <h3>👤 Profile</h3>
          <p>Manage user information</p>
          <Link to="/profile" style={buttonStyle}>View Profile</Link>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  width: '200px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9'
};

const buttonStyle = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '8px 12px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '14px'
};

export default Home;