import React from 'react';
import TaskCard from './TaskCard';

const Column = ({ title, tasks, status, onDragOver, onDrop, onDragStart }) => {
  return (
    <div 
      className="bg-white rounded shadow-md w-full md:w-1/3 mx-2 flex flex-col"
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, status)}
    >
      <div className="bg-gray-200 p-3 rounded-t">
        <h2 className="font-bold text-center">{title}</h2>
      </div>
      <div className="p-3 flex-grow overflow-y-auto">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDragStart={onDragStart} 
          />
        ))}
      </div>
    </div>
  );
};

export default Column;