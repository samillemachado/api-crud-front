import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <AutorenewIcon sx={{ fontSize: 40, color: "white" }} />
            <Typography variant="h4" sx={{ color: "white" }}>
              {" "}
              <b>API/CRUD</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="subtitle1">
              Trabalho final módulo IV
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
