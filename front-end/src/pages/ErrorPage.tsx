import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Box
        color="white"
        padding="20px"
        borderRadius="1px"
        textAlign="center"
        margin="0 auto"
      >
        <Box display='inline-block' padding='30px' marginTop='60px' bgcolor="rgba(0, 0, 0, 0.4)" >
          <Typography variant="h1">Error</Typography>
          <Typography fontWeight="bold">Page Not Found</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
