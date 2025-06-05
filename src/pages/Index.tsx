import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react";
import cv from "../assets/pdfs/cv.pdf";
import MyHobbies from "@/components/MyHobbies";
import snlogo from "../assets/images/SN Logo1.png"; // Assuming you have a logo image

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      
      {/* Hobbies Section */}
      <div>
        <MyHobbies />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                  
              <img
                src={snlogo}
                alt="Sijal Neupane Logo"
                className="w-full h-full object-contain"
                width={32}
                height={32}
                loading="eager"
                decoding="async"
              />
                </div>
                <h3 className="text-xl font-bold">Full Stack Developer</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Passionate about creating innovative solutions using Flutter,
                Django, and modern web technologies. Always eager to learn and
                tackle new challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={cv}
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>sijalneupane5@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+977 9863022844</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Banepa, Kavrepalanchwok, Nepal</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {currentYear} Sijal Neupane. All rights reserved.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/sijalneupane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/sijalneupane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sijalneupane5@gmail.com"
                  className="p-2 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
