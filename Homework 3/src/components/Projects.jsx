const projects = [
  {
    id: 1,
    title: "ZFK Borec",
    description: "Landing page for a female football team.",
    link: "https://zfkborec.mk",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two.",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="max-w-screen p-6 bg-gray-300 rounded-lg mb-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-gray-900 text-white shadow-lg rounded-lg p-4"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-400 font-semibold mb-2">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="inline-block text-cyan-500 bg-transparent border border-cyan-500 rounded py-2 px-4 hover:bg-cyan-500 hover:text-white transition duration-200"
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
