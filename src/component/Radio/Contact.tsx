import { Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  {
    title: "Email",
    content: "contact@gateafricagroup.com",
    icon: <Mail className="w-6 h-6 text-white" />,
    bgColor: "bg-red-600",
  },
  {
    title: "Téléphone",
    content: " +261 38 38 107 80",
    icon: <Phone className="w-6 h-6 text-white" />,
    bgColor: "bg-blue-700",
  },
  {
    title: "Adresse",
    content: "Nanisana, Antananarivo 101, Madagascar",
    icon: <MapPin className="w-6 h-6 text-white" />,
    bgColor: "bg-green-600",
  },
];

export default function Contact() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
      {contactItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 ${item.bgColor}`}
          >
            {item.icon}
          </div>
          <h4 className="font-semibold text-lg text-white mb-1">
            {item.title}
          </h4>
          <p className="text-white text-sm">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
