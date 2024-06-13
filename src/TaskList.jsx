import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    console.log('Toggling task:', tasks[index]);
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (index) => {
    console.log('Removing task:', tasks[index]);
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  console.log('Filtered tasks:', filteredTasks);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Añadir una nueva tarea"
        />
        <button
          onClick={handleAddTask}
          className="w-full mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Añadir Tarea
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`mr-2 p-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`mr-2 p-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completadas
        </button>
        <button
          onClick={() => setFilter('incomplete')}
          className={`p-2 rounded ${filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Incompletas
        </button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mt-2 rounded"
          >
            <span
              className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            {filter === 'all' && (
              <button
                onClick={() => handleToggleTask(index)}
                className={`mr-2 p-1 rounded ${task.completed ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'} hover:bg-opacity-75`}
              >
                {task.completed ? 'Incompleta' : '✅'}
              </button>
            )}
            <button
              onClick={() => handleRemoveTask(index)}
              className="bg-red-500 text-white p-1 rounded hover:bg-red-700"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

