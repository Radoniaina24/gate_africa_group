"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
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
        {/* Formulaire de contact */}
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

        {/* Carte Google Maps */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center lg:text-left">
            Localisation
          </h3>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19806.78595013018!2d47.5105!3d-18.8887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e68d20b36a63b5%3A0x62967c8f6b2d0e5b!2sE-Media%20Madagascar%2C%20Nanisana%2C%20Antananarivo%2C%20Madagascar!5e0!3m2!1sen!2sus!4v1675598356510!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de localisation"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
