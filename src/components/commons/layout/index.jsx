import React, { ReactNode } from "react";
import Header from "./header/LayoutHeader";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-200 mx-auto px-[10%] py-[7%]">
      <Header />
      <div className="bg-slate-100 p-3">{children}</div>
    </div>
  );
}
