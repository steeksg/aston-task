import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getHistoryByUser,
  getUsernameFromLS,
  resetHistoryByUsername,
} from "../../../../utils/localStorage";

import "./PageHistory.scss";

export default function PageHistory() {
  const history = getHistoryByUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (!getUsernameFromLS()) {
      navigate("/signin");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="pageHistory--buttonBox">
        <Button
          variant="contained"
          onClick={() => {
            resetHistoryByUsername();
            window.location.reload();
          }}
        >
          Reset history
        </Button>
      </div>
      <List className="pageHistory--wrap">
        {history &&
          history.map((record, index) => {
            return (
              <React.Fragment key={record.name + index}>
                <ListItem
                  className="pageHistory--item"
                  alignItems="flex-start"
                  onClick={() => {
                    navigate(
                      `/search?name=${record.name}&species=${record.species}&gender=${record.gender}&status=${record.status}&page=1`
                    );
                  }}
                >
                  <ListItemText
                    className="pageHistory--title"
                    primary={`Name: ${record.name || "Empty"}`}
                    secondary={
                      <React.Fragment>
                        <Typography className="pageHistory--filter">
                          {`Gender: ${record.gender || "Empty"}`}
                        </Typography>
                        <Typography className="pageHistory--filter">
                          {`Species: ${record.species || "Empty"}`}
                        </Typography>
                        <Typography className="pageHistory--filter">
                          {`Status: ${record.status || "Empty"}`}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
      </List>
    </React.Fragment>
  );
}
