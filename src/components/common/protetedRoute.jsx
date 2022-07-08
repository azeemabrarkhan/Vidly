import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  to = "/login",
}) => {
  return (
    <Route
      path={path}
      render={(props) => {
        if (!auth.getCurrentUser())
          return (
            <Redirect to={{ pathname: to, state: { from: props.location } }} />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
