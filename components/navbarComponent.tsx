"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";

const NavBarComponent: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between p-4 bg-slate-400">
      <div className="flex gap-2 items-center text-sm font-normal">
        {" "}
        <Image
          className="rounded-full"
          src={session?.user?.image as string}
          alt="ProfileImage"
          height={40}
          width={40}
        />
        <h2>{session?.user?.email}</h2>
      </div>
      <div>
        <button
          className="flex gap-4 hover:bg-green-800 hover:shadow-lg bg-green-700 text-slate-50 p-2 rounded-xl"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default NavBarComponent;
