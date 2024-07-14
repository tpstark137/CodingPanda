import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";

const Settings = () => {
  const CssFormControl = withStyles({
    root: {
      width: "70%",
      margin: "1rem",
      "& svg": {
        fill: "#3f51b5",
      },

      "&:before": {
        borderColor: "#0055bb",
      },
      "&:after": {
        borderColor: "#0055bb",
      },

      "& .MuiSelect-root": {
        color: "white",
      },
      "&.MuiPaper-root": {
        backgroundColor: "black",
        color: "white",
      },
      "& > ul": {
        display: "flex",
        flexDirection: "column",
      },
    },
  })(FormControl);

  return (
    <div style={{ margin: "2rem 0rem" }}>
      <CssFormControl variant="filled">
        <InputLabel id="language-select" style={{ color: "white" }}>
          Language
        </InputLabel>
        <Select
          labelId="language-select"
          //value={language}
          //onChange={(e) =>}
        >
          <MenuItem value={"text/x-c++src"}>C++</MenuItem>
          <MenuItem value={"text/x-java"}>Java</MenuItem>
          <MenuItem value={"text/x-python"}>Python</MenuItem>
          <MenuItem value={"text/javascript"}>JavaScript</MenuItem>
          <MenuItem value={"text/x-rustsrc"}>Rust</MenuItem>
          <MenuItem value={"text/x-go"}>GoLang</MenuItem>
          <MenuItem value={"text/x-php"}>PHP</MenuItem>
          <MenuItem value={"text/x-ruby"}>Ruby</MenuItem>
          <MenuItem value={"text/x-haskell"}>Haskell</MenuItem>
        </Select>
      </CssFormControl>

      <CssFormControl variant="filled">
        <InputLabel style={{ color: "white" }}>FontSize</InputLabel>
        <Select>
          <MenuItem value={10}>10px</MenuItem>
          <MenuItem value={12}>12px</MenuItem>
          <MenuItem value={14}>14px</MenuItem>
          <MenuItem value={16}>16px</MenuItem>
          <MenuItem value={18}>18px</MenuItem>
          <MenuItem value={20}>20px</MenuItem>
          <MenuItem value={22}>22px</MenuItem>
          <MenuItem value={24}>24px</MenuItem>
        </Select>
      </CssFormControl>

      <CssFormControl variant="filled">
        <InputLabel style={{ color: "white" }}>Theme</InputLabel>
        <Select>
          <MenuItem value={"monokai"}>Monokai</MenuItem>
          <MenuItem value={"material-darker"}>Dark Theme</MenuItem>
          <MenuItem value={"default"}>Light Theme</MenuItem>
          <MenuItem value={"neat"}>Light Theme Alternate</MenuItem>
          <MenuItem value={"eclipse"}>Eclipse (Light)</MenuItem>
          <MenuItem value={"dracula"}>Dracula</MenuItem>
          <MenuItem value={"3024-night"}>Brogrammer</MenuItem>
          <MenuItem value={"material-palenight"}>Palenight</MenuItem>
        </Select>
      </CssFormControl>

      <CssFormControl variant="filled">
        <InputLabel style={{ color: "white" }}>Keybinds</InputLabel>
        <Select>
          <MenuItem value={"sublime"}>Default</MenuItem>
          <MenuItem value={"vim"}>Vim</MenuItem>
          <MenuItem value={"emacs"}>Emacs</MenuItem>
        </Select>
      </CssFormControl>
    </div>
  );
};

export default Settings;
