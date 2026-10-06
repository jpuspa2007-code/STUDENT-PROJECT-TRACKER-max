import React from "react";
import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const project = {
    _id: id || "project1",
    name: "Student Attendance System",
    description:
      "A web application developed to manage student attendance, records and reports.",
    studentName: "Pushpa",
    technology: "MERN Stack",
    status: "In Progress",
    deadline: "2026-10-15",
    progress: 70,
    createdAt: "2026-09-20",
    tasks: [
      {
        _id: "task1",
        title: "Create Login Page",
        status: "Completed",
        priority: "High",
      },
      {
        _id: "task2",
        title: "Create MongoDB Models",
        status: "In Progress",
        priority: "Medium",
      },
      {
        _id: "task3",
        title: "Build Dashboard",
        status: "Pending",
        priority: "Low",
      },
    ],
  };

  const getStatusClass = (status) => {
    const currentStatus = String(status || "Pending").toLowerCase();

    if (currentStatus === "completed") {
      return "status completed";
    }

    if (
      currentStatus === "in progress" ||
      currentStatus === "in-progress"
    ) {
      return "status in-progress";
    }

    if (currentStatus === "pending") {
      return "status pending";
    }

    return "status";
  };

  const getPriorityClass = (priority) => {
    const currentPriority = String(priority || "Medium").toLowerCase();

    if (currentPriority === "high") {
      return "priority high";
    }

    if (currentPriority === "low") {
      return "priority low";
    }

    return "priority medium";
  };

  const formatDate = (date) => {
    if (!date) {
      return "Not available";
    }

    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) {
      return "Invalid date";
    }

    return formattedDate.toLocaleDateString();
  };

  const progress = Math.min(
    100,
    Math.max(0, Number(project.progress) || 0)
  );

  const tasks = Array.isArray(project.tasks)
    ? project.tasks
    : [];

  const completedTasks = tasks.filter(
    (task) =>
      String(task.status || "").toLowerCase() === "completed"
  ).length;

  const handleEdit = () => {
    console.log("Edit Project:", project);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (confirmDelete) {
      console.log("Delete Project:", project._id);
    }
  };

  return (
    <div className="project-details-page">

      {/* Back Button */}
      <div className="details-top">
        <Link to="/dashboard" className="back-btn">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Project Header */}
      <div className="project-details-header">

        <div>
          <h1>
            {project.name || "Untitled Project"}
          </h1>

          <p>
            {project.description ||
              "No project description available."}
          </p>
        </div>

        <span className={getStatusClass(project.status)}>
          {project.status || "Pending"}
        </span>

      </div>

      {/* Project Information */}
      <div className="details-grid">

        <div className="details-card">
          <h3>Student</h3>
          <p>
            {project.studentName || "Not assigned"}
          </p>
        </div>

        <div className="details-card">
          <h3>Technology</h3>
          <p>
            {project.technology || "Not specified"}
          </p>
        </div>

        <div className="details-card">
          <h3>Created Date</h3>
          <p>
            {formatDate(project.createdAt)}
          </p>
        </div>

        <div className="details-card">
          <h3>Deadline</h3>
          <p>
            {formatDate(project.deadline)}
          </p>
        </div>

      </div>

      {/* Progress */}
      <div className="project-progress-card">

        <div className="progress-title">
          <h2>Project Progress</h2>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <p>
          {completedTasks} of {tasks.length} tasks completed
        </p>

      </div>

      {/* Tasks */}
      <div className="project-tasks-section">

        <div className="section-header">
          <h2>Project Tasks</h2>

          <span>
            {tasks.length} Task
            {tasks.length !== 1 ? "s" : ""}
          </span>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-message">
            <p>
              No tasks available for this project.
            </p>
          </div>
        ) : (
          <div className="project-task-list">

            {tasks.map((task) => (
              <div
                className="project-task-item"
                key={task._id}
              >

                <div className="task-main-info">

                  <h3>
                    {task.title || "Untitled Task"}
                  </h3>

                  <span
                    className={getPriorityClass(
                      task.priority
                    )}
                  >
                    {task.priority || "Medium"}
                  </span>

                </div>

                <span
                  className={getStatusClass(
                    task.status
                  )}
                >
                  {task.status || "Pending"}
                </span>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* Action Buttons */}
      <div className="project-details-actions">

        <button
          type="button"
          className="edit-btn"
          onClick={handleEdit}
        >
          Edit Project
        </button>

        <button
          type="button"
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete Project
        </button>

      </div>

    </div>
  );
}

export default ProjectDetails;