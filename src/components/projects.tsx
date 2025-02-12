const projects = [
  {
    id: 1,
    title: "Asko-shop",
    desc: "Open github and Follow me",
    link: "https://github.com/Asadbekgafurov/shopping-deals",
  },
  {
    id: 2,
    title: "This site",
    desc: "My personal portfolio using Next.js",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">My Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-600 font-semibold ">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.desc}</p>
            <a href={project.link} className="text-blue-600 mt-2 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
