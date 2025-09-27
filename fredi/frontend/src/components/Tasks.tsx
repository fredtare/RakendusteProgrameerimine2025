import { Box, List, ListItem, Typography, Switch, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTask from "./tasks/SubmitTask"
import UpdateTask from "./tasks/SubmitTask"

type Task = {
  id: string;
  taskName: string;
  updatedAt: number | null;
  deleted: boolean;
};



const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newId, setNewId] = useState<string | null>(null);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/task");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

const handleDelete = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Tubli, ülesanne tehtud!");
      fetchTasks();
    } else {
      console.warn("Em mingi jama on backendiga ühendusel");
      fetchTasks();
    }
  } catch (error) {
    console.error(error);
    console.log("Error esines");
  }
};


  return (
    <Box>
      <Typography variant="h1">Mida sa veel tegema peaks (omaenda sõnul)</Typography>
{/* siin muuda ondelete millekski kasulikuks */}
<TasksList
  tasks={tasks}
  selectedId={newId}
  onSelect={(id) => setNewId(id)}
  onDelete={handleDelete}
/>

      <SubmitTask fetchTasks={fetchTasks} />
      <UpdateTask fetchTasks={fetchTasks} selectedId={newId} />
    </Box>
  );
};

type TaskListProps = {
  tasks: Task[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
};
//saada koodi seest siia päisesse asjad mis tahad teha
const TasksList: React.FC<TaskListProps> = ({ tasks, selectedId, onSelect, onDelete }) => (
  <List>
    {tasks.map((task) => (
      <ListItem key={task.id}>
        {JSON.stringify(task)}
        <Switch
          value={task.id}
          checked={selectedId === task.id}
          onChange={() => onSelect(task.id)}
          inputProps={{ "aria-label": "Muuda  oma ülesannet" }}
        />
<Button
  variant="outlined"
  color="error"
  onClick={() => {
    console.log("Nupp vajutatud");
    onDelete(task.id);              
  }}
>
  Sain tehtud!
</Button>
      </ListItem>
    ))}
  </List>
);



export default Tasks;
