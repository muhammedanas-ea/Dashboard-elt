import ClassesTable from "@/components/classesTable/ClassesTable";
import AssignmentCard from "../../components/assignmentCard/AssignmentCard";
import { assignmentData } from "./common";
import { Checkbox } from "@/components/ui/checkbox";
import CardTable from "@/components/cardTable/CardTable";

const Dashboard = () => {
  return (
    <div className="p-4 md:ml-[14rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 sub-heading">
        <div className="p-4 shadow-sm rounded-[12px] bg-[#ffff] border-[0.5px] border-[#0000001a]">
          <div className="flex items-center justify-between ">
            <div>
              <h2>Upcoming classes</h2>
              <p className="sub-heading-list">For next 7 days</p>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="list_fonts">Booked only</h2>
              <Checkbox />
            </div>
          </div>
          <ClassesTable />
          <CardTable />
          <CardTable />
          <CardTable />
        </div>
        <div className="p-4 shadow-sm rounded-[12px] bg-[#ffff] border-[0.5px] border-[#0000001a]">
          <h2>Assignments</h2>
          {assignmentData.map((item) => {
            return <AssignmentCard key={item.id} assignmentProps={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;