
import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export default function AppsPage() {


  return (
    <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>
            Adminni Leht
          </Typography>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Box sx={{ 
          flexGrow: 50,
          border: 1,
          bgcolor: "background.paper",
        }}>
          <Typography variant="body1">


          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">adminni valikud siia</Typography>
            admin asi 1
        </Box>
      </Stack>
            <br></br>
    </Container>
  );
}
