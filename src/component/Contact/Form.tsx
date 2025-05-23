import { motion } from "framer-motion";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function FormContact() {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Nom requis"),
    email: Yup.string().email("Email invalide").required("Email requis"),
    message: Yup.string().required("Message requis"),
  });
  return (
    <div className="flex flex-col justify-center">
      <Toaster position="top-right" />
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={async (values, actions) => {
          const toastId = toast.loading("Envoi du message...");
          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: values.name,
                email: values.email,
                message: values.message,
              }),
            });

            if (!response.ok) throw new Error("Erreur serveur");

            toast.success("Message envoyé avec succès !", { id: toastId });
            actions.resetForm();
          } catch (error) {
            console.log(error);
            toast.error("Une erreur est survenue. Veuillez réessayer.", {
              id: toastId,
            });
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-6">
            {/* Champ Nom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Field
                  type="text"
                  name="name"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 ${
                    errors.name && touched.name
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  }`}
                  placeholder="Votre nom complet"
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-2 font-medium"
              />
            </motion.div>

            {/* Champ Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Field
                  type="email"
                  name="email"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 ${
                    errors.email && touched.email
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  }`}
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2 font-medium"
              />
            </motion.div>

            {/* Champ Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Votre message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <Field
                  as="textarea"
                  name="message"
                  rows="6"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 resize-none ${
                    errors.message && touched.message
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  }`}
                  placeholder="Décrivez votre projet, vos questions ou vos idées..."
                />
              </div>
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-2 font-medium"
              />
            </motion.div>

            {/* Bouton d'envoi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
