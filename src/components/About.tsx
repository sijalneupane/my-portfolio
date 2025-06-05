
import { Code, Coffee, Rocket, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Expertise in both mobile and web technologies, creating end-to-end solutions."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Modern Technologies",
      description: "Always learning and implementing the latest frameworks and best practices."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Focused on creating intuitive and engaging user experiences."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with innovative solutions."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise in both mobile and web technologies. 
                  My journey in software development has led me to specialize in <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span> for 
                  mobile applications and <span className="text-green-600 dark:text-green-400 font-semibold">Django</span> for robust backend solutions.
                </p>
                
                <p>
                  With hands-on experience in modern authentication systems, cloud services, and database management, 
                  I create seamless digital experiences that prioritize both functionality and user satisfaction.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and staying updated with the latest industry trends. 
                  My goal is to build applications that not only solve real-world problems but also provide 
                  exceptional user experiences.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies Mastered</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white mr-3">
                        {highlight.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
