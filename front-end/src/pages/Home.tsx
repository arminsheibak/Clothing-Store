import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import ProductsList from "../components/ProductsList";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <ProductsList />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
