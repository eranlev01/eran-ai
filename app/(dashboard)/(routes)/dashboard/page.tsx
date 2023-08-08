"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { tools } from "@/constants/page";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        <span className="text-violet-500"></span>
        <span className="bg-violet-500/10"></span>
        <span className="text-emerald-500"></span>
        <span className="bg-emerald-500/10"></span>
        <span className="text-pink-700"></span>
        <span className="bg-pink-700/10"></span>
        <span className="text-orange-700"></span>
        <span className="bg-orange-700/10"></span>
        <span className="text-green-700 bg-green-700/10"></span>
        {tools.map((tool) => (
          <Card
            onClick={() => (!tool.disabled ? router.push(tool.href) : null)}
            key={tool.href}
            className={`p-4 border-black/5 flex items-center justify-between ${
              !tool.disabled ? "hover:shadow-md" : ""
            } transition cursor-pointer`}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label} {tool.disabled ? " (not availble)" : ""}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
