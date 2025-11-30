// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import dataProject from "../data/project";

const Project = () => {
  return (
    <>
      <div
        id="Project"
        className="sm:mt-32 mt-20 pt-24 font-poppins text-white"
      >
        {/* Fade Up untuk Judul */}
        <motion.h1
          className="sm:text-4xl/snug text-2xl/snug font-bold mb-4 text-center underline underline-offset-8 decoration-cyan-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Projects
        </motion.h1>

        {/* Fade Up untuk Paragraf */}
        <motion.p
          className="text-base/loose opacity-50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Berikut beberapa project yang telah saya buat.
        </motion.p>

        <div className="w-3/4 mt-14 grid sm:grid-cols-2 grid-cols-1 gap-8 mx-auto">
          {dataProject.map((project, index) => (
            <motion.div
              key={index}
              className="border-4 rounded-2xl border-cyan-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-[500px] p-6"
              />

              <div className="mt-2">
                <h4 className="sm:text-xl text-lg ml-6 font-semibold">
                  {project.name}
                </h4>
                <p className="my-2 mx-6 text-sm">{project.desk}</p>
              </div>

              <div className="my-6 text-center sm:w-2/4 w-40 mx-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg block"
                >
                  view more details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
