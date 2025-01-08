import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Featured from "@/components/Featured";
import HeroTitle from "@/components/HeroTitle";
import HorizontalImages from "@/components/HorizontalImages";
import LatestNews from "@/components/LatestNews";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <div className="z-0">
        <HeroTitle />
        <CaseStudies />
        <About />
        <Featured />
        <Works />
        <HorizontalImages />
        <LatestNews />
      </div>
    </>
  );
}
