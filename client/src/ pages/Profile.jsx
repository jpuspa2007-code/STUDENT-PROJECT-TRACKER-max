import React, { useState } from 'react';

const Profile = () => {
  // User Details State
  const [profile, setProfile] = useState({
    name: 'Pushpa',
    role: 'Full Stack Developer',
    email: 'pushpa@example.com',
    phone: '+91 9876543210',
    location: 'Chennai, Tamil Nadu',
    bio: 'Passionate developer building modern web applications with MERN Stack.',
    skills: 'React.js, Node.js, Express, MongoDB, JavaScript'
  });

  // Edit Mode Toggle
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <div style={cardStyle}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <div style={avatarStyle}>
            {profile.name ? profile.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h2 style={{ margin: 0, color: '#333' }}>{profile.name}</h2>
            <p style={{ margin: '5px 0 0 0', color: '#007bff', fontWeight: 'bold' }}>{profile.role}</p>
          </div>
        </div>

        {!isEditing ? (
          /* View Details Section */
          <div>
            <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '15px 0' }} />
            <div style={detailGroupStyle}>
              <strong>📧 Email:</strong> {profile.email}
            </div>
            <div style={detailGroupStyle}>
              <strong>📞 Phone:</strong> {profile.phone}
            </div>
            <div style={detailGroupStyle}>
              <strong>📍 Location:</strong> {profile.location}
            </div>
            <div style={detailGroupStyle}>
              <strong>📝 Bio:</strong> {profile.bio}
            </div>
            <div style={detailGroupStyle}>
              <strong>⚡ Skills:</strong> {profile.skills}
            </div>

            <button onClick={() => setIsEditing(true)} style={editButtonStyle}>
              ✏️ Edit Profile Details
            </button>
          </div>
        ) : (
          /* Edit Form Section */
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <div style={inputGroupStyle}>
              <label>Full Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
            </div>

            <div style={inputGroupStyle}>
              <label>Role / Title:</label>
              <input type="text" name="role" value={formData.role} onChange={handleChange} style={inputStyle} required />
            </div>

            <div style={inputGroupStyle}>
              <label>Email Address:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
            </div>

            <div style={inputGroupStyle}>
              <label>Phone Number:</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={inputGroupStyle}>
              <label>Location:</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={inputGroupStyle}>
              <label>Bio:</label>
              <textarea name="bio" value={formData.bio} onChange={handleChange} style={{ ...inputStyle, height: '60px' }} />
            </div>

            <div style={inputGroupStyle}>
              <label>Skills (comma separated):</label>
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button type="submit" style={saveButtonStyle}>💾 Save Changes</button>
              <button type="button" onClick={() => setIsEditing(false)} style={cancelButtonStyle}>❌ Cancel</button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '25px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  border: '1px solid #e0e0e0'
};

const avatarStyle = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: '#007bff',
  color: '#ffffff',
  fontSize: '30px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const detailGroupStyle = {
  marginBottom: '12px',
  fontSize: '15px',
  color: '#444'
};

const inputGroupStyle = {
  marginBottom: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
};

const inputStyle = {
  padding: '8px 12px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px'
};

const editButtonStyle = {
  marginTop: '15px',
  padding: '10px 18px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px'
};

const saveButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const cancelButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Profile;