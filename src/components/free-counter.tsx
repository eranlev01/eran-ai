"use client";
import React, { useEffect, useState } from "react";
import { Zap } from "lucide-react";

import { MAX_FREE_COUNTS } from "@/src/constants/page";

import { Card, CardContent } from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import Button from "@/src/components/ui/button";


import { useProModal } from "@/src/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
}

const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  !mounted && (<></>);

  return (
    <>
      <div className="px-3">
        <Card className="bg-white/10 border-0">
          <CardContent className="py-6">
            <div className="text-center text-sm text-white mb-4 space-y-2">
              <p>
                {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
              </p>
              <Progress
                className="h-3"
                value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
              />
            </div>
            <Button
              onClick={proModal.onOpen}
              variant="premium"
              className="w-full"
            >
              Upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
    
    
};

export default FreeCounter;
