import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  const user_id = TokenService.getUser();
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Redirect to={`/backpacks/${user_id}`} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}
