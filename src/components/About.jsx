// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div id="About" className="text-white font-poppins sm:mt-32 mt-12 pt-20">
        {/* Fade Up saat scroll muncul */}
        <motion.h1
          className="m-8 text-center sm:text-4xl text-2xl font-semibold underline underline-offset-8 decoration-cyan-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h1>

        <motion.div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 rounded-lg bg-linear-to-tr from-[#1c1c1c] via-cyan-950 to-[#1c1c1c]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="sm:text-xl text-lg text-center p-5">
            Saya adalah mahasiswa Sistem Informasi dengan minat besar pada Full
            Stack Web Development. Saat ini saya aktif belajar dan mengembangkan
            keterampilan di sisi front-end maupun back-end, dengan dasar yang
            baik dalam HTML, CSS, dan JavaScript serta memiliki motivasi untuk
            terus mempelajari teknologi baru dan mengembangkan kemampuan.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
