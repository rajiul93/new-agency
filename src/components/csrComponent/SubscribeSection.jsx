
const SubscribeSection = () => {
    return (
        <div>
            <div className="text-center my-32 my-text">
                <p className="text-[#20B15A] text-xl mb-6 ">SUBSCRIBE</p>
                <h1 className="text-[30px] font-semibold w-[495px] mx-auto">
                Subscribe To Get The Latest News About Us
                </h1>
                <p className="text-sm text-[#8B8B8B] mb-10">
                Please drop your email below to get daily update about what we do
                </p>
                <div className=" flex justify-between px-4 py-3 border border-slate-950 rounded-[20px] w-[596px] mx-auto">
                    <input className="w-[380px] outline-none text-xl" placeholder="Enter Your Email Address" type="text" />
                    <button className="rounded-xl   text-xl font-medium  bg-[#F55F1D] text-white py-2 px-6 ">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;