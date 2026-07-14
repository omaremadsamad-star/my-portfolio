import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      description: 'Core programming and styling languages used for structuring and scripting interfaces.',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, status: 'Proficient' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, status: 'Proficient' },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, status: 'Proficient' },
        { name: 'C#', icon: <TbBrandCSharp className="text-indigo-500" />, status: 'Proficient' },
      ],
    },
    {
      title: 'Frameworks',
      description: 'Modern libraries and frameworks used for web application development and backend services.',
      skills: [
        { name: 'React', icon: <FaReact className="text-sky-400 animate-spin-slow" />, status: 'Learning' },
        { name: 'Laravel', icon: <FaLaravel className="text-red-500" />, status: 'Learning' },
      ],
    },
    {
      title: 'Database',
      description: 'Relational database systems for secure, structured, and scalable data storage.',
      skills: [
        { name: 'MySQL', icon: <FaDatabase className="text-blue-600" />, status: 'Competent' },
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'Essential developer utilities and platforms for version control and collaboration.',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, status: 'Proficient' },
        { name: 'GitHub', icon: <FaGithub className="text-white" />, status: 'Proficient' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950/60 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-8 hover:border-slate-700/60 transition-colors duration-300 shadow-md"
            >
              <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{category.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex flex-col items-center justify-between p-4 rounded-lg bg-slate-900 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-200 text-center mb-2">
                      {skill.name}
                    </span>
                    
                    {/* Status Badge */}
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      skill.status === 'Learning' 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                        : 'bg-slate-800/60 text-slate-400 border border-slate-800'
                    }`}>
                      {skill.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
