import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./PageSignUp.scss";

interface IUserInfo {
  username: string;
  password: string;
}

export default function PageSignUp() {
  const [isNeedRefreshUsers, setIsNeedRefreshUsers] = useState(true);

  const [username, setUsername] = useState({
    value: "",
    isValid: true,
    textError: "",
  });
  const [password, setPassword] = useState({
    value: "",
    isValid: true,
    textError: "",
  });
  const [users, setUsers] = useState<IUserInfo[] | []>([]);

  useEffect(() => {
    if (isNeedRefreshUsers) {
      setUsers(JSON.parse(window.localStorage.getItem("users") || "[]"));
      setIsNeedRefreshUsers(false);
    }
  }, [isNeedRefreshUsers]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => {
    switch (type) {
      case "username": {
        setUsername({
          ...username,
          value: event.target.value,
          isValid: true,
          textError: "",
        });
        break;
      }
      case "password": {
        setPassword({
          ...password,
          value: event.target.value,
          isValid: true,
          textError: "",
        });
        break;
      }
    }
  };

  const handleSubmit = () => {
    if (!username.value) {
      setUsername({
        ...username,
        isValid: false,
        textError: "Field cannot be empty!",
      });
    }

    if (!password.value) {
      setPassword({
        ...password,
        isValid: false,
        textError: "Field cannot be empty!",
      });
    }

    if (users.find((item) => item.username === username.value)) {
      setUsername({
        ...username,
        isValid: false,
        textError: "This username already use!",
      });
      return;
    }

    if (username.isValid && password.isValid) {
      window.localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          { username: username.value, password: password.value },
        ])
      );
      setIsNeedRefreshUsers(true);
    }
  };

  return (
    <Box className="pageSignUp--wrap">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar className="pageSignUp--avatar">
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="pageSignUp--title">
          Sign up
        </Typography>
        <Box
          component="form"
          onKeyDown={(event: any) => {
            if (event?.key === "Enter") handleSubmit();
            return;
          }}
        >
          <Grid container spacing={2} className="pageSignUp--inputBox">
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                value={username.value}
                onChange={(event) => handleChange(event, "username")}
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                helperText={username.textError}
                error={!username.isValid}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={password.value}
                onChange={(event) => handleChange(event, "password")}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText={password.textError}
                error={!password.isValid}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            className="pageSignUp--submitButton"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
