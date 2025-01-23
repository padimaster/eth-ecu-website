import React from "react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="fixed h-16 top-0 left-0 right-0 z-50 bg-white shadow-md">
      <Navbar />
    </header>
  );
}
