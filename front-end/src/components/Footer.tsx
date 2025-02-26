import { Box, Typography } from '@mui/material';
import { shades } from '../theme';

const Footer = () => {
  return (
    <Box marginTop="70px" padding="40px 0" bgcolor={shades.neutral[300]}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color={shades.primary[500]}
          >
            Clothing Store
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h3" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Salsabil Blvd, Tehran, Teh 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: armin2003sheibak@gmail.com
          </Typography>
          <Typography mb="30px">(996)144-8704</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer