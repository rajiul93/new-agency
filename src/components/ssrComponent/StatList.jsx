async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/StatList");
  const data = await res.json();
  return data;
}

import { FaProjectDiagram } from "react-icons/fa";
import { FaRegHandPeace, FaUserGroup } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
const StatList = async () => {
  const statList = await getData();
  return (
    <div className="my-[66px]">
      <div className="flex gap-7 max-w-7xl mx-auto px-8 my-text ">
        <div className="w-[288px] h-[290px] bg-white border rounded-[20px] drop-shadow-md flex flex-col justify-center align-middle items-center">
          <span className="w-[100px] h-[100px] bg-[#D7F5DC] flex justify-center align-middle items-center rounded-md"><FaUserGroup className="w-[39.167px] h-[26.25px]" /></span>
          <h2 className="text-[30px] font-semibold mt-5 "> {statList["followers"]}</h2>
          <span className="text-[16px] font-medium">Followers</span>
        </div>
        <div className="w-[288px] h-[290px] bg-white rounded-[20px]  drop-shadow-md flex flex-col justify-center align-middle items-center">
          <span className="w-[100px] h-[100px] bg-[#D7F5DC] flex justify-center align-middle items-center rounded-md">
          <FaRegHandPeace className="w-[39.167px] h-[26.25px]" />
          </span>
          <h2 className="text-[30px] font-semibold mt-5 ">{statList["solved"]}</h2>
          <span className="text-[16px] font-medium">Solved Problems</span>
        </div>
        <div className="w-[288px] h-[290px] bg-white rounded-[20px]  drop-shadow-md flex flex-col justify-center align-middle items-center">
          <span className="w-[100px] h-[100px] bg-[#D7F5DC] flex justify-center align-middle items-center rounded-md">
          <IoMdHappy className="w-[39.167px] h-[26.25px]" />
          </span>
          <h2 className="text-[30px] font-semibold mt-5 ">{statList["customers"]}</h2>
          <span className="text-[16px] font-medium">Happy Customers</span>
        </div>
        <div className="w-[288px] h-[290px] bg-white rounded-[20px]  drop-shadow-md flex flex-col justify-center align-middle items-center">
          <span className="w-[100px] h-[100px] bg-[#D7F5DC] flex justify-center align-middle items-center rounded-md">
          <FaProjectDiagram className="w-[39.167px] h-[26.25px]" />
          </span>
          <h2 className="text-[30px] font-semibold mt-5 ">{statList["projects"]}</h2>
          <span className="text-[16px] font-medium">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default StatList;
