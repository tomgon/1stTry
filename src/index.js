import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

function App() {
  return (
    <p>
      <Button variant="contained" color="primary">
        Hello Worldv This is a test
      </Button>
      <p>
        <Checkbox value="checkedA" inputProps={{ "aria-label": "Checkbox A" }}>
          Hello Check Box
        </Checkbox>
      </p>
    </p>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
