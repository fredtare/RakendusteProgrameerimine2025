import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

export default function About() {
  const hobbies = [
    "Söögitegelemine",
    "Motosport",
    "Video Juegos",
    "Trikiratas",
    "lula",
    "Battletech",
    "Infinity",
    "RC crawlerid",
    "3d Printimine",
    "3d modelleerimine",
    "Maalimine (digi)",
    "Joonistamine",
    "Airsoft",
    "Lauamängud",
    "Kõrvaklapid",
    "Vinüülid",
  ];

  return (
    <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>
            Fredi Tarenõmm
          </Typography>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Box sx={{ 
          flexGrow: 50,
          border: 1,
        }}>
          <Typography variant="body1">
            Tere, siin leiate nimekirja erinevatest hobidest ja asjadest.
             Organiseeritud ilusasse scrollitavasse menüüsse.
              Kahjuks pean tunnistama, et kasutan linuxit. Arch btw.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Hobid ja huvid:</Typography>

          <List
            sx={{
              maxHeight: 150,
              overflowY: "auto",
              bgcolor: "background.paper",
              border: 3,
              borderColor: "divider",
              borderRadius: 1,
              mt: 2,
            }}
          >
            {hobbies.map((hobby, i) => (
              <ListItem key={i}>{hobby}</ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </Container>
  );
}
