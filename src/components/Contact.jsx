import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 border-b-4 border-pink-500 inline-block pb-2">
          Connect With Me
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Feel free to connect or reach out through any of the platforms below.
        </p>

        <div className="flex justify-center space-x-10 text-4xl">
          <a
            href="https://github.com/Saravjeet0806"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/saravjeet_rathore/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/saravjeetsingh08/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
