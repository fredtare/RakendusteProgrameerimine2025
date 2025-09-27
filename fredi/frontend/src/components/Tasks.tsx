import { Box, List, ListItem, Typography, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTask from "./tasks/SubmitTask";
import UpdateTask from "./tasks/UpdateTask";
import DeleteTask from "./tasks/DeleteTask";

type Task = {
  id: string;
  taskName: string;
  updatedAt: number | null;
  deleted: boolean;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/task");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Mida sa veel tegema peaks (omaenda sõnul)
      </Typography>

      <TasksList
        tasks={tasks}
        selectedId={selectedId}
        onSelect={setSelectedId}
        fetchTasks={fetchTasks}
      />

      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <SubmitTask fetchTasks={fetchTasks} />
        {selectedId && <UpdateTask fetchTasks={fetchTasks} selectedId={selectedId} />}
      </Box>
    </Box>
  );
};

type TaskListProps = {
  tasks: Task[];
  selectedId: string | null;
  onSelect: (id: string | null) => void; // Updated to allow deselecting
  fetchTasks: () => void;
};

const TasksList: React.FC<TaskListProps> = ({ tasks, selectedId, onSelect, fetchTasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}
        >
          <span>{task.taskName}</span>

          <Switch
            checked={selectedId === task.id} // Directly bind checked to selection
            onChange={() => {
              // Toggle: select if not selected, deselect if already selected
              onSelect(selectedId === task.id ? null : task.id);
            }}
            inputProps={{ "aria-label": `Muuda ülesannet ${task.taskName}` }}
          />

          <DeleteTask taskId={task.id} fetchTasks={fetchTasks} />
        </ListItem>
      ))}
    </List>
  );
};

export default Tasks;