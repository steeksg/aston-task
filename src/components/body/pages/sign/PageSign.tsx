import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./PageSign.scss";
import { IUserInfo } from "./tsTypes/IUserInfo";
import { userLogIn } from "./signSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import { changeBackground } from "../../../../appSlice";
import {
  addUserToLS,
  getAllUsersFromLS,
  setUsernameToLS,
} from "../../../../utils/ls/user";
import { resetFavoriteByUsername } from "../../../../utils/ls/favorite";
import { resetHistoryByUsername } from "../../../../utils/ls/history";

interface IPageSignProps {
  typeSign: EnumTypeSign;
}

export enum EnumTypeSign {
  In,
  Up,
}

export default function PageSign({ typeSign }: IPageSignProps) {
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

  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(changeBackground("sign"));
  }, []);

  useEffect(() => {
    if (isNeedRefreshUsers) {
      setUsers(getAllUsersFromLS());
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

  const isNotEmptyNameAndPass = () => {
    let result = true;

    if (!username.value) {
      setUsername({
        ...username,
        isValid: false,
        textError: "Field cannot be empty!",
      });
      result = false;
    }

    if (!password.value) {
      setPassword({
        ...password,
        isValid: false,
        textError: "Field cannot be empty!",
      });
      result = false;
    }

    return result;
  };

  const validSignUp = () => {
    let result = isNotEmptyNameAndPass();

    if (users.find((item) => item.username === username.value)) {
      setUsername({
        ...username,
        isValid: false,
        textError: "This username already use!",
      });
      result = false;
    }

    return result;
  };

  const handleSubmit = () => {
    if (typeSign === EnumTypeSign.Up) handleSubmitSignUp();
    else if (typeSign === EnumTypeSign.In) handleSubmitSignIn();
  };

  const validSignIn = () => {
    let result = isNotEmptyNameAndPass();

    const user = users.find((item) => item.username === username.value);

    if (!user) {
      setUsername({
        ...username,
        isValid: false,
        textError: "This username is not registered!",
      });
      result = false;
    } else {
      if (user.password !== password.value) {
        setPassword({
          ...password,
          isValid: false,
          textError: "Password is doesn't match!",
        });
        result = false;
      }
    }

    return result;
  };

  const handleSubmitSignUp = () => {
    if (validSignUp()) {
      addUserToLS({ username: username.value, password: password.value });
      setIsNeedRefreshUsers(true);
      dispatch(userLogIn(username.value));
      setUsernameToLS(username.value);
      resetFavoriteByUsername(username.value);
      resetHistoryByUsername(username.value);
      navigate("/");
    }
  };

  const handleSubmitSignIn = () => {
    if (validSignIn()) {
      dispatch(userLogIn(username.value));
      setUsernameToLS(username.value);
      navigate("/");
    }
  };

  return (
    <Box className="pageSign--wrap">
      <Box className="pageSign--formBox">
        <Avatar className="pageSign--avatar">
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="pageSign--title">
          {typeSign === EnumTypeSign.Up ? "Sign up" : "Sign in"}
        </Typography>
        <Box
          component="form"
          onKeyDown={(event: any) => {
            if (event?.key === "Enter") {
              event.preventDefault();
              handleSubmit();
            }
          }}
        >
          <Grid container spacing={2} className="pageSign--inputBox">
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
            size="large"
            fullWidth
            variant="contained"
            className="pageSign--submitButton"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            {typeSign === EnumTypeSign.Up ? "Sign up" : "Sign in"}
          </Button>
          {/* {typeSign === EnumTypeSign.Up && (
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          )} */}

          <Grid container justifyContent="flex-end">
            <Grid item>
              {typeSign === EnumTypeSign.Up ? (
                <Link to="/signin">Already have an account? Sign in</Link>
              ) : (
                <Link to="/signup">You don't have an account yet? Sign up</Link>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
