import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted = false }) {

  const taskTableRows = (doneValue) => {
    return (
      tasks
      .filter(task => task.done === doneValue)
      .map(task =>
        <TaskRow 
          task={task} 
          toggleTask={toggleTask} 
          key={task.name} 
        />
      )
    );
  };

  return (
    <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th className="bg-dark text-white">Tasks</th>
          </tr>
        </thead>

        <tbody>
          {
            taskTableRows(showCompleted)
          }
        </tbody>
      </table>
  );
}

export default TaskTable;