import React from 'react';
import './App.css'; // Import custom styles
import ScheduleTable from './components/ScheduleTable';
import WorkflowGraph from './components/WorkflowGraph';
import DailySuggestion from './components/DailySuggestion';
import KanbanBoard from './components/KanbanBoard';
import CalendarComponent from './components/CalendarComponent'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="my-4 text-center">GATE 2025 Preparation Planner</h1>
		<CalendarComponent/>
        <DailySuggestion />
        <ScheduleTable />
		<WorkflowGraph />
        <div style={{ marginTop: '50px' }}>
			<KanbanBoard />
		</div>
      </div>
    </div>
  );
}

export default App;