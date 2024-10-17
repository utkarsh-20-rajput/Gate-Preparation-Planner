// src/components/ScheduleTable.js
import React from 'react';
import { Table } from 'react-bootstrap';

const ScheduleTable = () => {
  const schedule = [
    {
      day: 'Monday to Friday',
      activities: [
        { time: '6:00 AM – 7:30 AM', activity: 'Study Session 1 (Core Subjects)' },
        { time: '7:30 AM – 8:00 AM', activity: 'Breakfast' },
        { time: '8:00 AM – 5:00 PM', activity: 'Classes and Labs' },
        { time: '5:30 PM – 6:30 PM', activity: 'Gym/Physical Activity' },
        { time: '6:30 PM – 7:30 PM', activity: 'Study Session 2 (Mathematics)' },
        { time: '7:30 PM – 8:00 PM', activity: 'Dinner' },
        { time: '8:00 PM – 10:00 PM', activity: 'Study Session 3 (Revision and Practice)' },
        { time: '10:00 PM – 11:00 PM', activity: 'Relaxation/Leisure' },
        { time: '11:00 PM', activity: 'Sleep' },
      ],
    },
    {
      day: 'Saturday',
      activities: [
        { time: 'Morning', activity: 'Skill Development (Coding, ML, etc.)' },
        { time: 'Afternoon', activity: 'Study Session (Core Subjects)' },
        { time: 'Evening', activity: 'Research Project Work' },
      ],
    },
    {
      day: 'Sunday',
      activities: [
        { time: 'Morning', activity: 'Full-Length Mock Test' },
        { time: 'Afternoon', activity: 'Analyze Mock Test Results' },
        { time: 'Evening', activity: 'Relaxation and Family Time' },
      ],
    },
  ];

  return (
    <div>
      <h2 className="my-4">Weekly Schedule</h2>
      {schedule.map((daySchedule) => (
        <div key={daySchedule.day} className="mb-4">
          <h3>{daySchedule.day}</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {daySchedule.activities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.time}</td>
                  <td>{activity.activity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;
