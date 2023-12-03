async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllService");
  const data = await res.json();
  return data;
}
import Image from "next/image";
import SiteNavbar from "../csrComponent/SiteNavbar";

const Service = async () => {
  const allService = await getData();
  return (
    <div className="mb-[84px]">
      <div className=" bg-[#F0FDF4]  ">
        <SiteNavbar className=""></SiteNavbar>
        <div className="max-w-7xl px-8 mx-auto py-[70px]">
          <h1 className="text-[40px] font-semibold">Our Services</h1>
          <h1 className="font-semibold">{"Home > Our Services"}</h1>
        </div>
      </div>
      <div className="max-w-7xl mt-12 px-8 mx-auto gap-7 my-text">
        <span className="text-xl text-[#20B15A] ">Our All Services</span>
        <h1 className="text-3xl font-semibold max-w-[495px] my-5 mb-16">
          We Provide BestWeb design services
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {allService.map((service, index) => {
            return (
              <div className="p-[30px] mb-8" key={index}>
                <h1 className="text-[26px] font-semibold mb-7">
                  {service["title"]}
                </h1>
                <p className="text-sm text-[#9D9D9D] mb-8">{service["des"]}</p>
                <div className="flex justify-between mb-8">
                 
                  <Image
                  width={100}
                  height={100}
                    className="w-[385px] h-[165px] flex-shrink-0 rounded-lg"
                    src={service["image1"]}
                    alt=""
                  />
                  <Image
                  width={100}
                  height={100}
                    className="w-[143px] h-[165px] rounded-lg"
                    src={service["image2"]}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <Image
                  width={100}
                  height={100}
                    className="w-[257px] h-[263px] rounded-lg"
                    src={service["image3"]}
                    alt=""
                  />
                  <Image
                  width={100}
                  height={100}
                    className="w-[248px] h-[263px] rounded-lg"
                    src={service["image4"]}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
