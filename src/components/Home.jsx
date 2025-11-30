// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className="mt-16 grid md:grid-cols-2 text-white font-poppins pt-24 items-center xl:gap-0 gap-6 grid-cols-1"
      >
        <div>
          {/* Fade Up untuk Judul */}
          <motion.h1
            className="sm:text-5xl/tight text-3xl max-w-[200px] sm:max-w-none wrap-break-word font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, Saya Surya Atmaja
          </motion.h1>

          {/* Fade Up untuk Paragraf */}
          <motion.p
            className="sm:text-xl text-lg mb-6 opacity-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Saya adalah mahasiswa Sistem Informasi dengan minat besar pada Full
            Stack Web Development. Saat ini saya fokus mengembangkan kemampuan
            di sisi front-end dan back-end untuk membangun aplikasi web yang
            fungsional dan menarik.
          </motion.p>

          <div className="flex items-center justify-center sm:justify-start sm:gap-4 gap-3">
            {/* Fade Up untuk tombol Download CV */}
            <motion.a
              href="./public/CV/Cv Surya Atmaja.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Surya_Atmaja.pdf"
              className="bg-cyan-600 sm:p-4 px-6 py-4 rounded-2xl hover:bg-cyan-700 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Download CV
            </motion.a>

            {/* Fade Up untuk tombol View Project */}
            <motion.a
              href="#Project"
              className="bg-cyan-600 sm:p-4 px-6 py-4 rounded-2xl hover:bg-cyan-700 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              View project
            </motion.a>
          </div>
        </div>

        {/* Fade Up untuk gambar */}
        <motion.img
          src="/assets/hero-img.png"
          alt="Hero image"
          className="w-[400px] rounded-[75px] md:ml-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </>
  );
};

export default Home;
