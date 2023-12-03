async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  const data = await res.json();
  return data;
}
const FeaturedProject = async () => {
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const featuredProject = await getData();
  const dateStringZeroIndex = featuredProject[0].updated_at;
  const dateObjectZeroIndex = new Date(dateStringZeroIndex);
  const monthZeroIndex = dateObjectZeroIndex.getMonth() + 1;

  
  return (
    <div className="bg-[#F0FDF4] my-text">
      <div className="max-w-7xl px-8 mx-auto gap-7 my-text py-16 ">
        <span className="text-xl text-[#20B15A] ">Featured Project</span>
        <h1 className="text-3xl font-semibold max-w-[495px] mb-16 mt-5">
          We provide the Perfect Solution to your business growth
        </h1>
        <div className="grid grid-cols-2 gap-8  align-middle">
          <div>
            <div className="w-full flex items-center align-middle rounded-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[500px] p-12">
              <img
                className="rounded-[20px]"
                src={featuredProject[0].image}
                alt=""
              />
            </div>
              <h1 className="text-sm mt-4">App Design  - {mS[monthZeroIndex]} {dateObjectZeroIndex.getDate()},   {dateObjectZeroIndex.getFullYear()}</h1>
            <h1 className="text-[#2E3E5C] text-[18px] font-bold mt-2">
              {featuredProject[0].title}
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {featuredProject.slice(1, 5).map((project, ind) => {
              const dateString = project["updated_at"];
              const dateObject = new Date(dateString);

              const month = dateObject.getMonth() + 1;
             
              return (
                <div key={ind} className="">
                  <img
                    className=" w-[287px] h-[188px] rounded-[20px]"
                    src={project.image}
                    alt=""
                  />
                  <div className="flex gap-3 text-sm mt-2  text-[#2E3E5C]">
                    <span>App Design</span>
                    <span>
                      - {mS[month]}- {dateObject.getDate()},
                      {dateObject.getFullYear()}
                    </span>
                  </div>
                  <h1 className="text-[#2E3E5C] text-[18px] font-bold mt-2">
                    {project.title}
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

export default FeaturedProject;
