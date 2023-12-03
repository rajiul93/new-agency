import Image from "next/image";
import SiteNavbar from "../csrComponent/SiteNavbar";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");
  const data = await res.json();
  return data;
}

const Team = async () => {
  const teams = await getData();

  return (
   
      <div className="mb-[84px]">
        <div className=" bg-[#F0FDF4]  ">
          <SiteNavbar className=""></SiteNavbar>
          <div className="max-w-7xl px-8 mx-auto py-[70px]">
            <h1 className="text-[40px] font-semibold">Team</h1>
            <h1 className="font-semibold">{"Home > Team"}</h1>
          </div>
        </div>
        <div className="max-w-7xl mt-12 px-8 mx-auto gap-7 my-text">
          <span className="text-xl text-[#20B15A] ">Our Team Member</span>
          <h1 className="text-3xl font-semibold max-w-[495px] my-5 mb-16">
            Check our awesome team members
          </h1>
          <div className="grid grid-cols-3 gap-8">
            {teams.slice(0, 3).map((team, index) => {
              return (
                <div key={index} className="border rounded-[20px]">
                  <Image width={100}
                  height={100}
                    className="w-[392px] h-387px] rounded-t-[20px]"
                    src={team["image"]}
                    alt=""
                  />
                  <h1 className="text-[30px] text-center py-8 font-semibold cursor-pointer">{team.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    
  );
};

export default Team;
