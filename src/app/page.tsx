import ContactForm from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";

import Header from "@/component/Header/Header";
import Healthy from "@/component/Healthy/Healthy";
import Mission from "@/component/Mission/Mission";
import Tabs from "@/component/Tabs/Tabs";

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <Tabs />
      <Healthy />
      <ContactForm />
      <Footer />
    </>
  );
}
