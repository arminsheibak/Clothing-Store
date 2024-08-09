import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const AsidePanel = ({ isOpen, children }: Props) => {
  return (
    <Box
      display={isOpen ? "block" : "none"}
      bgcolor="rgba(0, 0, 0 , 0.4)"
      height="100%"
      width="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      overflow="auto"
    >
      <Box
        bgcolor="white"
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
      >
        {children}
      </Box>
    </Box>
  );
};

export default AsidePanel;
