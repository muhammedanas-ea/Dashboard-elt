import NameTypes from "./type";

const Name = ({ name, time, date, status }: NameTypes) => {
  return (
    <div className="dark:text-white flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
      <h2 className="name_headind md:font_name">{name}</h2>
      {time ? (
        <p className="sub-heading-list">{time}</p>
      ) : date ? (
        <p className="sub-heading-list">{date}</p>
      ) : status ? (
        <p className="sub-heading-list">{status}</p>
      ) : null}
    </div>
  );
};
export default Name;
