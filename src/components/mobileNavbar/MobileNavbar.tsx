import { Link } from "react-router-dom"
import { mobileNavbarList } from "./common"

const MobileNavbarList = () => {
  return (
    <div className="w-full border-[1px] border-t-[#0000001a] bg-[#ffff] sticky bottom-0 md:hidden">
      <div className="mx-auto p-2 ">
        <ul className="flex gap-6 items-center sm:justify-center overflow-x-auto">
          {mobileNavbarList.map((item) => (
            <li key={item.id} className="hover:bg-gray-200 rounded-sm">
              <Link
                to={item.link}
                className="flex flex-col gap-[10px] items-center p-2 dark:hover:bg-gray-700 group"
              >
                <div className="w-[34px] h-[34px] rounded-3xl bg-[#EFEDEA] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="mobile_heading whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbarList
