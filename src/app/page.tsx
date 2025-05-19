import ProgramsSection from "@/component/EMEDIA/Program";
import Header from "@/component/Header/Header";
import Mission from "@/component/Mission/Mission";
import Tabs from "@/component/Tabs/Tabs";

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <Tabs />
      <ProgramsSection />
    </>
  );
}
