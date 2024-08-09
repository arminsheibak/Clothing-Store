import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
