import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Instructor = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[36px] h-[36px]">
        <Avatar className="rounded-3xl">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-3xl"
          />
          <AvatarFallback>profile</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h2 className="font_name">
          <span className="md:hidden">by</span> Suriya R
        </h2>
        <p className="sub-heading-list hidden md:block">Additional details</p>
      </div>
    </div>
  );
};
export default Instructor;
