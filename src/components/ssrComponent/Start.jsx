async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const data = await res.json();
  return data;
}

const Start = async () => {
  const data = await getData();
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex gap-5">
        <div className="md:w-1/2 w-full  h-[500px] flex justify-start align-middle items-center  ">
          <div className="-mt-12">
            <h1 className="text-4xl">{data["title"]}</h1>
            <p className="text-xl mt-6">{data["description"]}</p>
            <div className="flex gap-4 mt-6">
              <button className="btn-1">Get Started</button>
              <button className="btn-2">How it works</button>
            </div>
          </div>
        </div>
        <div className="h-[500px] md:flex align-middle items-center hidden ">
          <div>
            <div className="flex align-middle items-center gap-6 ">
              <div>
                <img
                  className=" w-[400px] object-cover h-[200px] rounded-md"
                  src={data["image1"]}
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" w-[200px] object-cover h-[200px] rounded-md"
                  src={data["image2"]}
                  alt=""
                />
              </div>
            </div>
            <div className="flex align-middle items-center gap-6 mt-8">
              <div>
                <img
                  className=" w-[200px] object-cover h-[200px] rounded-md"
                  src={data["image3"]}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-[400px] object-cover h-[200px] rounded-md"
                  src={data["image4"]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
