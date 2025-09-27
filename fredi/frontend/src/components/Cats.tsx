import { Box, List, ListItem, Typography, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat.tsx";
import UpdateCat from "./UpdateCat.tsx";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [newId, setNewId] = useState<string | null>(null);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h1">Cats</Typography>

      <CatsList
        cats={cats}
        selectedId={newId}
        onSelect={(id) => setNewId(id)}
      />

      <SubmitCat fetchCats={fetchCats} />
      <UpdateCat fetchCats={fetchCats} selectedId={newId} />
    </Box>
  );
};

type CatsListProps = {
  cats: Cat[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const CatsList: React.FC<CatsListProps> = ({ cats, selectedId, onSelect }) => (
  <List>
    {cats.map((cat) => (
      <ListItem key={cat.id}>
        {JSON.stringify(cat)}
        <Switch
          value={cat.id}
          checked={selectedId === cat.id}
          onChange={() => onSelect(cat.id)}
          inputProps={{ "aria-label": "Muuda Kassi Nime" }}
        />
      </ListItem>
    ))}
  </List>
);

export default Cats;
