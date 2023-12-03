import SubscribeSection from "@/components/csrComponent/SubscribeSection";
import SiteFooter from "@/components/ssrComponent/SiteFooter";
import Testimonials from "@/components/ssrComponent/Testimonials";

const Page = () => {
    return (
        <div>
       
          <Testimonials />
          <SubscribeSection />
          <SiteFooter />
        </div>
    );
};

export default Page;