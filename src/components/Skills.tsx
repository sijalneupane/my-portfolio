
import { Code, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: "Advanced", color: "from-blue-500 to-cyan-500" },
        { name: "Provider State Management", level: "Intermediate", color: "from-green-500 to-teal-500" },
        { name: "Firebase Integration", level: "Advanced", color: "from-orange-500 to-red-500" }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      skills: [
        { name: "Django", level: "Advanced", color: "from-green-600 to-emerald-600" },
        { name: "Django REST Framework", level: "Advanced", color: "from-blue-600 to-indigo-600" },
        { name: "HTML/CSS/JavaScript", level: "Intermediate", color: "from-yellow-500 to-orange-500" },
        { name: "PHP", level: "Intermediate", color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL", level: "Advanced", color: "from-blue-700 to-blue-500" },
        { name: "MySQL", level: "Intermediate", color: "from-orange-600 to-yellow-500" },
        { name: "Firestore", level: "Advanced", color: "from-red-500 to-orange-500" }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentication & Security",
      skills: [
        { name: "JWT Tokens", level: "Advanced", color: "from-gray-600 to-gray-800" },
        { name: "Google Authentication", level: "Advanced", color: "from-red-500 to-pink-500" },
        { name: "Firebase Auth", level: "Advanced", color: "from-yellow-500 to-orange-500" },
        { name: "Phone & Email OTP", level: "Intermediate", color: "from-green-500 to-blue-500" }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Services",
      skills: [
        { name: "Firebase", level: "Advanced", color: "from-orange-500 to-red-600" },
        { name: "FCM Push Notifications", level: "Advanced", color: "from-blue-500 to-purple-500" },
        { name: "Cloudinary", level: "Intermediate", color: "from-teal-500 to-cyan-500" },
        { name: "Email Services", level: "Intermediate", color: "from-purple-500 to-indigo-500" }
      ]
    }
  ];

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Advanced': return 'w-5/6';
      case 'Intermediate': return 'w-3/5';
      case 'Beginner': return 'w-2/5';
      default: return 'w-1/2';
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging modern technologies to build robust, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} ${getLevelWidth(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
