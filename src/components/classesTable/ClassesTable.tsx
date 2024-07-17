import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FiClock } from "react-icons/fi";
import Instructor from "../instrector/Instrector";
import Name from "../className/Name";
import DialogBox from "../dialogBox/DialogBox";
import { ClassesDataType } from "../cardTable/type";

const ClassesTable = ({classesProps}:{ classesProps: ClassesDataType[] }) => {
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
            <TableRow className="dark:text-white" key={index}>
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
                {classData.action === "Join now" ? (
                  <DialogBox />
                ) : classData.action === "Book now" ? (
                  <Button variant="outline" className="text-black font-bold dark:text-white" size="sm">
                    {classData.action}
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm">
                    {classData.duration} <FiClock size={15} />
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
