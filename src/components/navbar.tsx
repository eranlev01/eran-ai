import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/src/components/mobile-sidebar";
import { getApiLimitCount } from "@/src/lib/api-limit";
import { checkSubscription } from "@/src/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
