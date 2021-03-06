import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppDispatcher from "@redux/dispatchers/appDispatcher";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { API, NetworkManager } from "@network/core";
function Dashboard() {

  const [data, setdata] = useState({
    loading: true,
    photos: []
  })

  const instanceOfNetwork = new NetworkManager(API.AUTH.LOGIN)
  instanceOfNetwork.httpRequest(true)
    .then((res) => res.data).then((data) => { setdata({ loading: false, photos: data }) })

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

  // let photos = process.env.REACT_APP_API_URL
  // useEffect(async () => {
  //   setState({ ...state, loading: true })
  //   const data = await fetch(photos)
  //   const parseData = await data.json();
  //   setState({
  //     loading: false,
  //     imgs: parseData
  //   })
  // }, [])

  return (
    <>
      <h1>Dashboard</h1>

      <Button variant="contained" onClick={logout}>Logout</Button>


      <div >
        {data.loading && <h1>Loading...</h1>}
        {!data.loading && <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            {
              data.photos.map((ele) => {
                return (
                  <Grid key={ele.id} item xs={12} sm={12} md={6} lg={3} xl={2}>
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
        }
      </div>
    </>

  )
}

export default Dashboard;
