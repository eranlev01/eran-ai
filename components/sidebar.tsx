"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { imagesUrl, routes } from "@/constants/page";
import { cn } from "@/lib/utils";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });


const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#651b67] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image
              fill
              alt="Logo"
              src={imagesUrl.logo}
              loader={() => imagesUrl.logo}
            />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            EranAI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={!route.disabled ? route.href : ""}
              className={
                !route.disabled
                  ? cn(
                      "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                      pathname === route.href && !route.disabled
                        ? "text-white bg-white/10"
                        : "text-slate-300"
                    )
                  : "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-whit rounded-lg transition text-slate-400"
              }
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
                {route.disabled ? (
                  <route.disabledIcon
                    className={cn("h-4 w-4 ml-3", route.color)}
                  />
                ) : (
                  ""
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
