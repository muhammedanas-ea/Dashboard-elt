import { AssignmentTypes } from "./type";

const AssignmentCard = ({assignmentProps}:{assignmentProps:AssignmentTypes}) => {
  return (
    <div className="mt-3">
      <div className="w-full h-[61px] shadow-sm rounded-[9px] dark:border-[#ffffff1c] border-[1px] border-[#0000001a] py-[9px] px-[14px]">
        <div>
          <h2 className="event-title">{assignmentProps.title}</h2>
          <p className="event-descrption">{assignmentProps.descrption}</p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
