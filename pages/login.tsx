import React, { useEffect, useState, FormEvent } from "react";
import {
  Typography,
  Container,
  Button,
  TextField,
  Checkbox,
  Box,
  FormControlLabel,
  CssBaseline,
  Stack,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/utils/Copyright/";
import Snackbar from "../components/Snackbar";
import styles from "../styles/Home.module.css";
import Login from "../components/Form/Login";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function LoginPage() {
  const [email, setEmail] = useState<string | undefined | null>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Login />
          <Copyright site="Neris" />
        </Container>
      </div>
    </ThemeProvider>
  );
}
