import React from "react";
import ReactDOM from "react-dom";
import Backpack from "./Backpack";

const backpacks = {
  backpacks: [{ id: 0 }]
};

test("renders BackpackItem", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Backpack backpacks={backpacks} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
