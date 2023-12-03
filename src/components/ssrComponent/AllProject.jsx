import Image from "next/image";
import SiteNavbar from "../csrComponent/SiteNavbar";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllProject");
  const data = await res.json();
  return data;
}

const AllProject = async () => {
  const allProject = await getData();

  return (
    <div>
      <div>
        <div className=" bg-[#F0FDF4] ">
         <SiteNavbar className=''></SiteNavbar>
          <div className="max-w-7xl px-8 mx-auto py-[70px]">
            <h1 className="text-[40px] font-semibold">All Project</h1>
            <h1 className="font-semibold">{"Home > All Project"}</h1>
          </div>
        </div>
        <div className="max-w-7xl mt-12 px-8 mx-auto gap-7 my-text">
          <span className="text-xl text-[#20B15A] ">All Project</span>
          <h1 className="text-3xl font-semibold max-w-[495px] my-5">
            Better Agency/SEO Solution At Your Fingertips
          </h1>
          <div className="grid grid-cols-2 gap-8">
            {allProject.slice(0,6).map((project, index) => {
              return (
                <div className="p-10 shadow-lg rounded-[20px]" key={index}>
                  <Image className="w-full rounded-2xl" width={100} height={100} src={project.image} alt="" />
                  <h1 className="text-[26px] font-semibold  my-7">
                    Lorem ipsum dolor sit consectutar
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
