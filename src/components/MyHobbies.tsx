import React from "react";
import { Camera, Book, Plane, Trophy, Music, ChevronDown, ChevronUp } from "lucide-react";

const MyHobbies = () => {
  const hobbies = [
    {
      name: "Reading Docs",
      description: "Understanding and implementing new technologies through their documentation.",
      icon: <Book className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Photography",
      description: "Capturing moments and landscapes with creative vision.",
      icon: <Camera className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Traveling",
      description: "Visiting new places and experiencing different cultures.",
      icon: <Plane className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Watching Sports",
      description: "Enjoying football leagues, NBA games, and cricket matches.",
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Music",
      description: "Listening to and playing different genres of music.",
      icon: <Music className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500"
    },
  ];

  const [showHobbies, setShowHobbies] = React.useState(false);

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="hobbies">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold pb-3  mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What I Do During Free Time
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Beyond coding, I enjoy exploring various interests that keep me inspired and balanced
          </p>
          
          <button
            onClick={() => setShowHobbies((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {showHobbies ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Hide Hobbies
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                View My Hobbies
              </>
            )}
          </button>
        </div>

        {showHobbies && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hobby Header */}
                <div className={`h-20 bg-gradient-to-r ${hobby.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 flex items-center text-white">
                    {hobby.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {hobby.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyHobbies;