import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #878274 0%, #24221a 100%)",
        pt: "80px",
      }}
    >
      <Navbar />
      <HeroSection />
    </Box>
  );
};

export default Homepage;
