import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material"

import Context from "./Context"
import PropDrilling from "./DrillExample"

export default function AppsPage() {
  return (
    <>
    <Box>
        <Typography>
            Nagu peaks

        </Typography>
 < Context />
</Box>
    <Box>
        <Typography>
            Ja teine variant
            
        </Typography>

 < PropDrilling/>
</Box>
</>
 
  )
}
