import React from "react";
import { Button } from "../ui/button";

export default function CTAButton() {
  return (
    <div className="hidden md:flex items-center">
      <Button className="bg-[#3f721d] text-white hover:bg-[#3f721d]/90">Únete</Button>
    </div>
  );
}
