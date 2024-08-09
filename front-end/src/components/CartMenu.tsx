import {
  Box,
  Button,
  Divider,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store";
import { Add, Close, Remove } from "@mui/icons-material";
import { shades } from "../theme";
import AsidePanel from "./AsidePanel";

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const CartMenu = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeItem,
    increaseCount,
    decreaseCount,
    isCartOpen,
    setCartOpen,
  } = useCartStore();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.price * item.count;
  }, 0);

  return (
    <AsidePanel isOpen={isCartOpen}>
      <Box padding="30px" overflow="auto" height="100%">
        {/* Header */}
        <FlexBox mb="15px">
          <Typography variant="h3">Shopping Bag</Typography>
          <IconButton onClick={() => setCartOpen()}>
            <Close />
          </IconButton>
        </FlexBox>
        {/* Cart List */}
        <Box>
          {cart.map((item) => {
            return (
              <Box key={item.product.id}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img src={item.product.image} alt={item.product.title} width='80%' />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {item.product.title}
                      </Typography>
                      <IconButton onClick={() => removeItem(item.product)}>
                        <Close />
                      </IconButton>
                    </FlexBox>
                    <Typography>
                        {`${item.product.description.substring(0, 50)}...`}
                      </Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton onClick={() => decreaseCount(item.product)}>
                          <Remove />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton onClick={() => increaseCount(item.product)}>
                          <Add />
                        </IconButton>
                      </Box>
                      <Typography>${item.product.price}</Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            );
          })}
        </Box>
        <Box m="20px 0">
          <FlexBox m="20px 0">
            <Typography fontWeight="bold">
              Total Price: ${totalPrice}
            </Typography>
          </FlexBox>
          <Button
            sx={{
              bgcolor: shades.primary[400],
              color: "white",
              borderRadius: 0,
              minWidth: "100%",
              padding: "20px 40px",
              margin: "20px 0",
            }}
            onClick={() => {
              setCartOpen();
              navigate('/checkout')
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </AsidePanel>
  );
};

export default CartMenu;
