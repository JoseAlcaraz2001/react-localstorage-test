import React from "react";

function VisibilityControl({ isChecked, setShowCompleted, cleanTasks }) {

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it? ")) {
      cleanTasks();
    }
  }

  return (
    <div className="d-flex justify-content-between bg-primary text-white text-center p-2 border-secondary fw-bold">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={({ target: { checked } }) => setShowCompleted(checked)}
        />
        <label>Show Tasks Done</label>
      </div>

      <button
        onClick={() => handleDelete()}
        className="btn btn-danger btn-sm"
      >
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;