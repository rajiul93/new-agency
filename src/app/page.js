import SubscribeSection from "@/components/csrComponent/SubscribeSection";
import Brands from "@/components/ssrComponent/Brands";
import FeaturedProject from "@/components/ssrComponent/FeaturedProject";
import Hero from "@/components/ssrComponent/Hero";
import HowWorks from "@/components/ssrComponent/HowWorks";
import SiteFooter from "@/components/ssrComponent/SiteFooter";
import StatList from "@/components/ssrComponent/StatList";


export default function Home() {
  return (
    <div>
      {/* <SiteNavbar/> */}
      <Hero />
      <Brands/>
      <HowWorks />
      <StatList />
      <FeaturedProject />
      <SubscribeSection />
      <SiteFooter />
    </div>
  )
}
