import React from "react";
import { Box, Grid, TextField, Button, CssBaseline, Paper } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage.ts";
import {ThemeProvider, useTheme} from "@mui/material/styles";
import { theme } from "../assets/theme.ts"


export default function Contact() {
  const [name, setName, removeName] = useLocalStorage<string>("contact_name", "");
  const [email, setEmail, removeEmail] = useLocalStorage<string>("contact_email", "");
  const [message, setMessage, removeMessage] = useLocalStorage<string>("contact_message", "");

  const handleSave = () => {
    alert("Your contact info has been saved.");

  };

  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Paper variant="outlined" elevation={12}>

      <h2>Contact Info</h2>
     <Grid size={4} spacing={15}>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <TextField
          label="Nimi"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          multiline
          rows={4}
          label="Teie Sõnum"
          variant="filled"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        </Box>

        <Box>
        <Button variant="contained" type="submit">
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={() => {removeName(), removeEmail(), removeMessage()}}>
          Clear All
        </Button>
      </Box>
      </Grid>
            <br></br>
      </Paper>
      </ThemeProvider>
      </>
  );
}