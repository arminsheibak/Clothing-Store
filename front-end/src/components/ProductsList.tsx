import { useState } from "react";
import useProducts from "../hooks/useProducts";
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { data: products, error, isLoading } = useProducts();
  const [filterValue, setFilterValue] = useState("all");
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const topRatedProducts = products?.filter((product) => {
    return product.category == "TR";
  });
  const newArrivalsProducts = products?.filter((product) => {
    return product.category == "NA";
  });
  const bestSellerProducts = products?.filter((product) => {
    return product.category == "BS";
  });

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured Products
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={filterValue}
        onChange={(_event, newValue) => setFilterValue(newValue)}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="All" value="all"></Tab>
        <Tab label="NEW ARRIVALS" value="newArrivals"></Tab>
        <Tab label="BEST SELLERS" value="bestSellers"></Tab>
        <Tab label="TOP RATED" value="topRated"></Tab>
      </Tabs>
      <Box
        m="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent='space-around'
        rowGap='20px'
        columnGap='1.33%'
      >
        {filterValue === 'all' && products?.map(product => {
          return <ProductCard key={product.id} product={product}  />
        }) }
        {filterValue === 'newArrivals' && newArrivalsProducts?.map(product => {
          return <ProductCard key={product.id} product={product}  />
        }) }
        {filterValue === 'bestSellers' && bestSellerProducts?.map(product => {
          return <ProductCard key={product.id} product={product}  />
        }) }
        {filterValue === 'topRated' && topRatedProducts?.map(product => {
          return <ProductCard key={product.id} product={product}  />
        }) }


      </Box>
    </Box>
  );
};

export default ProductsList;
