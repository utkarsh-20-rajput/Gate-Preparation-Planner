// src/TaskContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved
      ? JSON.parse(saved)
      : {
          todo: [
            { id: 'task-1', content: 'Study Linear Algebra', priority: 'Primary' },
            { id: 'task-2', content: 'Practice Aptitude Questions', priority: 'Secondary' },
          ],
          inProgress: [],
          done: [],
        };
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
