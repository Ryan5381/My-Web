import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Particles from "./Particles";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden", // Prevent scrollbars from particles
      }}
    >
      <Particles />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "85vh",
            gap: 4,
            py: 8,
          }}
        >
          {/* Text Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.8)",
                letterSpacing: "0.2em",
                mb: 1,
                fontSize: "1.2rem",
              }}
            >
              HEY, I'M
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "4.5rem", md: "7rem" },
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
                mb: 3,
                letterSpacing: "-0.02em",
              }}
            >
              RYAN
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                fontWeight: 300,
                maxWidth: "550px",
                lineHeight: 1.8,
                fontSize: "1.2rem",
                letterSpacing: "0.01em",
              }}
            >
              Frontend Engineer | Building beautiful, interactive & <br />
              user-centric web experiences.
            </Typography>
          </Box>

          {/* Hero Image Section */}
          <HeroImage />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
