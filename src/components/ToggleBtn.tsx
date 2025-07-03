import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "styled-components";
interface ToggleBtnProps {
  toggleTheme: () => void;
  isDark: boolean;
}
const ToggleBtn = ({ toggleTheme, isDark }: ToggleBtnProps) => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setSelected(isDark);
  }, [isDark]);

  return (
    <Tooltip title="Toggle Dark Mode">
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected((prevSelected) => !prevSelected);
          toggleTheme();
        }}
        sx={{
          border: "none",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-selected": {
            backgroundColor: "transparent",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <DarkModeIcon sx={{ color: theme.colors.accent }} />
      </ToggleButton>
    </Tooltip>
  );
};

export default ToggleBtn;
