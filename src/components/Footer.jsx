const Footer = () => {
  return (
    <footer className="mt-20 font-poppins text-white border-t border-[#323232] -mx-5 md:-mx-12">
      <div className="sm:h-40 h-20 max-w-7xl mx-auto sm:px-5 px-3 flex justify-between items-center py-4">
        {/* Logo Kiri */}
        <div className="hover:bg-[#323232] rounded-2xl max-w-[70%] ">
          <a
            href="#Home"
            className="flex items-center sm:gap-2 gap-1 overflow-hidden"
          >
            <img
              src="/assets/logo-SA.png"
              alt="Logo"
              className="w-5 sm:w-7 h-auto"
            />
            <p className="font-poppins text-lg sm:text-xl md:text-2xl font-bold truncate">
              suryaatmaja
            </p>
          </a>
        </div>

        {/* Sosial Media Kanan */}
        <div className="flex sm:gap-4 gap-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suryaatmaja.freelancer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/sosmed/gmail.png" alt="Gmail" className="sm:w-8 w-4" />
          </a>

          <a
            href="https://www.instagram.com/suryaatmajjaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/sosmed/ig.png" alt="Instagram" className="sm:w-8 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/surya-atmaja-091315284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sosmed/linkedin.png"
              alt="LinkedIn"
              className="sm:w-8 w-4"
            />
          </a>

          <a
            href="https://www.tiktok.com/@suryaatmajja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sosmed/tiktok.png"
              alt="Tik Tok"
              className="sm:w-8 w-4"
            />
          </a>

          <a
            href="https://github.com/suryaatmajja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sosmed/Github.png"
              alt="Git Hub"
              className="sm:w-8 w-4"
            />
          </a>
        </div>
      </div>

      <div className="text-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} suryaatmaja. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
