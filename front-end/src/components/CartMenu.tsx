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

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const CartMenu = () => {
  const navigate = useNavigate();
  const {
    cart,
    addItem,
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
    <Box
      display={isCartOpen ? "block" : "none"}
      bgcolor="rgba(0, 0, 0 , 0.4)"
      height="100%"
      width="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      overflow="auto"
    >
      <Box
        bgcolor="white"
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
      >
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
                      <img src={item.product.image} alt={item.product.title} />
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
                      <FlexBox m="15px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid ${shades.neutral[500]}`}
                        >
                          <IconButton
                            onClick={() => decreaseCount(item.product)}
                          >
                            <Remove />
                          </IconButton>
                          <Typography>{item.count}</Typography>
                          <IconButton
                            onClick={() => increaseCount(item.product)}
                          >
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
              onClick={() => setCartOpen()}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;