import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  XOctagon
} from "lucide-react";

const MAX_FREE_COUNTS = 5;

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    disabled: false,
    disabledIcon: XOctagon
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    disabled: true,
    disabledIcon: XOctagon
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
    disabled: true,
    disabledIcon: XOctagon
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
    disabled: true,
    disabledIcon: XOctagon
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
    disabled: false,
    disabledIcon: XOctagon
  },
];

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    disabled: false,
    disabledIcon: XOctagon
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    disabled: false,
    disabledIcon: XOctagon
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
    disabled: true,
    disabledIcon: XOctagon
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
    disabled: true,
    disabledIcon: XOctagon
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
    disabled: true,
    disabledIcon: XOctagon
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
    disabled: false,
    disabledIcon: XOctagon
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const imagesUrl = {
  empty: "https://eran-ai-images.s3.us-east-2.amazonaws.com/empty.png",
  logo: "https://eran-ai-images.s3.us-east-2.amazonaws.com/logo.png",

};


export { routes, tools, testimonials, imagesUrl, MAX_FREE_COUNTS };
