import React from "react";
import ReactDOM from "react-dom";
import EditBackpack from "./EditBackpack";
import "../../items";

const match = {
  params: {
    baseId: 1
  }
};

test("renders EditBackpack", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditBackpack match={match} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
