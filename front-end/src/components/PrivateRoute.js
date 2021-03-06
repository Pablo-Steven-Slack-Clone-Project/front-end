import React,{useContext} from "react";
import { Route, Redirect} from "react-router-dom";
import { AuthContext } from "./Auth"
import Chatroom from "./ChatRoom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
const {currentUser} = useContext(AuthContext)
console.log("currentUSER", !!currentUser, "rest is:", {...rest})

  return ( 
    <Route
      {...rest}
      render={routeProps => 
      !!currentUser ? 
        (
        <Chatroom />
        ) 
      : 
        (
        <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;