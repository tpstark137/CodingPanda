import React from "react";
import "./InputOutput.css";
import { Paper, Tab, Tabs, Button, Box, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const CssTextField = withStyles({
  root: {
    // #115293
    padding: "1rem",
    height: "100%",
    width: "100%",
    "& .MuiInputBase-root": {
      outline: "none",
      color: "whitesmoke",
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
        borderColor: "#0055bb",
      },
    },
  },
})(TextField);

const InputOutput = () => {
  return (
    <>
      <div className="textareaContainer">
        <Paper className="toolbar">
          <Tabs indicatorColor="primary" textColor="inherit" centered>
            <Tab label="Input"></Tab>
            <Tab label="Output"></Tab>
            <Tab label="Save Code"></Tab>
          </Tabs>
          <Box className="btn-box">
            <Button
              variant="text"
              color="inherit"
              endIcon={<SendRoundedIcon />}
            >
              Run Code
            </Button>
          </Box>
        </Paper>
        <div className="text-area">
          <CssTextField key="1" size="medium" variant="outlined" multiline />
        </div>
      </div>
    </>
  );
};

export default InputOutput;
