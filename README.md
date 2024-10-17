# Gate-Preparation-Planner
A React-based web application designed to assist GATE aspirants in effectively organizing their study schedule. It features a Kanban board, daily suggestions, schedule tables, and a workflow graph to enhance productivity and track preparation progress.

## Overview
The GATE Preparation Planner is a comprehensive tool designed to help GATE aspirants streamline their study process. Built with React, this web application incorporates a variety of components like a Kanban board, a calendar, daily study suggestions, a schedule table, and a workflow graph. These features work together to provide a visual and interactive experience, making it easier for users to manage and optimize their study time.

## Features
- **Kanban Board:** Visualize tasks and study goals with draggable and customizable cards.
- **Calendar Component:** Keep track of important dates and study sessions.
- **Daily Suggestions:** Receive tailored suggestions based on performance and upcoming exams.
- **Schedule Table:** Plan and outline your study sessions and topics to cover.
- **Workflow Graph:** Monitor your progress with visual feedback on study milestones.



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/utkarsh20rajput/Gatw-Preparation-Planner.git

2. Navigate to the project directory
   ```bash
   cd gate-planner
3. Install dependencies
   ```bash
   npm install
4. Start the application
   ```bash
   npm start

## Project Structure

Below is an outline of the project's directory structure, detailing the purpose of each directory and key files:

```plaintext
gate-planner/
│
├── src/                   # Source files for the application
│   ├── components/        # React components used across the application
│   │   ├── CalendarComponent.js   # Manages calendar-related operations
│   │   ├── DailySuggestion.js     # Provides daily study suggestions
│   │   ├── KanbanBoard.js         # Implements the Kanban board
│   │   ├── ScheduleTable.js       # Displays the schedule of studies
│   │   └── WorkflowGraph.js       # Visualizes the workflow and progress
│   ├── App.js             # Main React component that integrates all other components
│   ├── index.js           # Entry point for the React application
│   ├── index.css          # Base CSS for styling the application
│   └── firebase.js        # Firebase configuration and service initialization
│
├── public/                # Contains static assets like HTML and icons
│   └── index.html         # Main HTML file that hosts the React app
│
├── .gitignore             # Specifies intentionally untracked files to ignore
├── package.json           # Manages project metadata and dependencies
└── README.md              # Comprehensive project documentation
```

## Usage
After launching the app, you can immediately begin adding tasks to the Kanban board. Set up your study timeline using the schedule table and track your daily and weekly progress with the calendar and workflow graph.

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

