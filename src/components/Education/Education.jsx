import { FiBookOpen, FiMapPin } from 'react-icons/fi';

export default function Education() {
  const educationDetails = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'University of Kurdistan Hawler',
      status: 'Fourth Year (Senior)',
      location: 'Erbil, Kurdistan Region',
      courses: [
        'Software Architecture & Design',
        'Database Management Systems (MySQL)',
        'Object-Oriented Programming (Java)',
        'Web Application Development',
        'Data Structures & Algorithms',
        'Software Testing & Quality Assurance',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">Qualifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h2>
        </div>

        {/* Education List */}
        <div className="space-y-12">
          {educationDetails.map((edu, idx) => (
            <div 
              key={idx}
              className="relative pl-8 md:pl-10 border-l border-slate-800 before:absolute before:left-[-6px] before:top-1.5 before:w-[13px] before:h-[13px] before:rounded-full before:bg-blue-600 before:border-4 before:border-slate-950"
            >
              {/* Card Container */}
              <div className="bg-slate-900 border border-slate-800/80 hover:border-slate-700/60 rounded-xl p-6 md:p-8 transition-colors duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    {/* Degree Title */}
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <FiBookOpen className="mr-2.5 text-blue-500 text-lg flex-shrink-0" />
                      {edu.degree}
                    </h3>
                    
                    {/* Institution & Location */}
                    <p className="text-base text-slate-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                    
                    <div className="flex items-center text-xs text-slate-500 mt-2">
                      <FiMapPin className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full">
                    {edu.status}
                  </span>
                </div>

                {/* Coursework details */}
                <div>
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                    Relevant Coursework & Studies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <div 
                        key={cIdx} 
                        className="flex items-center text-slate-400 text-sm py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mr-3 flex-shrink-0" />
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
