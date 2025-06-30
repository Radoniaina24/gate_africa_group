import {
  Briefcase,
  Cpu,
  GraduationCap,
  Heart,
  MapPin,
  Wheat,
  TrendingUp,
  CalendarCheck,
  Megaphone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ProfessionalLayout() {
  const t = useTranslations("gate_presentation");
  const sectors = (t: ReturnType<typeof useTranslations>) => [
    {
      icon: GraduationCap,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      name: t("sectors.education.name"),
      description: t("sectors.education.description"),
    },
    {
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      name: t("sectors.health.name"),
      description: t("sectors.health.description"),
    },
    {
      icon: Cpu,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      name: t("sectors.tech.name"),
      description: t("sectors.tech.description"),
    },
    {
      icon: Megaphone,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      name: t("sectors.media.name"),
      description: t("sectors.media.description"),
    },
    {
      icon: Wheat,
      color: "text-green-600",
      bgColor: "bg-green-50",
      name: t("sectors.agriculture.name"),
      description: t("sectors.agriculture.description"),
    },
    {
      icon: Briefcase,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      name: t("sectors.business.name"),
      description: t("sectors.business.description"),
    },
    {
      icon: CalendarCheck,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      name: t("sectors.event.name"),
      description: t("sectors.event.description"),
    },
  ];

  const locations = (t: ReturnType<typeof useTranslations>) => [
    {
      code: "mg",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      name: t("locations.mg.name"),
      status: t("locations.mg.status"),
    },
    {
      code: "mu",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      name: t("locations.mu.name"),
      status: t("locations.mu.status"),
    },
    {
      code: "intl",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      name: t("locations.intl.name"),
      status: t("locations.intl.status"),
      icon: "🚀",
    },
  ];
  const sectorItems = sectors(t);
  const locationItems = locations(t);
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10 place-items-center">
          {/* Left Side - Activities */}
          <div className=" md:col-span-2">
            <div className="sticky top-6">
              <div className="mb-3">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full border border-blue-200 mb-3">
                  <Briefcase className="w-3 h-3 mr-1 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700">
                    {t("activity")}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t("activity_title")}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("activity_description")}
                </p>
              </div>

              <div className="">
                {sectorItems.map((sector, index) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={index}
                      className="   transition-shadow duration-300 "
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 ${sector.bgColor} rounded-xl flex items-center justify-center`}
                        >
                          <Icon className={`w-5 h-5 ${sector.color}`} />
                        </div>
                        <h3 className="text-md font-semibold text-gray-900">
                          {sector.name}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm pl-12 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right Side - Implementations */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-6">
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 shadow-lg border border-blue-100/50 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-3">
                    <MapPin className="w-3 h-3 mr-1 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700">
                      {t("implantation")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {t("implantation_title")}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("implantation_description")}
                  </p>
                </div>

                <div className="space-y-3">
                  {locationItems.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-blue-50/50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="relative">
                        <div
                          className={`rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {location.code ? (
                            <Image
                              src={`https://flagcdn.com/w40/${location.code}.png`}
                              alt={`Drapeau de ${location.name}`}
                              height={50}
                              width={50}
                              className="w-6 h-4 object-cover mx-auto mb-2 rounded-sm shadow"
                            />
                          ) : (
                            location.icon
                          )}
                        </div>
                        {index < 2 && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                          {location.name}
                        </h3>
                      </div>
                      <span className="inline-flex px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {location.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {t("expansion_title")}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {t("expansion_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
