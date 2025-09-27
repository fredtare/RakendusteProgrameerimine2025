import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateCatProps = {
  /** function to refresh the list after update */
  fetchCats: () => void;
  /** id of the cat to update */
  selectedId: string;
};

const UpdateCat: React.FC<UpdateCatProps> = ({ fetchCats, selectedId }) => {
  const [newName, setNewName] = useState("");

  const updateCat = async () => {
    try {
      const response = await fetch("http://localhost:3000/cats", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedId, name: newName }),
      });

      if (response.ok) {
        console.log("Update success", response);
        fetchCats(); // refresh list right away
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
    updateCat();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="New cat name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Update Name
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateCat;
