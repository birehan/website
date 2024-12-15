import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t flex flex-col items-center justify-center gap-4 p-4 bg-overlay-color text-text-color">
      <p className="text-sm">
        &copy; {currentYear} Birehan Zewde. All rights reserved.
      </p>

      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/birehan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="icon-wrapper"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://github.com/birehanz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="icon-wrapper"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://medium.com/@birehanz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
          className="icon-wrapper"
        >
          <FaMedium className="icon" />
        </a>

        <a
          href="https://wa.me/251982070195"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="icon-wrapper"
        >
          <FaWhatsapp className="icon" />
        </a>

        <a
          href="mailto:birehananteneh4@gmail.com"
          aria-label="Email"
          className="icon-wrapper"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
