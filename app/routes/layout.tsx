import React from "react";
import {Outlet} from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
    console.log(children);
  return (
      <div>
          <h1>wtf</h1>
          <Outlet />
      </div>
  );
}