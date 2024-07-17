import { useEffect, useState } from "react";
import ClassesTable from "@/components/classesTable/ClassesTable";
import AssignmentCard from "../../components/assignmentCard/AssignmentCard";
import CardTable from "@/components/cardTable/CardTable";
import { PaginationDemo } from "../../components/pagination/PaginationDemo.js";
import { Checkbox } from "@/components/ui/checkbox";
import { ClassesDataType } from "@/components/cardTable/type.js";
import { assignmentData } from "./common";

const Dashboard = () => {
  const [bookedOnly, setBookedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredClasses, setFilteredClasses] = useState<ClassesDataType[]>([]);
  const [fetchData, setFetchData] = useState(true);
  const perPage = 8;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_JSON_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredClasses(data);
        setFetchData(false);
      });
  }, [fetchData]);

  const totalPage: number = Math.ceil(filteredClasses.length / perPage);


  const handleCheckboxChange = () => {
    setBookedOnly(!bookedOnly);
    if (!bookedOnly) {
      fetch(`${import.meta.env.VITE_JSON_URL}?action=Book%20now`)
        .then((response) => response.json())
        .then((data) => {
          setFilteredClasses(data);
        });
    } else {
      setFetchData(true);
    }
  };

  const updateClassAction = (data: number) => {
    if (data) {
      setFetchData(true);
    }
  };

  const paginatedClasses = filteredClasses.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="p-4 md:ml-[14rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 sub-heading">
        <div className="p-4 shadow-sm rounded-[12px] dark:bg-[#1f2937] bg-[#ffff] dark:border-[#ffffff1c] border-[0.5px] border-[#0000001a] w-full">
          <div className="flex items-center justify-between dark:text-white">
            <div>
              <h2>Upcoming classes</h2>
              <p className="sub-heading-list">For next 7 days</p>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="list_fonts">Booked only</h2>
              <Checkbox
                checked={bookedOnly}
                onCheckedChange={handleCheckboxChange}
              />
            </div>
          </div>
          <ClassesTable
            classesProps={paginatedClasses}
            updateClassAction={updateClassAction}
          />
          <CardTable
            classesProps={paginatedClasses}
            updateClassAction={updateClassAction}
          />
        </div>
        <div className="p-4 shadow-sm dark:text-white rounded-[12px] dark:border-[#ffffff1c] dark:bg-[#1f2937]  bg-[#ffff] border-[0.5px] border-[#0000001a] w-full">
          <h2>Assignments</h2>
          {assignmentData.map((item) => (
            <AssignmentCard key={item.id} assignmentProps={item} />
          ))}
        </div>
      </div>
      <PaginationDemo
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        perPage={perPage}
      />
    </div>
  );
};

export default Dashboard;
