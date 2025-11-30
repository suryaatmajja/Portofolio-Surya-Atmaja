// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
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
          Contact
        </motion.h1>

        {/* Fade Up untuk Paragraf */}
        <motion.p
          className="text-base/loose opacity-50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Untuk keperluan kerja sama, tugas, atau project lainnya, silakan
          hubungi saya melalui form di bawah ini.
        </motion.p>

        {/* Fade Up untuk Form */}
        <motion.form
          action="https://formsubmit.co/suryaatmaja.freelancer@gmail.com"
          method="POST"
          className="w-full sm:w-2/3 lg:w-1/3 space-y-5 bg-[#323232] rounded-2xl mx-auto mt-12 border border-cyan-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid md:grid-cols-2 gap-4 p-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md bg-[#111111] border border-white/15 text-sm outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 rounded-md bg-[#111111] border border-white/15 text-sm outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="px-4">
            <label className="block text-sm mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="w-full px-3 py-2 rounded-md bg-[#111111] border border-white/15 text-sm outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
              placeholder="What is this about?"
            />
          </div>

          <div className="px-4">
            <label className="block text-sm mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-3 py-2 rounded-md bg-[#111111] border border-white/15 text-sm outline-none resize-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
              placeholder="Write your message here..."
            />
          </div>

          {/* tombol di tengah */}
          <div className="flex justify-center p-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-2.5 rounded-md text-sm font-medium bg-cyan-600 hover:bg-cyan-400 transition active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default Contact;
