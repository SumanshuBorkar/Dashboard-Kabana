import React, { useState, useEffect } from 'react';
import Column from './Column';
import TaskModal from './TaskModal';
import { fetchTasks, createTask, updateTask } from '../services/api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadTasks();
  }, []);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId'); // Get as string
    
    // Find the task and update its status
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    
    // Update in API
    try {
      await updateTask(taskId, { status });
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert on failure
      setTasks(tasks);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const addedTask = await createTask(newTask);
      setTasks([...tasks, addedTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const todoTasks = tasks.filter(task => task.status === 'Todo');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const doneTasks = tasks.filter(task => task.status === 'Done');

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-700 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
        <button 
          className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="mr-1 text-lg">+</span> Add New Task
        </button>
      </header>
      
      <main className="p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Column 
            title="To Do" 
            tasks={todoTasks} 
            status="Todo"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
          />
          <Column 
            title="In Progress" 
            tasks={inProgressTasks} 
            status="In Progress"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
          />
          <Column 
            title="Done" 
            tasks={doneTasks} 
            status="Done"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
          />
        </div>
      </main>
      
      <TaskModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddTask}
      />
    </div>
  );
};

export default Dashboard;