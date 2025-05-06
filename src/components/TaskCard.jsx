import React from 'react';

const TaskCard = ({ task, onDragStart }) => {
  return (
    <div 
      className="bg-white p-4 mb-2 rounded shadow cursor-move"
      draggable
      onDragStart={(e) => onDragStart(e, task)}
    >
      <h3 className="font-bold text-lg mb-1">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;