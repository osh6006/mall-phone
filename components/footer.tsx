import { GithubIcon, BoldIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 space-y-5">
      <div className="flex w-full justify-center items-center gap-x-4 mx-auto ">
        <h2 className="text-lg font-bold">Mall Phone</h2>
        <p className="text-black text-sm text-center italic">made by ❤️ OHS </p>
      </div>
      <div className="flex  items-center justify-center">
        <div className="border w-20"></div>
      </div>
      <div className="flex items-center justify-center gap-x-4">
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
            <MailIcon className="w-6 h-6 transition-colors hover:text-yellow-500" />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
