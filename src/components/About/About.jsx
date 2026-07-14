export default function About() {
  const highlights = [
    { title: 'Education', value: '4th Year Software Engineering Student' },
    { title: 'Current Role', value: 'Software Engineering Intern at ZAS Tech' },
    { title: 'Interests', value: 'Web & Mobile Dev, Scalable Architectures' },
    { title: 'Focus Areas', value: 'React, Laravel, MySQL & Clean Code' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col mb-12">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">Introduction</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main Biography Text */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a fourth-year Software Engineering student at the <span className="text-white font-medium">University of Kurdistan Hawler</span> and currently a <span className="text-white font-medium">Software Engineering Intern</span> at <span className="text-blue-500 font-medium">ZAS Tech</span>.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              I enjoy solving real-world problems through software and continuously improving my skills in web development, backend systems, software architecture, and modern engineering practices. 
              My goal is to write clean, maintainable, and high-performance code that provides exceptional user experiences.
            </p>
          </div>

          {/* Highlights Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Facts
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.title}</span>
                  <span className="text-sm text-slate-300 font-medium mt-0.5">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
