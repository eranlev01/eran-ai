import Image from "next/image";

import { imagesUrl } from "@/constants/page";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src={imagesUrl.logo}
          loader={() => imagesUrl.logo}
          unoptimized={true}
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">Let me think...</p>
    </div>
  );
};

export default Loader;