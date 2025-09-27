import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitTaskListProps = {
  fetchTasks: () => void;
};

const SubmitTask = ({ fetchTasks }: SubmitTaskListProps) => {
  const [taskName, setTaskName] = useState("");

  const submitTask = async () => {
    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskName: taskName }),
      });

      if (response.ok) {
        console.log("Success", response);
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    submitTask();
    setTimeout(fetchTasks, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Sisesta üleasnne"
            onChange={(event) => setTaskName(event.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Lisa ülesanne
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitTask;