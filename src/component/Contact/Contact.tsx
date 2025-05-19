"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Nom requis"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  message: Yup.string().required("Message requis"),
});

const ContactForm = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-white text-xl" />,
      title: "Adresse",
      content: "Nanisana, Antananarivo 101, Madagascar",
      bgColor: "bg-red-500",
    },
    {
      icon: <FaPhone className="text-white text-xl" />,
      title: "Téléphone",
      content: "+230 5488 4377",
      bgColor: "bg-green-500",
    },
    {
      icon: <FaEnvelope className="text-white text-xl" />,
      title: "Email",
      content: "contact@gateafricagroup.com",
      bgColor: "bg-sky-600",
    },
  ];
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formulaire de contact */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left"
          >
            Envoyez-nous un message
          </motion.h2>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              actions.resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nom
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="5"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition w-full"
                >
                  Envoyer
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {/* Image illustrative responsive */}
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747658146/2149854953_gmhi5v.jpg"
            alt="Contact illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        {contactItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 ${item.bgColor}`}
            >
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg text-gray-800 mb-1">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactForm;
