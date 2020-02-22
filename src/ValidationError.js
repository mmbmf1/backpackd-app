import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return (
      <div className="error" style={{ color: "red" }}>
        {props.message}
      </div>
    );
  }
  return <></>;
}
