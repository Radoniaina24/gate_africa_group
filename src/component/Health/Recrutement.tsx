"use client";
/* eslint-disable */
import React from "react";
import { useTranslations } from "next-intl";
import {
  Globe,
  Users,
  Building,
  UserCheck,
  Network,
  Calendar,
  Briefcase,
  Target,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import AlbumCarrefour from "./Album/AlbumCarrefour";
import { motion } from "framer-motion";

export default function GateAfricaRecruitment() {
  const t = useTranslations("gateAfricaRecruitment");

  const cooperationAxes = t.raw("cooperationAxes.items") as {
    title: string;
    description: string;
  }[];

  const services = t.raw("services.items") as string[];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Network className="w-6 h-6 text-red-500" />
            </div>
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              {t.rich("hero.title", {
                span: (chuncks) => (
                  <span className="text-red-600">{chuncks}</span>
                ),
              })}
            </h1>
          </div>
          <div className="max-w-5xl mx-auto py-16">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 to-red-600"></div>

              <div className="flex flex-col gap-5 lg:flex-row items-center">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-400/20">
                    <h3 className="text-red-400 font-semibold mb-3">
                      {t("hero.subtitle1")}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {t("hero.text1")}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-red-400 rounded-full border-4 border-gray-900 relative z-10"></div>
                <div className="w-full lg:w-1/2 pl-0 lg:pl-8">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-400/20">
                    <h3 className="text-red-400 font-semibold mb-3">
                      {t("hero.subtitle2")}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {t("hero.text2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AXES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("cooperationAxes.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cooperationAxes.map((axis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 mx-auto mb-4">
                  <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                    {/* Remplacer dynamiquement si nécessaire */}
                    {
                      [
                        <Building />,
                        <Users />,
                        <UserCheck />,
                        <Handshake />,
                        <Globe />,
                      ][index]
                    }
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {axis.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {axis.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t("services.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
            <div className="grid md:grid-cols-2 gap-8 col-span-2">
              {services.map((desc, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl text-sm p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 text-start">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 flex-shrink-0">
                      <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                        {
                          [
                            <Target />,
                            <UserCheck />,
                            <Calendar />,
                            <Briefcase />,
                          ][index]
                        }
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Image
              src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750685397/africa_stjjic.jpg"
              alt="Gate Africa Business"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        <AlbumCarrefour />
      </div>

      <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
    </div>
  );
}
