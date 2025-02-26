import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-commerce Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/categories">
          Categories
        </Button>
        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
