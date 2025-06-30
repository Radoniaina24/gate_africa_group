import { Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Header() {
  const t = useTranslations("gate_presentation");
  return (
    <div className="relative overflow-hidden pt-10">
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-10 rounded-full translate-x-40 translate-y-40 animate-pulse delay-1000"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6 ">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-300 bg-opacity-20 rounded-full mb-8 backdrop-blur-sm">
            <Building2 className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-5xl md:text-5xl font-bold  mb-4 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-200 to-blue-200 mx-auto mb-6"></div>
          <p className="text-xl md:text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            {t("description_title")}
          </p>
        </div>
      </div>
    </div>
  );
}
