import { Box } from "@mui/material";
import { motion } from "framer-motion";

/**
 * 此元件負責在背景中產生緩慢飄動且閃爍的金色微粒（螢火蟲特效）
 * 主要作用是增加畫面的質感、層次感與動態氛圍
 */
const Particles = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {[...Array(30)].map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const driftX = (Math.random() - 0.5) * 40;
        const driftY = -(Math.random() * 40 + 20);

        return (
          <Box
            key={i}
            component={motion.div}
            initial={{
              opacity: 0,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0.8, 0.6, 0],
              x: [0, driftX],
              y: [0, driftY],
              scale: [0.8, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              delay: Math.random() * 1,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              width: Math.random() * 2 + 2 + "px",
              height: Math.random() * 2 + 2 + "px",
              background: "#FFF9C4",
              borderRadius: "50%",
              boxShadow: "0 0 10px 2px rgba(255, 235, 59, 0.3)",
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </Box>
  );
};

export default Particles;
