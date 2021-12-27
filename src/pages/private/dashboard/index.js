import React from "react";
import Button from "@mui/material/Button";
import AppDispatcher from "@redux/dispatchers/appDispatcher";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Dashboard() {
  const logout = () => {
    AppDispatcher.setUserLoggedOut();
    window.location.pathname = "/auth/login";
  }
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  let photos = "";
  fetch("https://picsum.photos/200/300")
    .then((res) => { photos = res.url; console.log(photos) }).catch((err) => (console.log(err)))
  return (
    <div>
      <h1>Dashboard</h1>

      <Button variant="contained" onClick={logout}>Hello World</Button>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12}>
            <Item> <img src={photos} alt="photo" /></Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>



    </div>
  );
}

export default Dashboard;
