import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-6 space-y-4 bg-primary-foreground text-primary">
      <div className="flex space-x-4">
        <Link href="#" prefetch={false}>
          <BsTwitterX className="h-6 w-6" />
        </Link>
        <Link href="#" prefetch={false}>
          <FaTelegramPlane className="h-6 w-6" />
        </Link>
        <Link href="#" prefetch={false}>
          <BsInstagram className="h-6 w-6" />
        </Link>
        <Link href="#" prefetch={false}>
          <FaLinkedinIn className="h-6 w-6" />
        </Link>
      </div>
      <p className="text-sm">{`\u00A9 ${new Date().getFullYear()} ETH Ecuador. All rights reserved.`}</p>
    </footer>
  );
}
