import React from "react";
import "./TabsPanel.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { Link } from "react-router-dom";

import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  TextField,
  withStyles,
} from "@material-ui/core";
import Settings from "./Settings/Settings";
import SvgIcon from "@mui/material/SvgIcon";
import Problem from "./Problem/Problem";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const TabsPanel = () => {
  const CssTextField = withStyles({
    root: {
      height: "100%",
      width: "100%",
      "& .MuiInputBase-root": {
        fontSize: "12px",
        padding: "0px",
        outline: "none",
        color: "#edf2fb",
      },
      "& label.Mui-focused": {
        color: "#0055bb",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#0055bb",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#0055bb",
        },
        "&:hover fieldset": {
          borderColor: "#0055bb",
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #0055bb ",
        },
      },
    },
  })(TextField);
  return (
    <>
      <div className="switch-editor">
        <div>
          <Link className="linker" to="/">
            <HomeIcon color="action" /> Go to home
          </Link>
        </div>
        <div>
          <button>CodeEditor</button>
          <button>WhiteBoard</button>
        </div>
      </div>
      <Tabs className="tab-root">
        <TabList>
          <Tab>Problem</Tab>
          <Tab>Search Problem</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanel>
          <Problem />
        </TabPanel>
        <TabPanel className="problemSearchTab">
          <div className="enter-link">
            <label className="enterLink-label">
              Enter Codeforces Or Atcoder Question URL:
            </label>
            <CssTextField
              onChange={(e) => {}}
              //value={url}
              //error={errorText.error}
              //helperText={errorText.comment}
              variant="outlined"
              size="small"
              // InputProps={{
              //   endAdornment: <NextButton />,
              // }}
            />
            <div className="btn-container">
              <div className="btn-submit">
                <Button
                  variant="text"
                  color="inherit"
                  endIcon={<SendRoundedIcon />}
                >
                  Search Problem
                </Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabsPanel;
