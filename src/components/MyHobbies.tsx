import React from "react";

const MyHobbies = () => {
  const hobbies = [
    {
      name: "Reading Docs",
      description: "Understanding and implementing new technologies through their documentation.",
    },
    {
      name: "Photography",
      description: "Capturing moments and landscapes.",
    },
    {
      name: "Traveling",
      description: "Visiting new places and experiencing cultures.",
    },
    {
      name: "Watching Sports",
      description: "Enjoying football leagues, NBA games, and cricket matches.",
    },
    {
      name: "Music",
      description: "Listening to and playing different genres of music.",
    },
  ];

const [showHobbies, setShowHobbies] = React.useState(false);

return (
  <section className="min-w-fit space-y-2 p-6 dark:bg-gray-800  shadow-md">
    <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What I do during Free Time</h2>
    <button
      onClick={() => setShowHobbies((prev) => !prev)}
      className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {showHobbies ? "Hide" : "View"}
    </button>
    {showHobbies && (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hobbies.map((hobby) => (
          <li
            key={hobby.name}
            className="p-4 bg-gray-100 rounded shadow-sm flex items-start"
          >
            <span className="font-semibold text-blue-700 mr-2">{hobby.name}:</span>
            <span className="text-gray-700">{hobby.description}</span>
          </li>
        ))}
      </ul>
    )}
  </section>
);
};

export default MyHobbies;
