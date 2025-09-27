import { Button } from "@mui/material";
import React from "react";

type DeleteTaskProps = {
  taskId: string;
  fetchTasks: () => void;
};

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, fetchTasks }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/task/${taskId}`, {
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
    }
  };

  return (
    <Button variant="outlined" color="error" onClick={handleDelete}>
      Sain tehtud!
    </Button>
  );
};

export default DeleteTask;
