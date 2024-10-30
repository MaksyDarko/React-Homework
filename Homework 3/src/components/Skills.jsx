const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section className="max-w-2xl mx-auto mb-5 bg-gray-900 p-5 rounded-lg shadow-lg">
      <h1 className="text-3xl mb-5 text-white font-bold text-center">
        Skills:
      </h1>
      <div>
        <ul className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 text-cyan-300 rounded-full px-4 py-2 font-semibold cursor-pointer transition-all duration-200 hover:bg-cyan-500 hover:text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
