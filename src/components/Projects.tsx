
import { ExternalLink, Github, Smartphone, Globe, Database, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Online Election System",
      description: "A comprehensive web-based voting platform with secure authentication, email verification, and secured and efficient results. Features admin dashboard for election management and voter verification.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PHPMailer", "Abstract API"],
      category: "Web Application",
      icon: <Globe className="w-6 h-6" />,
      hasLiveDemo: true,
      liveUrl: "https://sjnp.tech",
      githubUrl: "https://github.com/sijalneupane/Digital_Matadan_Pranali-Online_Election_System.git",
      features: [
        "Email address verification via Abstract API",
        "Secure voting mechanism",
        "Real-time result tracking",
        "Admin dashboard",
        "Voter registration system"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Assignment Management System",
      description: "Full-stack mobile application for educational institutions with assignment management, push notifications, and notic-spreading capabilities. Built to enhance student-teacher interaction and streamline school operations.",
      tech: ["Flutter", "Provider", "Django", "DRF", "PostgreSQL", "FCM"],
      category: "Mobile Application",
      icon: <Smartphone className="w-6 h-6" />,
      hasLiveDemo: false,
      githubUrl: "https://github.com/sijalneupane/assignment_provider_app.git",
      features: [
        "Assignment CRUD operations",
        "Push notifications via FCM",
        "Notes management system",
        "Student-teacher information sharing",
        "Real-time updates"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Car Rental System",
      description: "Modern car rental mobile app with multiple authentication methods, image upload capabilities, and seamless user experience. Integrated with cloud services for optimal performance.",
      tech: ["Flutter", "Firebase", "Cloudinary", "Google Auth", "Phone Auth", "Email OTP"],
      category: "Mobile Application",
      icon: <Smartphone className="w-6 h-6" />,
      hasLiveDemo: false,
      githubUrl: "https://github.com/sijalneupane/car_rental_system.git",
      features: [
        "Multiple authentication methods",
        "Image upload via Cloudinary",
        "Car listing and booking",
        "User profile management",
        "Real-time availability"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Flutter Chess Game",
      description: "Classic chess game implementation with intuitive touch controls, move validation, and elegant UI design. Features complete chess rule enforcement, move history tracking, and responsive gameplay for chess enthusiasts.",
      tech: ["Flutter", "Dart", "Custom Widgets","Moves Validation"],
      category: "Mobile Game",
      icon: <Gamepad2 className="w-6 h-6" />,
      hasLiveDemo: false,
      githubUrl: "https://github.com/sijalneupane/chess-game.git",
      features: [
        "Complete chess rule implementation",
        "Touch-based piece movement",
        "Move validation and legal moves highlighting",
        "Clean and intuitive UI design"
      ],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Flutter Snake Game",
      description: "Modern take on the classic Snake game with smooth animations, score tracking, and responsive controls. Built with Flutter's game development capabilities featuring collision detection and play and pause functionality.",
      tech: ["Flutter", "Dart", "Animation Controller", "Custom Painter", "Game Loop"],
      category: "Mobile Game",
      icon: <Gamepad2 className="w-6 h-6" />,
      hasLiveDemo: false,
      githubUrl: "https://github.com/sijalneupane/snake-game.git",
      features: [
        "Smooth snake movement and animations",
        "Random food generation",
        "Collision detection system",
        "Score tracking",
        "Responsive touch and swipe controls"
      ],
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`h-24 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center text-white">
                  {project.icon}
                  <span className="ml-2 text-sm font-medium">{project.category}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  {project.hasLiveDemo && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium flex-1 justify-center"
                      target='_blank'
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className={`flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 text-sm font-medium ${project.hasLiveDemo ? '' : 'flex-1'} justify-center`}
                    target='_blank'
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
