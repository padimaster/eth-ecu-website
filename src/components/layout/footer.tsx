import Link from "next/link";
import React from "react";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-6 space-y-4 bg-primary-foreground text-primary">
      <div className="flex space-x-4">
        <Link href="https://x.com/EthTricolor" prefetch={false} target="_blank">
          <BsTwitterX className="h-6 w-6" />
        </Link>
        <Link
          href="https://t.me/+HS7V1OcOF3c2ZDg5"
          prefetch={false}
          target="_blank"
        >
          <FaTelegramPlane className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.instagram.com/ethecuador/"
          prefetch={false}
          target="_blank"
        >
          <BsInstagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/ethecuador/"
          prefetch={false}
          target="_blank"
        >
          <FaLinkedinIn className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com/eth-ecuador"
          prefetch={false}
          target="_blank"
        >
          <FaGithub className="h-6 w-6" />
        </Link>
      </div>
      <p className="text-sm">{`\u00A9 ${new Date().getFullYear()} ETH Ecuador. All rights reserved.`}</p>
    </footer>
  );
}
