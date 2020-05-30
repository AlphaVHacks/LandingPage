import React from "react";
import Logo from "../src/assets/images/logo.jpg";

function App() {
  return (
    <div className="App">
      <img
        src={Logo}
        style={{ width: "350px", height: "100px", paddingLeft: "50px" }}
        alt=""
      />
    </div>
  );
}

export default App;
