"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/src/lib/utils";
import dynamic from "next/dynamic";

const Button = dynamic(() =>
  import("@/src/components/ui/button").then((mod) => mod)
);
import { imagesUrl } from "@/src/constants/page";

const font = Montserrat({ weight: "600", subsets: ["latin"] });
export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image
            fill
            alt="Logo"
            src={imagesUrl.logo}
          />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          EranAi
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
