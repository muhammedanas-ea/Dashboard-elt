import { MdDashboard } from "react-icons/md";
import { FiBarChart2, FiFileText } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const mobileNavbarList = [
  {
    id: 1,
    icon: <MdDashboard size={17} />,
    name: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    icon: <FiFileText size={17} />,
    name: "Assignments",
    link: "/",
  },
  {
    id: 3,
    icon: <FiBarChart2 size={17} />,
    name: "Performance",
    link: "/",
  },
  {
    id: 4,
    icon: (
      <Avatar>
        <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" alt="profile" />
        <AvatarFallback>profile</AvatarFallback>
      </Avatar>
    ),
    name: "profile",
    link: "/",
  },
];
