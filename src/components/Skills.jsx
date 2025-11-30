// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import dataSkills from "../data/skills";

const Skill = () => {
  return (
    <>
      <div id="Skills" className="sm:mt-32 mt-20 pt-24 font-poppins text-white">
        {/* Fade Up untuk Judul */}
        <motion.h1
          className="sm:text-4xl/snug text-2xl/snug font-bold mb-4 text-center underline underline-offset-8 decoration-cyan-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Skills
        </motion.h1>

        {/* Fade Up untuk paragraf */}
        <motion.p
          className="text-base/loose opacity-50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Berikut beberapa skill yang saya kuasai
        </motion.p>

        <div className="w-3/4 mt-14 grid sm:grid-cols-3 grid-cols-2 gap-8 mx-auto">
          {dataSkills.map((skills, index) => (
            <motion.div
              key={index}
              className="gap-2 p-3 border border-cyan-600 rounded-md hover:bg-linear-to-tr from-[#1c1c1c] via-cyan-950 to-[#1c1c1c]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <img
                src={skills.img}
                alt={skills.name}
                className="m-auto sm:w-25 w-15 p-1"
              />
              <div className="flex justify-center mt-2">
                <h4 className="sm:text-lg text-sm">{skills.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
