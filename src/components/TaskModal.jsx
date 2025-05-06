import React, { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Todo');

  const handleSubmit = () => {
    if (!title.trim()) return;
    
    onSave({
      title,
      description,
      status
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setStatus('Todo');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="bg-blue-700 p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-white text-lg font-bold">Add New Task</h2>
          <button onClick={onClose} className="text-white">
            ✕
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <label className="block font-bold mb-1">Title*</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-bold mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded h-24"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-bold mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="Todo">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-blue-700 text-white py-2 px-4 rounded"
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;