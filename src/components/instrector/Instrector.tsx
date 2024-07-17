import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import InstructorTypes from "./type";

const Instructor = ({instructorName,images,additionalDetails}:InstructorTypes) => {
  return (
    <div className="flex items-center gap-3 dark:text-white">
      <div className="w-[36px] h-[36px]">
        <Avatar className="rounded-3xl">
          <AvatarImage
            src={images}
            alt="profile"
            className="rounded-3xl object-cover w-full h-full"
          />
          <AvatarFallback>profile</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h2 className="font_name">
          <span className="md:hidden">by</span> {instructorName}
        </h2>
        <p className="sub-heading-list hidden md:block">{additionalDetails}</p>
      </div>
    </div>
  );
};
export default Instructor;
