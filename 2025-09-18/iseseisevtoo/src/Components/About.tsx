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
          bgcolor: "background.paper",
        }}>
          <Typography variant="body1">


Quis sequi culpa dolorum sequi aspernatur voluptas voluptatem. Repudiandae et vero et quo amet sed. Dolore sit deserunt ut cumque sint. Voluptas tempora beatae quibusdam unde. Quod qui incidunt et sed vel eligendi.

Dolore rerum hic ut corrupti totam. Nesciunt cupiditate sint voluptas non deserunt doloribus exercitationem. Et cum recusandae qui.

Autem tempore dolore voluptas iure laboriosam tempora vero. Nesciunt et sed laudantium est maxime eum necessitatibus quaerat. Quam dolores et nihil qui quo qui molestiae. Temporibus voluptatum veniam facere reiciendis atque aut.

Voluptate dolorem quo est in maxime dolor. Ipsum provident est beatae. Illum nulla aliquam nihil consequatur voluptatibus. Itaque optio quis nobis explicabo hic.

Ipsam magni dolore nobis. Beatae voluptatibus quis facilis voluptatum. Veniam quas in vero modi eum quibusdam laudantium. Maxime omnis sint minus ab fugit impedit. Sequi commodi dolore nam deserunt libero aliquid. Deserunt consequatur odio nesciunt quis.

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
            <br></br>
    </Container>
  );
}
