import React from "react";
import {Outlet} from "react-router";

export default function Layout() {
  return (
      <div>
          <div className="h-80 text-4xl">wtf</div>
          <Outlet />
      </div>
  );
}