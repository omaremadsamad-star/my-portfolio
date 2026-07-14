import { FiFolder, FiGithub, FiArrowUpRight } from 'react-icons/fi';

export default function Projects() {
  const projectList = [
    {
      title: 'POS Management System',
      description: 'A comprehensive business management system designed to streamline inventory tracking, sales tracking, purchases, customer and supplier database management, employee shift monitoring, and automated financial reporting.',
      tech: ['Java', 'MySQL', 'JDBC', 'Swing / JavaFX'],
      category: 'Desktop Application',
      github: 'https://github.com/omaremadsamad-star',
    },
    {
      title: 'Service Booking Web Application',
      description: 'An interactive web application allowing users to browse domestic services, check slot availability, book service providers, and manage appointments through a responsive, modern interface.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      category: 'Web Application',
      github: 'https://github.com/omaremadsamad-star',
    },
    {
      title: 'Showroom Website',
      description: 'A modern and fully responsive product showroom website that demonstrates dynamic filtering, premium animations, search functionality, and highly polished catalog layouts.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      category: 'Frontend Web',
      github: 'https://github.com/omaremadsamad-star',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">My Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Recent Projects</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm mt-4 md:mt-0">
            A selection of projects built during my academic journey and internship, focusing on backend integration, database design, and frontend interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col justify-between p-6 bg-slate-900 border border-slate-800/80 rounded-xl hover:border-slate-700/60 hover:shadow-xl hover:shadow-slate-950/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icons & Category */}
                <div className="flex items-center justify-between mb-6">
                  <FiFolder className="text-3xl text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="flex items-center space-x-3">
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Tag / Category Badge */}
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded mb-4 inline-block">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 flex items-center">
                  {project.title}
                  <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-base" />
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-medium text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
