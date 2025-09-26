import { createTheme, type ThemeOptions } from "@mui/material/styles";
//appi tuli chatgpt et leida variable elementide jaoks.
export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",                      
    primary: { main: "#ffffffff" },      
    secondary: { main: "#ff00ff" },     
    background: {
      default: "#1900ffff",               
      paper: "#ff0707ff",                 
    },
    text: {
      primary: "#ffffffff",               
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"IBM Plex Mono", monospace',
    h5: {
      fontFamily: '"IBM Plex Mono", monospace',
      textShadow: "0 0 4px #00ff00",   
      fontWeight: 700,
    },
    body1: {
    },
  },


  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "2px solid #ffffffff",     
          boxShadow: "4px 4px 0 #191919ff",  
          backgroundColor: "#838383ff",
          
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid #fdfdfdff",
          color: "#121212ff",
          backgroundColor: "#ffff04ff",
          boxShadow: "4px 4px 0 #5b5b5bff",
          "&:hover": {
            backgroundColor: "#111111",
            boxShadow: "6px 6px 0 #292929ff",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "#bbbbbbff",
            border: "2px solid #ffffffff",
            boxShadow: "4px 4px 0 #000000ff",
          },
          "& .MuiInputLabel-root": {
            color: "#ffffffff",
            textShadow: "0 0 2px #989898ff",
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
