import React from 'react'
import {Box,Avatar} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import CreateProductForm from './components/createProduct/CreateProductForm.jsx'
import Customers from './components/customers/Customers.jsx'
import Orders from './components/Orders/Orders.jsx'
import Products from './components/Products/Products.jsx'
import UpdateProduct from './components/updateProduct/UpdateProduct.jsx'
import AdminNavbar from './Navigation/AdminNavbar.jsx'
import Dashboard from './Views/Dashboard.jsx'
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../Redux/Auth/Action";
import { useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { customTheme } from './Theme/customTheme.js'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const drawerWidth = 240;

const menu = [
  {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
  {name:"Products",path:"/admin/products",icon:<ProductionQuantityLimitsIcon/>},
  {name:"Customers",path:"/admin/customers",icon:<AccountBoxIcon/>},
  {name:"Orders",path:"/admin/orders",icon:<ShoppingCartCheckoutIcon/>},
  {name:"Add Product",path:"/admin/product/create",icon:<PrecisionManufacturingIcon/>},
];

function AdminPanel() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store);

  const handleLogout = () => {
   
    dispatch(logout());
    navigate("/")

  };

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  // Drawer

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

{/* logout */}

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
       
        <ListItem onClick={handleLogout}  disablePadding >
            <ListItemButton>
            <Avatar
                        className="text-white"
                        onClick={handleLogout}
                       
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
              <ListItemText className="ml-5" primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />
        <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>

        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <Dashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm/>}></Route>
            <Route path="/product/update/:productId" element={<UpdateProduct/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
          </Routes>
         
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default AdminPanel