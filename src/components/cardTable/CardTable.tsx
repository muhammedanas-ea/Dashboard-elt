import { FiClock, FiExternalLink } from "react-icons/fi";
import Name from "../className/Name";
import Instructor from "../instrector/Instrector";
import { Button } from "../ui/button";
import DialogBox from "../dialogBox/DialogBox";
import { ClassesDataType } from "./type";

const CardTable = ({
  classesProps,
  updateClassAction,
}: {
  classesProps: ClassesDataType[];
  updateClassAction: (id: number) => void;
}) => {
  return (
    <>
      {classesProps.map((item) => {
        return (
          <div
            key={item.id}
            className="border-[1px] dark:border-[#ffffff1c] border-[#E2E2E2] mt-3 rounded-[12px] md:hidden"
          >
            <div className="p-4 flex flex-col gap-3 ">
              <Name
                name={item.className}
                time={item.time}
                date={item.action}
                status={item.status}
              />
              <Instructor
                instructorName={item.instructor}
                images={item.image}
                additionalDetails={item.additionalDetails}
              />
              {item.action === "Join now" ? (
                <DialogBox
                  classData={item.id}
                  updateClassAction={updateClassAction}
                />
              ) : item.action === "Book now" ? (
                <Button className=" text-white" variant="default" size="sm">
                  join now <FiExternalLink size={15} />
                </Button>
              ) : (
                <Button className="dark:text-white" variant="ghost" size="sm">
                  {item.action} <FiClock size={15} />
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardTable;
