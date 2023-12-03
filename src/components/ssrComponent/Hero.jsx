import SiteNavbar from "../csrComponent/SiteNavbar";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const data = await res.json();
  return data;
}

const Hero = async () => {
  const data = await getData();
  
  return (
    <div className=" pb-8 bg-[#F0FDF4]" style={{}}>
      <SiteNavbar />
      <div className="max-w-7xl mx-auto px-8 flex gap-7 align-middle items-center">
        <div className="w-1/2 ">
          <h1 className="not-italic text-5xl font-bold leading-[65px] w-[550px]">
            Increase Your Customers Loyalty and Satisfaction
          </h1>
          <p className="text-sm w-[550px]">
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </p>
          <button className="btn-2 px-[30px] py-[20px] mt-7  leading-normal font-medium">
            Get Started
          </button>
        </div>
        <div className="w-1/2 py-7">

          <div className="flex gap-5">
            <img className="rounded-md w-[408px]  h-[271px] " src={data["image1"]} alt="" />
           
            <img className="rounded-md w-[180px] h-[271px] " src={data["image2"]} alt="" />
            
          </div>
          <div className="rounded-md flex gap-5 mt-7">
            <img className="w-[246px] h-[164px] " src={data["image3"]} alt="" />
            
            <img className="rounded-md w-[345px] h-[164px] " src={data["image4"]} alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
