'use client';

import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaRegEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 justify-center mb-4">
          <a href="https://www.linkedin.com/company/truesocialtoken" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/pablofelipe01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/tokensolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          
          <a href="mailto:pablo@toksol.io" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaRegEnvelope className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-center">
          <a href="/about" className="hover:text-green-500 transition-colors">Nosotros</a>
          <a href="/team" className="hover:text-green-500 transition-colors">Equipo</a>
          <a href="/tutorials" className="hover:text-green-500 transition-colors">Tutoriales</a>
          <a href="/technology" className="hover:text-green-500 transition-colors">Tecnología</a>
          <a href="/blog" className="hover:text-green-500 transition-colors">Blog</a>
          <a href="/disclosure" className="hover:text-green-500 transition-colors">Legal</a>
          <a href="/terms" className="hover:text-green-500 transition-colors">Términos</a>
          <a href="/privacy" className="hover:text-green-500 transition-colors">Privacidad</a>
          {/* <a href="/press" className="hover:text-green-500 transition-colors">Prensa</a> */}
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} True Social Token. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
