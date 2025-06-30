import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function PresidentMessage() {
  const t = useTranslations("president");
  const paragraphs: string[] = t.raw("paragraphs");
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <div className="text-gray-800 leading-relaxed space-y-3">
              <div>
                <h2 className="text-xl font-bold text-blue-600 mb-2">
                  {t("name")}
                </h2>
                <p className="text-orange-500 font-semibold mb-4">
                  {t("role")}
                </p>
              </div>

              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className={
                    index === paragraphs.length - 1
                      ? "font-semibold text-sm text-blue-600"
                      : "text-sm"
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* President Image - Right Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {/* President Image */}
              <Image
                width={500}
                height={500}
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1751259926/513821233_729096259709575_5086806052839970218_n_fgvldq.jpg"
                alt={`${t("name")} - ${t("role")}`}
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
