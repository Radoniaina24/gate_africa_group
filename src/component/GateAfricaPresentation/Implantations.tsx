import { MapPin } from "lucide-react";
import React from "react";

export default function Implantations() {
  const locations = [
    { name: "Madagascar", status: "Implanté", color: "bg-red-500" },
    { name: "Île Maurice", status: "Implanté", color: "bg-blue-500" },
    {
      name: "International",
      status: "En expansion",
      color: "bg-gradient-to-r from-red-500 to-blue-500",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-10 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Nos Implantations
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-6">
              <div
                className={`w-24 h-24 ${location.color} rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {location.name}
            </h3>
            <p className="text-gray-600 font-medium">{location.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
