import React from "react";
import {Outlet} from "react-router";

export default function Layout() {
  const [counter, setCounter] = React.useState(0);

  return (
      <div>

          <div onClick={()=> setCounter(counter+1)}>wtf: {counter}</div>
          <Outlet />
      </div>
  );
}