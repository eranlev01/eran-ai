/* eslint-disable react/no-unescaped-entities */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import { testimonials } from "@/constants/page";
import { Quote } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export const LandingContent = () => {

  const { isSignedIn } = useAuth();

  return (
    <div className="px-10 pb-20 flex items-center flex-col">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <p className="antialiased sm:subpixel-antialiased md:antialiased text-center text-sm md:text-xl font-light text-zinc-400 mb-20 w-[70%]">
        Don't miss out on the chance to join this growing community of happy
        customers and experience the transformative power of AI for yourself.
        Read on to see how our cutting-edge AI technology has made a meaningful
        difference in their lives, and let their success stories inspire your
        own AI journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => {
          return (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex justify-between gap-x-2">
                  <div className="flex items-center gap-x-2">
                    <Image
                      alt=""
                      loader={() => item.image}
                      src={item.image}
                      width={500}
                      height={500}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg ">{item.name}</p>
                      <p className="text-zinc-400 text-sm">{item.title}</p>
                    </div>
                  </div>
                  <Quote />
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
