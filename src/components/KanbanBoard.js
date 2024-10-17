import React, { useContext, useState } from 'react';
import { TaskContext } from '../TaskContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskContent, setTaskContent] = useState('');
  const [taskPriority, setTaskPriority] = useState('Primary');

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceCol = result.source.droppableId;
    const destCol = result.destination.droppableId;

    const sourceTasks = Array.from(tasks[sourceCol]);
    const destTasks = Array.from(tasks[destCol]);

    const [movedTask] = sourceTasks.splice(result.source.index, 1);
    destTasks.splice(result.destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks,
    });
  };

  const addTask = () => {
    if (taskContent.trim() === '') return;

    const newTask = {
      id: `task-${Date.now()}`,
      content: taskContent,
      priority: taskPriority,
    };

    setTasks({
      ...tasks,
      todo: [newTask, ...tasks.todo],
    });

    setTaskContent('');
  };

  const deleteTask = (columnId, index) => {
    const columnTasks = Array.from(tasks[columnId]);
    columnTasks.splice(index, 1);
    setTasks({
      ...tasks,
      [columnId]: columnTasks,
    });
  };

  // Function to move tasks between columns
  const moveTask = (taskId, sourceCol, destCol) => {
    const sourceTasks = Array.from(tasks[sourceCol]);
    const destTasks = Array.from(tasks[destCol]);

    const taskIndex = sourceTasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) return;

    const [movedTask] = sourceTasks.splice(taskIndex, 1);
    destTasks.unshift(movedTask);

    setTasks({
      ...tasks,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks,
    });
  };

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'inProgress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
  ];

  return (
    <div className="kanban-board">
      <h2 className="my-4">Kanban Board</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Task Content"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
        />
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="Tertiary">Tertiary</option>
          <option value="Additional">Additional</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="row">
          {columns.map((column) => (
            <div className="col-md-4 col-sm-12" key={column.id}>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    className="kanban-column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h3>{column.title}</h3>
                    {tasks[column.id].map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="task-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>{task.content}</p>
                            <span>Priority: {task.priority}</span>
                            <br />
                            {/* Conditional buttons for moving tasks */}
                            {column.id === 'todo' && (
                              <button
                                onClick={() =>
                                  moveTask(task.id, 'todo', 'inProgress')
                                }
                                className="btn btn-sm btn-primary mt-2"
                              >
                                To Progress
                              </button>
                            )}
                            {column.id === 'inProgress' && (
                              <button
                                onClick={() =>
                                  moveTask(task.id, 'inProgress', 'done')
                                }
                                className="btn btn-sm btn-success mt-2"
                              >
                                Done
                              </button>
                            )}
                            <button
                              onClick={() => deleteTask(column.id, index)}
                              className="btn btn-sm btn-danger mt-2"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
