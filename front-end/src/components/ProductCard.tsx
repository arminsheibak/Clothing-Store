import { useState } from "react";
import Product from "../entities/Product";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { shades } from "../theme";
import { Remove, Add } from "@mui/icons-material";
import useCartStore from "../store";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const navigate = useNavigate();

  const categoryMap: { [key: string]: string } = {
    TR: "Top Rated",
    NA: "New Arrivals",
    BS: "Best Sellers",
  };

  return (
    <Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          src={product.image}
          alt={product.title}
          width="300px"
          height="400px"
          onClick={() => navigate(`/products/${product.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              bgcolor={shades.neutral[100]}
              borderRadius={"3px"}
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>
            <Button
              onClick={() => addItem(product, count)}
              sx={{ bgcolor: shades.primary[300], color: "white" }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box marginTop="3px">
        <Typography variant="subtitle2" color={shades.neutral[700]}>
          {categoryMap[product.category]}
        </Typography>
        <Typography>{product.title}</Typography>
        <Typography fontWeight="bold">${product.price}</Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
