import React, { useState } from 'react';

const Task = () => {
  // Sample Initial Tasks Data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Database Schema",
      projectName: "Student Attendance System",
      assignedTo: "Pushpa",
      dueDate: "2026-10-05",
      priority: "High",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Setup React Router & Navigation",
      projectName: "College Event Management",
      assignedTo: "Pushpa",
      dueDate: "2026-10-10",
      priority: "Medium",
      status: "Completed"
    },
    {
      id: 3,
      title: "API Integration for Login",
      projectName: "Student Attendance System",
      assignedTo: "Pushpa",
      dueDate: "2026-10-15",
      priority: "High",
      status: "Pending"
    }
  ]);

  // Form State
  const [newTask, setNewTask] = useState({
    title: '',
    projectName: '',
    assignedTo: '',
    dueDate: '',
    priority: 'Medium',
    status: 'Pending'
  });

  // Filter State
  const [filterStatus, setFilterStatus] = useState('All');

  // Input Change Handler
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  // Add Task Handler
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.projectName) return;

    const taskToAdd = {
      ...newTask,
      id: Date.now()
    };

    setTasks([...tasks, taskToAdd]);
    setNewTask({
      title: '',
      projectName: '',
      assignedTo: '',
      dueDate: '',
      priority: 'Medium',
      status: 'Pending'
    });
  };

  // Status Change Handler
  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  // Delete Task Handler
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filtered Tasks
  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'All') return true;
    return task.status === filterStatus;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>📋 Task Management</h1>

      {/* Add Task Form */}
      <div style={cardStyle}>
        <h3>➕ Add New Task</h3>
        <form onSubmit={handleAddTask} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={labelStyle}>Task Title*</label>
            <input type="text" name="title" value={newTask.title} onChange={handleChange} placeholder="e.g. Create UI layout" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Project Name*</label>
            <input type="text" name="projectName" value={newTask.projectName} onChange={handleChange} placeholder="e.g. Attendance Portal" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Assigned To</label>
            <input type="text" name="assignedTo" value={newTask.assignedTo} onChange={handleChange} placeholder="Student Name" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Due Date</label>
            <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleChange} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Priority</label>
            <select name="priority" value={newTask.priority} onChange={handleChange} style={inputStyle}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Initial Status</label>
            <select name="status" value={newTask.status} onChange={handleChange} style={inputStyle}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" style={addButtonStyle}>+ Add Task</button>
        </form>
      </div>

      {/* Task Filter & List Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '25px 0 15px 0' }}>
        <h2>Tasks List ({filteredTasks.length})</h2>
        <div>
          <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Filter by Status:</label>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: '6px 12px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Tasks Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
        {filteredTasks.length === 0 ? (
          <p style={{ color: '#666' }}>No tasks found in this status.</p>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id} style={{ ...taskCardStyle, borderLeft: getPriorityColor(task.priority) }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{task.title}</h3>
                <span style={{ fontSize: '12px', padding: '3px 8px', borderRadius: '10px', backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                  {task.priority} Priority
                </span>
              </div>

              <p style={{ margin: '0 0 8px 0', color: '#007bff', fontSize: '14px', fontWeight: 'bold' }}>
                📁 {task.projectName}
              </p>

              <div style={{ fontSize: '13px', color: '#555', marginBottom: '12px' }}>
                <p style={{ margin: '3px 0' }}>👤 <strong>Assigned:</strong> {task.assignedTo || 'Unassigned'}</p>
                <p style={{ margin: '3px 0' }}>📅 <strong>Due Date:</strong> {task.dueDate || 'N/A'}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                <div>
                  <label style={{ fontSize: '12px', display: 'block', marginBottom: '2px' }}>Status:</label>
                  <select 
                    value={task.status} 
                    onChange={(e) => handleStatusChange(task.id, e.target.value)}
                    style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #bbb', fontSize: '13px' }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <button onClick={() => handleDeleteTask(task.id)} style={deleteButtonStyle}>
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

// Styles & Color Helper
const getPriorityColor = (priority) => {
  if (priority === 'High') return '5px solid #dc3545';
  if (priority === 'Medium') return '5px solid #ffc107';
  return '5px solid #28a745';
};

const cardStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 'bold',
  marginBottom: '4px'
};

const inputStyle = {
  width: '100%',
  padding: '8px 10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box'
};

const addButtonStyle = {
  gridColumn: 'span 2',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 'bold',
  marginTop: '5px'
};

const taskCardStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

const deleteButtonStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '12px'
};

export default Task;