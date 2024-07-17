import { FiExternalLink } from "react-icons/fi";
import Name from "../className/Name";
import Instructor from "../instrector/Instrector";
import { Button } from "../ui/button";

const CardTable = () => {
  return (
    <div className="border-[1px] dark:border-[#ffffff1c] border-[#E2E2E2] mt-3 rounded-[12px] md:hidden">
      <div className="p-4 flex flex-col gap-3 ">
        <Name />
        <Instructor />
        <Button variant="default" size="sm">
          join now <FiExternalLink size={15} />
        </Button>
      </div>
    </div>
  );
};

export default CardTable;
