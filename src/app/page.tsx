import Event from "@/component/Event/Event";
import GateAfricaPresentation from "@/component/GateAfricaPresentation/GateAfricaPresentation";
import Header from "@/component/Header/Header";
import Health from "@/component/Health";
import RadioSection from "@/component/Radio/Radio";
import UniversitesSection from "@/component/UniversitesSection/UniversitesSection";

import GateOfAfricaDesign from "@/features/Blog";
import FlowingMenu from "@/features/Blog/FlowingMenu";
export default function Home() {
  return (
    <>
      <Header />
      <Event />
      <GateAfricaPresentation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        <GateOfAfricaDesign />
        <FlowingMenu />
        <RadioSection />
        <UniversitesSection />
        <Health />
      </div>
    </>
  );
}
