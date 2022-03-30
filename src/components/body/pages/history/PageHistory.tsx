import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { getHistoryByUser } from "../../../../utils/localStorage";

import "./PageHistory.scss";

export default function PageHistory() {
  const history = getHistoryByUser();

  return (
    <List className="pageHistory--wrap">
      {history.map((record, index) => {
        return (
          <React.Fragment key={record.name + index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`Name: ${record.name}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Gender: ${record.gender}`}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Species: ${record.species}`}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Status: ${record.status}`}
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
  );
}
