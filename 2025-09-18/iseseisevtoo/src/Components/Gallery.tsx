import {useState} from "react"
import { Box, Grid, Button } from "@mui/material"
import Stack  from "@mui/material/Stack"


export default function Gallery() {

    const [imageValue, setImageValue] = useState("/vite.svg");

return (
<Grid container spacing={2}>
  <Grid size={4}>
    <Stack spacing={2}>
        <Button variant="contained" color="inherit" onClick={() => setImageValue ("/hotDogs.jpg")}>Gurmee Hot Dog, maailma tasemel!</Button>
        <Button variant="contained" color="inherit" onClick={() => setImageValue ("/SuvineSalat.jpg")}>Jaapanipärane värske suvesalat!!</Button>
        <Button variant="contained" color="inherit" onClick={() => setImageValue ("/finerid.jpg")}>Saksapärase emulgeeritud vorsti tartare</Button>
    </Stack>
  </Grid>
  <Grid size={8}>
    <Box sx={{ height: '100%', boxSizing: 'border-box' }}>
            <img
            src={imageValue}
            alt="Pilt toidust"
            style={{ maxWidth:"300%", maxHeight:"20%", objectFit:"scale-down"}}   />
    </Box>
  </Grid>
</Grid>
);
}
