import Image from "next/image";
import SiteNavbar from "../csrComponent/SiteNavbar";

async function getData() {
    const res = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
    const data = await res.json();
    return data;
  }
const Testimonials = async() => {
  const testimonials = await getData();

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
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="border shadow-md w-[392px] h-[440px] text-center rounded-[20px] flex flex-col justify-center items-center align-middle">
                <Image
                width={100}
                height={100}
                  className="w-[100px] h-100px] rounded-[20px] mb-7"
                  src={testimonial["image"]}
                  alt=""
                />
                <p className="text-[#9D9D9D] text-sm font-normal leading-7 w-[346px]">{testimonial.msg}</p>
                <h1 className="text-[26px] text-center py-8 font-semibold uppercase ">{testimonial.name}</h1>
                <h2 className="uppercase text-[16px]">{testimonial.designation}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    );
};

export default Testimonials;