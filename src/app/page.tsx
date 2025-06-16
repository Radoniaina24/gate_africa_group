import Event from "@/component/Event/Event";
import GateAfricaPresentation from "@/component/GateAfricaPresentation/GateAfricaPresentation";
import Header from "@/component/Header/Header";
import RadioSection from "@/component/Radio/Radio";
import UniversitesSection from "@/component/UniversitesSection/UniversitesSection";

import GateOfAfricaDesign from "@/features/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <Event />
      <GateAfricaPresentation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        <GateOfAfricaDesign />
        <RadioSection />
        <UniversitesSection />
        {/* <Health /> */}
      </div>
    </>
  );
}
