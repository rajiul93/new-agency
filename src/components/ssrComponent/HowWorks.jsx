async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
  const data = await res.json();
  return data;
}
import { FaArrowRight, FaRegMessage } from "react-icons/fa6";
const HowWorks = async() => {
const worksList = await getData()
  return (
    <div>
      <div className="max-w-7xl px-8 mx-auto gap-7 my-text">
        <span className="text-xl text-[#20B15A] ">Work List</span>
        <h1 className="text-3xl font-semibold max-w-[495px] my-5">We provide the Perfect Solution to your business growth</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-12 ">
            {worksList.map((work, index)=>{
                return <div className="flex flex-col gap-3 w-[299px]  py-10 px-8" key={index}>
                    <div className="bg-slate-300 w-10 h-10 rounded-md p-2">
                    <FaRegMessage className="text-2xl " />
                    </div>
                    <h1 className="text-xl font-semibold">{work['title']}</h1>
                    <p className="text-sm">{work['des']}</p>
                    <div className="flex align-middle items-center gap-2 leading-5 pl-5">
                    <span className="text-[18px] font-normal ">Learn More</span>
                    <FaArrowRight />
                    </div>
                </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
