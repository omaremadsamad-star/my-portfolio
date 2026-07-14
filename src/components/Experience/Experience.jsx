import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'ZAS Tech',
      period: '2026 – Present',
      details: [
        'Collaborating with senior developers on building and maintaining web applications.',
        'Learning and implementing clean backend patterns and APIs using Laravel.',
        'Developing modular, interactive user interface components with React and CSS.',
        'Writing efficient database queries and managing database migrations in MySQL.',
        'Participating in agile sprints, daily standups, and codebase reviews using Git/GitHub.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">Professional Path</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Work Experience</h2>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="relative pl-8 md:pl-10 border-l border-slate-800 before:absolute before:left-[-6px] before:top-1.5 before:w-[13px] before:h-[13px] before:rounded-full before:bg-blue-600 before:border-4 before:border-slate-950"
            >
              {/* Card Container */}
              <div className="bg-slate-900 border border-slate-800/80 hover:border-slate-700/60 rounded-xl p-6 md:p-8 transition-colors duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    {/* Role Title */}
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <FiBriefcase className="mr-2.5 text-blue-500 text-lg flex-shrink-0" />
                      {exp.role}
                    </h3>
                    {/* Company Name */}
                    <p className="text-base text-slate-300 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="flex items-center text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full self-start md:self-center">
                    <FiCalendar className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                {/* Details List */}
                <ul className="space-y-3.5">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-slate-400 text-sm leading-relaxed">
                      <span className="text-blue-500 mr-3 mt-1.5 text-xs select-none">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
