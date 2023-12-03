import SubscribeSection from "@/components/csrComponent/SubscribeSection";
import Service from "@/components/ssrComponent/Service";
import SiteFooter from "@/components/ssrComponent/SiteFooter";

const Page = () => {
    return (
        <div>
         <Service/>
         <SubscribeSection />
         <SiteFooter />
        </div>
    );
};

export default Page;