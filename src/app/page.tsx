import { CollaborationSection } from "@/component/Collaboration/Collaboration";
import CompanySection from "@/component/Company/Company";
import ContactForm from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";

import Header from "@/component/Header/Header";
import Healthy from "@/component/Healthy/Healthy";
import Landmark from "@/component/Landmark/Landmark";
import Mission from "@/component/Mission/Mission";
import RadioSection from "@/component/Radio/Radio";
import SophysSection from "@/component/Sophys/Sophys";
import Tabs from "@/component/Tabs/Tabs";

export default function Home() {
  return (
    <>
      <Header />
      <CompanySection />
      <Mission />
      <Tabs />
      <CollaborationSection />
      <Healthy />
      <RadioSection />
      <Landmark />
      <SophysSection />
      {/* <VideoSection /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
