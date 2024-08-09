import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { shades } from "../theme";
import { MenuOutlined, Person2Outlined, SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
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
          Clothing Store
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
          <IconButton >
            <ShoppingBagOutlined color='primary' />
          </IconButton>
          <IconButton >
            <MenuOutlined color='primary' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
