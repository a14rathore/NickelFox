import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppDispatcher from "@redux/dispatchers/appDispatcher";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Dashboard() {
  const [imgs, setimg] = useState([])
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
  let photos = process.env.REACT_APP_API_URL
  useEffect(() => {
    fetch(photos)
      .then((res) => res.json()).then((data) => { setimg(data); console.log(data) })
  }, [])

  return (
    <>
      <h1>Dashboard</h1>

      <Button variant="contained" onClick={logout}>Logout</Button>


      <div >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            {
              imgs.map((ele) => {
                return (
                  <Grid key={ele.id} item xs={2}>
                    <Item >

                      <img style={{ height: "300px", width: "300px" }} src={ele.download_url} />
                      <p>{ele.author}</p>
                    </Item>
                  </Grid>
                )
              })

            }
          </Grid>
        </Box>
      </div>
    </>

  )
}

export default Dashboard;
