import {  SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DarkModeToggle } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="bg-blue-800 w-fit ">
            <Image src="https://www.shareicon.net/data/128x128/2015/11/08/668675_box_512x512.png" 
            alt="Dropbox"
            className="invert p-2"
            height={50}
            width={50}/>

        </div>
        <h1 className="font-bold text-2xl">Dropbox</h1>
      </Link>

      <div className="px-6 flex space-x-5 items-center">
        {/* Theme Toggle */}
        <DarkModeToggle/>

        <UserButton afterSignOutUrl="/"/>

        <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
