import React, { useEffect, useState } from "react";
import { useAuth } from "./tasks/AuthContext";

import {
  Box,
  List,
  ListItem,
  Button,
  Typography,
  Stack,
} from "@mui/material";

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
   const res = await fetch("http://localhost:3000/task/all", {
    headers: { Authorization: `Bearer ${token}` },
  });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const restoreTask = async (id: string) => {
      await fetch(`http://localhost:3000/task/${id}/restore`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });
    try {
      const res = await fetch(`http://localhost:3000/task/${id}/restore`, {
        method: "PATCH",
      });
      if (res.ok) {
        console.log(`Task ${id} restored`);
        fetchAllTasks();
      }
    } catch (err) {
      console.error("Restore error:", err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
  await fetch(`http://localhost:3000/task/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
      if (res.ok) {
        console.log(`Task ${id} soft-deleted`);
        fetchAllTasks();
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        Admin Panel – All Tasks
      </Typography>

      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span>
              {task.taskName}{" "}
              {task.deleted && (
                <Typography
                  component="span"
                  color="error"
                  sx={{ fontStyle: "italic", ml: 1 }}
                >
                  (deleted)
                </Typography>
              )}
            </span>

            <Stack direction="row" spacing={1}>
              {task.deleted ? (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => restoreTask(task.id)}
                >
                  Restore
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              )}
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminPanel;
