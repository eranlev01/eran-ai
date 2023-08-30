import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { imagesUrl } from '@/src/constants/page'

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        className="p-1"
        src={imagesUrl.logo}
      />
    </Avatar>
  );
};

export default BotAvatar;