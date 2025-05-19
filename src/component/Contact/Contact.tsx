"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import React from "react";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Nom requis"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  message: Yup.string().required("Message requis"),
});

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-sky-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formulaire */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left"
          >
            Contactez-Nous
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
                    className="mt-1 w-full p-3 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
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

        {/* Informations de contact */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex items-start gap-4">
            <PhoneCall className="w-8 h-8 text-sky-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Appelez-nous
              </h4>
              <p className="text-gray-600">+261 32 12 345 67</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-sky-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Emplacement
              </h4>
              <p className="text-gray-600">
                Lot II D 123 Antananarivo, Madagascar
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-sky-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Heures de travail
              </h4>
              <p className="text-gray-600">Lun - Ven : 08h00 - 17h00</p>
              <p className="text-gray-600">Samedi : 08h00 - 12h00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
