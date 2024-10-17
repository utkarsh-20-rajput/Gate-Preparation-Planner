# GATE Preparation Planner
The GATE Preparation Planner is a comprehensive tool designed to help GATE aspirants streamline their study process. Built with React, this web application incorporates a variety of components like a Kanban board, a calendar, daily study suggestions, a schedule table, and a workflow graph. These features work together to provide a visual and interactive experience, making it easier for users to manage and optimize their study time.

## Overview
The GATE Preparation Planner is a React-based web application designed to assist GATE aspirants in organizing and managing their study schedules effectively. It features a variety of components like a Kanban board, a calendar, daily study suggestions, a schedule table, and a workflow graph to enhance productivity and track preparation progress.

## Features
- **Kanban Board:** Manage and visualize your tasks and goals with an interactive Kanban board.
- **Calendar Component:** Keep track of important dates, exams, and study sessions.
- **Daily Suggestions:** Get personalized study suggestions based on your progress and goals.
- **Schedule Table:** Plan your studies in an organized table format.
- **Workflow Graph:** Track your study progress visually to stay motivated and informed.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/utkarsh20rajput/Gate-Preparation-Planner.git

2. Clone the repository:
   ```bash
   cd gate-planner
   
3. Install dependencies
   ```bash
   npm install

4. Start the application
   ```bash
    npm start

## Project Structure
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
After installation, open your browser and go to http://localhost:3000 to start using the app. You can add, remove, and move tasks on the Kanban board, view the calendar, enter study plans into the schedule table, and view your overall progress in the workflow graph.

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
