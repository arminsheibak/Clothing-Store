import { Badge, Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, Person2Outlined, SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import useCartStore from "../store";

const NavBar = () => {
  const navigate = useNavigate();
  const cart = useCartStore(s => s.cart)
  const setCartOpen = useCartStore(s => s.setCartOpen)

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      bgcolor="rgba(255, 255, 255, 0.95)"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ ":hover": { cursor: "pointer"} }}
          color='black'
        >
          <Typography variant="h3" fontWeight='600' >
          Clothing Store
          </Typography>
        </Box>
        <Box
        display='flex'
        justifyContent='space-between'
        columnGap='20px'
        zIndex='2'
        >
          <IconButton >
            <SearchOutlined color='primary' />
          </IconButton>
          <IconButton >
            <Person2Outlined color='primary' />
          </IconButton>
          <Badge
          badgeContent={cart.length}
          color='secondary'
          invisible={cart.length == 0}
          sx={{
            "& .MuiBadge-badge": {
              right: 5,
              top: 5,
              padding: "0 4px",
              height: "14px",
              minWidth: "13px",
            },
          }}
          >
            <IconButton onClick={() => setCartOpen()} >
              <ShoppingBagOutlined color='primary' />
            </IconButton>
          </Badge>
          <IconButton >
            <MenuOutlined color='primary' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
