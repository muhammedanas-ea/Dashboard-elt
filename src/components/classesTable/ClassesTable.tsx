import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FiClock, FiExternalLink } from "react-icons/fi";
import Instructor from "../instrector/Instrector";
import Name from "../className/Name";
import DialogBox from "../dialogBox/DialogBox";
import { ClassesDataType } from "../cardTable/type";


const ClassesTable = ({
  classesProps,
  updateClassAction,
}: {
  classesProps: ClassesDataType[];
  updateClassAction: (id: number) => void;
}) => {
  return (
    <div className="mt-3 hidden md:block">
      <Table>
        <TableHeader className="bg-[#F6F6F6] dark:bg-[#151b24a2]">
          <TableRow className="dark:text-white">
            <TableHead>Class name</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[#ffff] dark:bg-[#1f2937]">
          {classesProps.map((classData, index) => (
            <TableRow className="dark:text-white" key={classData.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <h1>{index + 1}</h1>
                  <Name
                    name={classData.className}
                    time={classData.time}
                    date={classData.action}
                    status={classData.status}
                  />
                </div>
              </TableCell>
              <TableCell>
                <Instructor
                  instructorName={classData.instructor}
                  images={classData.image}
                  additionalDetails={classData.additionalDetails}
                />
              </TableCell>
              <TableCell>
                {classData.action === "Book now" ? (
                  <DialogBox
                    classData={classData.id}
                    updateClassAction={updateClassAction}
                  />
                ) : classData.action === "Join now" ? (
                  <Button className=" text-white" variant="default" size="sm">
                    join now <FiExternalLink size={15} />
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm">
                    {classData.action} <FiClock size={15} />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClassesTable;
