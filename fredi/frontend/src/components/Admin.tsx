import React, { useEffect, useState } from "react";
import { Box, List, ListItem, Button, Typography } from "@mui/material";

type Task = {
  id: string;
  taskName: string;
  updatedAt: number | null;
  deleted: boolean;
};

const AdminPanel: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchAllTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/task/all");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch all tasks:", err);
    }
  };

  const restoreTask = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/task/${id}/restore`, {
        method: "PATCH",
      });
      if (res.ok) {
        console.log(`Task ${id} restored`);
        fetchAllTasks();
      } else {
        console.warn("Failed to restore");
      }
    } catch (err) {
      console.error("Error restoring task:", err);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        Halda ülesandeid
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>
              {task.taskName} {task.deleted && "(deleted)"}
            </span>
            {task.deleted && (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => restoreTask(task.id)}
              >
                Restore
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminPanel;
