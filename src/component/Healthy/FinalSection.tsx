import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalSection() {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <motion.div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747748304/34086341_tobf_x8fc_221006_ydg3a0.jpg"
            alt="Silhouette de l'Afrique avec des icônes médicales"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 py-16 px-8 md:px-16">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre objectif
            </h3>
            <div className="w-24 h-1 bg-white/40 mx-auto mb-8"></div>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Une Afrique où chaque citoyen a accès à des soins de qualité,
              accessibles, et durables.
            </motion.p>

            <motion.div
              className="inline-block bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-2xl md:text-3xl font-bold italic text-white">
                Ensemble, bâtissons des systèmes de santé plus forts, pour une
                Afrique plus saine.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative SVG */}
        <motion.div
          className="absolute bottom-0 left-0 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L0,320Z"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Dots */}
      <motion.div
        className="absolute -right-12 -bottom-8 grid grid-cols-3 gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {[
          "bg-blue-500",
          "bg-blue-400",
          "bg-blue-300",
          "bg-green-500",
          "bg-green-400",
          "bg-green-300",
          "bg-blue-300",
          "bg-blue-200",
          "bg-blue-100",
        ].map((color, idx) => (
          <div key={idx} className={`w-2 h-2 rounded-full ${color}`} />
        ))}
      </motion.div>
    </motion.div>
  );
}
