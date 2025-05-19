import ContactSection from "@/component/Contact/Contact";
import Emedia from "@/component/EMEDIA";
import ProgramsSection from "@/component/EMEDIA/Program";
import Header from "@/component/Header/Header";
import Mission from "@/component/Mission/Mission";
import UST from "@/component/UST";

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <UST />
      <Emedia />
      <ProgramsSection />
      {/* <ContactSection /> */}
    </>
  );
}
