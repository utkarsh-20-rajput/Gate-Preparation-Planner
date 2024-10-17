// src/components/DailySuggestion.js
import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../TaskContext';

const DailySuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [date, setDate] = useState(new Date());
  const { tasks } = useContext(TaskContext);

  // Preparation plan mapping weeks to topics
  const preparationPlan = [
    {
      week: 1,
      topics: [
        { day: 1, topic: 'Linear Algebra' },
        { day: 2, topic: 'Calculus' },
        { day: 3, topic: 'Differential Equations' },
        { day: 4, topic: 'Complex Analysis' },
        { day: 5, topic: 'Revision and Practice' },
        { day: 6, topic: 'Skill Development' },
        { day: 7, topic: 'Mock Test and Analysis' },
      ],
    },
    {
      week: 2,
      topics: [
        { day: 1, topic: 'Electrical Circuits and Networks' },
        { day: 2, topic: 'Signals and Systems' },
        { day: 3, topic: 'Control Systems' },
        { day: 4, topic: 'Analog Electronics' },
        { day: 5, topic: 'Revision and Practice' },
        { day: 6, topic: 'Research Project' },
        { day: 7, topic: 'Mock Test and Analysis' },
      ],
    },
    // Add more weeks as per the preparation plan
  ];

  useEffect(() => {
    generateSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateSuggestions = () => {
    const startDate = new Date('2024-10-16');
    const currentDate = new Date();

    const timeDiff = currentDate - startDate;
    const dayNumber = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;

    if (dayNumber < 1) {
      setSuggestions(['Your preparation starts on October 16, 2024.']);
      return;
    }

    const weekNumber = Math.ceil(dayNumber / 7);
    const dayOfWeek = ((dayNumber - 1) % 7) + 1;

    const weekPlan = preparationPlan.find((week) => week.week === weekNumber);

    if (weekPlan) {
      const todayTopic = weekPlan.topics.find((topic) => topic.day === dayOfWeek);
      if (todayTopic) {
        const todaySuggestions = [];

        if (todayTopic.topic === 'Revision and Practice') {
          todaySuggestions.push('Revise all topics covered this week.');
          todaySuggestions.push('Solve practice problems.');
          todaySuggestions.push('Identify and work on weak areas.');
        } else if (todayTopic.topic === 'Skill Development') {
          todaySuggestions.push('Spend time on skill development activities.');
          todaySuggestions.push('Work on coding or ML projects.');
        } else if (todayTopic.topic === 'Research Project') {
          todaySuggestions.push('Dedicate time to your research project.');
          todaySuggestions.push('Review your project goals and progress.');
        } else if (todayTopic.topic === 'Mock Test and Analysis') {
          todaySuggestions.push('Take a full-length mock test.');
          todaySuggestions.push('Analyze your performance.');
          todaySuggestions.push('Plan for improvements.');
        } else {
          todaySuggestions.push(`Study ${todayTopic.topic}.`);
          todaySuggestions.push('Make notes of key concepts.');
          todaySuggestions.push('Solve related practice problems.');
        }

        const highPriorityTasks = tasks.todo.filter(
          (task) => task.priority === 'Primary'
        );

        highPriorityTasks.forEach((task) => {
          todaySuggestions.push(`Work on task: ${task.content}`);
        });

        setSuggestions(todaySuggestions);
      } else {
        setSuggestions(['No suggestions for today.']);
      }
    } else {
      setSuggestions(['Your preparation plan ends. Time for final revision!']);
    }
  };

  return (
    <div>
      <h2 className="my-4">Daily Suggestions for {date.toDateString()}</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default DailySuggestion;
