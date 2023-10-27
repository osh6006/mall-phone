import { GithubIcon, BoldIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10">
      <div className="flex w-full justify-center items-center gap-x-4 mx-auto ">
        <h2 className="text-lg font-bold">Mall Phone</h2>
        <p className="text-black text-sm">
          <Link href={"https://github.com/osh6006"}>
            <GithubIcon className="w-6 h-6 transition-colors hover:text-purple-500" />
          </Link>
        </p>
        <p className="text-black text-sm">
          <Link href={"https://velog.io/@frontendohs"}>
            <BoldIcon className="w-6 h-6 transition-colors hover:text-green-500" />
          </Link>
        </p>
        <p className="text-black text-sm">
          <Link href={"mailto:ohs6006@gmail.com"}>
            <MailIcon className="w-6 h-6 transition-colors hover:text-yelow-500" />
          </Link>
        </p>
      </div>
      <p className="text-black text-sm text-center">made by ❤️ OHS</p>
    </footer>
  );
};

export default Footer;
