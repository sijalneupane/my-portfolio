import { Code, Database, Cloud, Smartphone, Globe, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: "Advanced" },
        { name: "Provider State Management", level: "Intermediate" },
        { name: "Firebase Integration", level: "Advanced" },
        { name: "RESTful APIs integration", level: "Advanced" },
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      skills: [
        { name: "Django", level: "Advanced" },
        { name: "Django REST Framework", level: "Advanced" },
        { name: "NestJS", level: "Intermediate" },
        { name: "HTML/CSS/JavaScript", level: "Intermediate" },
        { name: "PHP", level: "Intermediate" },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Firestore", level: "Advanced" },
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentication & Security",
      skills: [
        { name: "JWT Tokens", level: "Advanced" },
        { name: "Google Authentication", level: "Advanced" },
        { name: "Firebase Auth", level: "Advanced" },
        { name: "Phone & Email OTP", level: "Intermediate" },
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Services",
      skills: [
        { name: "Firebase", level: "Advanced" },
        { name: "FCM Push Notifications", level: "Advanced" },
        { name: "Cloudinary", level: "Intermediate" },
        { name: "Email Services", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Applying modern technologies to build robust, scalable applications
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

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    {/* <span className="text-xs text-gray-500 dark:text-gray-400 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-700">
                      {skill.level}
                    </span> */}
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
