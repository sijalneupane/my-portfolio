
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import cv from '../assets/pdfs/cv.pdf';
import snlogo from '../assets/images/SN Logo1.png';
import person1 from '../assets/images/person1.jpeg';
const Hero = () => {
  const handleResumeView = () => {
    // This would open a resume PDF or navigate to a resume page
    window.open(cv, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              <img src={person1} alt="Profile" className="w-full h-full rounded-full object-cover " />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold pb-2 mb-7 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
           Flutter, Nest JS & Django Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Crafting seamless mobile experiences with <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span>, efficient backend solutions with
            <span className="text-green-600 dark:text-green-400 font-semibold"> Django and DjangoRestFramework (DRF)</span>, along with scalable APIs using
            <span className="text-orange-600 dark:text-orange-400 font-semibold"> Nest JS </span>
            and modern technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              Flutter Developer
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
              Django & DjangoRestFramework (DRF)
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
             Nest JS Developer
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <button
              onClick={handleResumeView}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="w-4 h-4" />
              View Resume
            </button>
            
            <a
              href="https://github.com/sijalneupane"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3  bg-black text-white border-2 border-black dark:border-gray-600 dark:bg-black dark:text-white rounded-lg  transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:scale-105"
            >
              <Mail  className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
