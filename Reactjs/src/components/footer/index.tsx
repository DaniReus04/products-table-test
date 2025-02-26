import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2, bgcolor: "#f4f4f4", mt: 4 }}>
      <Typography variant="body2">
        © 2025 Daniel Carvalho. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
