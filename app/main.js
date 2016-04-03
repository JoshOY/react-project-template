import React from "react";
import HelloComponent from "./component.jsx";

function main() {
  React.render(
    (<HelloComponent />),
    document.getElementById("app")
  );
}

main();