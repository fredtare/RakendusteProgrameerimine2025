import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateTaskProps = {
  fetchTasks: () => void;
  selectedId: string;
};

const UpdateTask: React.FC<UpdateTaskProps> = ({ fetchTasks, selectedId }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateTask = async () => {
    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedId, name: newTaskName }),
      });

      if (response.ok) {
        console.log("Update success", response);
        fetchTasks(); // refresh list right away
      } else {
        console.warn("Update failed");
      }
    } catch (error) {
      console.warn("Network error", error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedId) {
      console.warn("No cat selected to update");
      return;
    }
    updateTask();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Muuda ülesande sisu"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Muuda Sisu
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateTask;
