

import SubscribeSection from "@/components/csrComponent/SubscribeSection";
import AllProject from "@/components/ssrComponent/AllProject";
import SiteFooter from "@/components/ssrComponent/SiteFooter";
const Page = async() => {
  
    return (
        <div>
        
            <AllProject />
            <SubscribeSection />
            <SiteFooter/>
        </div>
    );
};

export default Page;