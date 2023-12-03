async function getData(){
    const res =  await fetch('https://agency.teamrabbil.com/api/BrandList')
    const data = await res.json();
    return data
}
const Brands = async() => {
    const brands = await getData()
    console.log(brands);
    return (
        <div className="max-w-7xl mx-auto px-8">
            <div className="md:flex min-w-full  justify-around my-16">
                {
                    brands.map((brand, index)=>{
                        return <div key={index} className="flex justify-center mb-12 " >
                        <img src={brand['image']} className="" alt="" />
                    </div>
                    })
                }


            </div>
        </div>
    );
};

export default Brands;