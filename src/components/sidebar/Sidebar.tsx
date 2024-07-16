import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { dshboardList } from './common';
import { AvatarFallback } from "@radix-ui/react-avatar";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="hidden md:block fixed top-0 left-0 z-40 border-[1px] border-l-[#FFFFFF] w-[220px] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <Link to="/" className="flex items-center pl-2.5 mb-3">
          <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </h1>
        </Link>
        <div className="pl-2.5 h-[133px] flex flex-col justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            John Doe
          </h4>
          <h4 className="scroll-m-20 list_fonts">Intermediate</h4>
        </div>
        <ul className="space-y-2 font-medium">
          {dshboardList.map((item) => (
            <li key={item.id} className="hover:bg-gray-200 rounded-sm">
              <Link
                to={item.link}
                className="flex gap-[10px] items-center p-2 dark:hover:bg-gray-700 group"
              >
                <div className="w-[34px] h-[34px] rounded-3xl bg-[#EFEDEA] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="list_fonts flex-1 ml-3 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
