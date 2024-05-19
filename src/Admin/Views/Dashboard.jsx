import React from 'react'
import Grid from "@mui/material/Grid";
import "./Dashboard.css";
import AdminPannelWrapper from '../Styles/AdminPannelWrapper'
import CustomersTable from '../Tables/CustomersTable'
import RecentlyAddedProducts from '../Tables/RecentlyAddedProducts'
import RecentOrders from '../Tables/RecentOrders'
import { ThemeProvider, createTheme } from "@mui/material";
import { customTheme } from "../Theme/customTheme.js";

const darkTheme1 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#312d4b',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

function Dashboard() {
  return (
    <div className="adminContainer ">
      <ThemeProvider theme={customTheme}>
        <AdminPannelWrapper>
          <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
              <RecentOrders />
            </Grid>
             <Grid item xs={12} md={12} lg={12}>
              <RecentlyAddedProducts />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
            <CustomersTable />
            </Grid>
          </Grid>
        </AdminPannelWrapper>
      </ThemeProvider>
    </div>
  )
}

export default Dashboard