import { Box, useTheme } from "@mui/material";
import SolarSystem from "../../solarSystem/SolarSystem";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Solar System" subtitle="Simple SolarSystem Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <SolarSystem />
      </Box>
    </Box>
  );
};

export default Geography;