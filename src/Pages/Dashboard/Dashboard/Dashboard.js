import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ManageOrders from "../ManageOrders/ManageOrders";
import MyOrders from "../MyOrders/MyOrders";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import useAuth from "../../../hooks/useAuth";
import AddCar from "../AddCar/AddCar";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, user, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link to="/home">
        <Button variant="contained" sx={{ m: 2 }}>
          Home
        </Button>
      </Link>
      <Link to={`${url}`}>
        <Button sx={{ m: 2 }} variant="contained">
          Dashboard
        </Button>
      </Link>

      {admin ? (
        <Box>
          <Link to={`${url}/addProduct`}>
            <Button variant="contained" sx={{ my: 1 }}>
              Add Product
            </Button>
          </Link>
          <Link to={`${url}/manageProducts`}>
            <Button variant="contained" sx={{ my: 1 }}>
              Manage Product
            </Button>
          </Link>
          <Link to={`${url}/manageOrders`}>
            <Button variant="contained" sx={{ my: 1 }}>
              Manage All Orders
            </Button>
          </Link>
          <Link to={`${url}/makeAdmin`}>
            <Button variant="contained" sx={{ my: 1 }}>
              Make an Admin
            </Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link to={`${url}/myOrders`}>
            <Button variant="contained" sx={{ m: 2 }}>
              My Orders
            </Button>
          </Link>
          <Link to={`${url}/payment`}>
            <Button variant="contained" sx={{ m: 2 }}>
              Payment
            </Button>
          </Link>
        </Box>
      )}

      {user.email && (
        <button className="btn btn-warning m-2" onClick={logOut}>
          Logout
        </button>
      )}

      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {user.displayName}'s Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>

          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/addProduct`}>
            <AddCar></AddCar>
          </AdminRoute>

          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>

          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>

        {/* <MyOrders></MyOrders> */}
        {/* <ManageOrders></ManageOrders> */}
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
