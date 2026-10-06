import React from 'react';

const Portfolio = () => {
  // Sample Data (Ungaloda details-ai idhil change pannikollalaam)
  const user = {
    name: "Pushpa",
    role: "Full Stack Developer",
    bio: "Passionate developer skilled in building web applications using modern technologies like React, Node.js, and Express.",
    email: "pushpa@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML/CSS", "Git"],
    projects: [
      {
        title: "Student Attendance System",
        tech: "MERN Stack",
        description: "A web application built to automate and track student daily attendance efficiently.",
        status: "Completed"
      },
      {
        title: "College Event Management Portal",
        tech: "React & Node.js",
        description: "Platform for organizing events, managing registrations, and broadcasting updates.",
        status: "In Progress"
      }
    ],
    certifications: [
      "Full Stack Web Development Certification",
      "React Frontend Developer Badge"
    ]
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Profile Header */}
      <div style={headerCardStyle}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#007bff', color: '#fff', fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 style={{ margin: '0 0 5px 0', color: '#333' }}>{user.name}</h1>
          <h4 style={{ margin: '0 0 10px 0', color: '#007bff' }}>{user.role}</h4>
          <p style={{ margin: 0, color: '#666' }}>{user.bio}</p>
          <div style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
            <a href={`mailto:${user.email}`} style={linkStyle}>📧 {user.email}</a>
            <a href={user.github} target="_blank" rel="noreferrer" style={linkStyle}>🔗 GitHub</a>
            <a href={user.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>💼 LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>⚡ Technical Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {user.skills.map((skill, index) => (
            <span key={index} style={skillBadgeStyle}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🚀 Showcase Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
          {user.projects.map((proj, index) => (
            <div key={index} style={projectCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{proj.title}</h3>
                <span style={{ fontSize: '12px', padding: '3px 8px', borderRadius: '12px', backgroundColor: proj.status === 'Completed' ? '#d4edda' : '#fff3cd', color: proj.status === 'Completed' ? '#155724' : '#856404' }}>
                  {proj.status}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#007bff', fontWeight: 'bold', margin: '0 0 8px 0' }}>Tech: {proj.tech}</p>
              <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>📜 Certifications & Achievements</h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
          {user.certifications.map((cert, index) => (
            <li key={index}><strong>{cert}</strong></li>
          ))}
        </ul>
      </div>

    </div>
  );
};

// Styles
const headerCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '25px',
  backgroundColor: '#f8f9fa',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  marginBottom: '25px'
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'bold'
};

const sectionStyle = {
  marginBottom: '30px'
};

const sectionTitleStyle = {
  borderBottom: '2px solid #007bff',
  paddingBottom: '8px',
  marginBottom: '15px',
  fontSize: '20px',
  color: '#222'
};

const skillBadgeStyle = {
  backgroundColor: '#e7f1ff',
  color: '#0c63e4',
  padding: '6px 14px',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold'
};

const projectCardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
};

export default Portfolio;