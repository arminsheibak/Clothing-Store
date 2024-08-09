import "react-responsive-carousel/lib/styles/carousel.min.css";
import brooke from "../assets/brooke.jpeg";
import chris from "../assets/chris.jpeg";
import jc from "../assets/jc.jpeg";
import larm from "../assets/larm.jpeg";
import toa from "../assets/toa.jpeg";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box } from "@mui/system";
import { shades } from "../theme";

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const heroImages = [brooke, chris, jc, larm, toa];

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler) => {
        return (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              zIndex: "10",
              color: "white",
              padding: "5px",
            }}
          >
            <NavigateBefore sx={{ fontSize: 40 }} />
          </IconButton>
        );
      }}
      renderArrowNext={(onClickHandler) => {
        return (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              zIndex: "10",
              color: "white",
              padding: "5px",
            }}
          >
            <NavigateNext sx={{ fontSize: 40 }} />
          </IconButton>
        );
      }}
    >
      {heroImages.map((image, index) => {
        return (
          <Box key={`hero-image-${index}`}>
            <img
              src={image}
              alt="`hero-image-${index}`"
              width="100%"
              height="700px"
              style={{
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
            />
            <Box
              color="white"
              padding="20px"
              borderRadius="1px"
              textAlign="left"
              bgcolor="rgba(0, 0, 0, 0.4)"
              position="absolute"
              top="46%"
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              <Typography color={shades.secondary[200]}>
                -- NEW ITEMS
              </Typography>
              <Typography variant="h1">Summer Sale </Typography>
              <Typography
                fontWeight="bold"
                color={shades.secondary[300]}
                sx={{ textDecoration: "underlined" }}
              >
                Discover More
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;
