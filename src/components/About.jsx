import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 border-b-4 border-pink-500 inline-block pb-2">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hi, I’m <span className="text-white font-semibold">Saravjeet Singh</span>, a driven <span className="text-pink-400 font-semibold">DevOps Engineer</span> and <span className="text-orange-400 font-semibold">Frontend Developer</span>. Currently pursuing my B.Tech in Information Technology from GJUS&T, I am a 3rd Year student with a keen interest in technology and Software Development.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            I’m hands-on with tools like <span className="text-white font-medium">Docker, Kubernetes, Ansible, and Terraform</span>, helping automate cloud infrastructure and CI/CD pipelines. On the frontend side, I craft beautiful interfaces using <span className="text-white font-medium">React.js, Tailwind CSS</span>, and the <span className="text-white font-medium">MERN stack</span>.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
          I’m always exploring new technologies, continuously learning, and open to exciting collaborations in software development and DevOps. Let’s connect and build something impactful together!
          </p>
          <a
            href="/#projects"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Saravjeet0806"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-br  text-white hover:opacity-90 transition"
          >
            Github
          </a>
        </div>

        {/* Optional Image or Quote */}
        <div className="text-center lg:text-right">
          <blockquote className="text-xl italic text-gray-400 border-l-4 pl-4 border-pink-600">
            “Code. Build. Break. Learn. Repeat.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
