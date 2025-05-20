import ContactForm from "@/component/Contact/Contact";
import ProgramsSection from "@/component/EMEDIA/Program";
import Footer from "@/component/Footer/Footer";

import Header from "@/component/Header/Header";
import Mission from "@/component/Mission/Mission";
import Tabs from "@/component/Tabs/Tabs";

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <Tabs />
      {/* <ProgramsSection /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
