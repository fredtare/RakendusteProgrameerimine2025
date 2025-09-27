import { Box, List, ListItem, Typography, Switch, Button } from "@mui/material";
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

const handleDelete = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/cats/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Kassi kustutus saadetud edasi");
      fetchCats();
    } else {
      console.warn("Em mingi jama on backendiga ühendusel");
      fetchCats();
    }
  } catch (error) {
    console.error(error);
    console.log("Error esines");
  }
};


  return (
    <Box>
      <Typography variant="h1">Cats</Typography>
{/* siin muuda ondelete millekski kasulikuks */}
<CatsList
  cats={cats}
  selectedId={newId}
  onSelect={(id) => setNewId(id)}
  onDelete={handleDelete}
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
  onDelete: (id: string) => void;
};
//saada koodi seest siia päisesse asjad mis tahad teha
const CatsList: React.FC<CatsListProps> = ({ cats, selectedId, onSelect, onDelete }) => (
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
<Button
  variant="outlined"
  color="error"
  onClick={() => {
    console.log("Nupp vajutatud");
    onDelete(cat.id);              
  }}
>
  Kustuta Nimekirjast
</Button>
      </ListItem>
    ))}
  </List>
);



export default Cats;
