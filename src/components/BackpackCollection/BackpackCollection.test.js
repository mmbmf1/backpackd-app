import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BackpackCollection from "./BackpackCollection";

test("renders BackpackCollection", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <BackpackCollection />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
