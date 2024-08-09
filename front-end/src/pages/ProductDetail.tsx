import { useState } from "react";
import { useParams } from "react-router-dom"
import useProduct from "../hooks/useProduct";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { shades } from "../theme";
import { Add, Favorite, FavoriteBorderOutlined, Remove } from "@mui/icons-material";
import useCartStore from "../store";

const ProductDetail = () => {
  const {id} = useParams();
  const [count, setCount] = useState(1)
  const [wish, setWish] = useState(false)
  const {data: product, error} = useProduct(parseInt(id!))
  const {
    addItem,
  } = useCartStore();

  const categoryMap: { [key: string]: string } = {
    TR: "Top Rated",
    NA: "New Arrivals",
    BS: "Best Sellers",
  };

  if (error) {
    throw new Error();
  }

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={product?.title}
            width="100%"
            height="100%"
            src={product?.image}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box flex="1 1 50%" mb="40px">

          <Box m="30px 0 25px 0">
            <Typography fontWeight='bold' variant="h3">{product?.title}</Typography>
            <Typography>${product?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {product?.description}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => addItem(product!, count)}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <Box onClick={() => setWish(!wish)} >{wish ? <Favorite style={{color: 'red'}} /> : <FavoriteBorderOutlined /> }</Box>
              <Typography sx={{ ml: "5px" }} >ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {categoryMap[product?.category!]}</Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default ProductDetail