import HomeSectionOne from "@/components/home/SectionOne";
import HomeSectionThree from "@/components/home/SectionThree";
import HomeSectionTwo from "@/components/home/SectionTwo";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
    </div>
  );
}
