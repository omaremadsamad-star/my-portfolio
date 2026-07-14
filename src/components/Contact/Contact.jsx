import { useState } from 'react';
import { FiPhone, FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText('');
    }, 2000);
  };

  const contacts = [
    {
      label: 'Email',
      value: 'omar.emad.samad@gmail.com',
      icon: <FiMail className="text-xl text-blue-500" />,
      href: 'mailto:omar.emad.samad@gmail.com',
      actionLabel: 'Send Email',
      copyValue: 'omar.emad.samad@gmail.com',
    },
    {
      label: 'Phone',
      value: '+964 751 789 7977',
      icon: <FiPhone className="text-xl text-blue-500" />,
      href: 'tel:+9647517897977',
      actionLabel: 'Call Phone',
      copyValue: '+9647517897977',
    },
    {
      label: 'LinkedIn',
      value: 'omar-emad-0194a71b9',
      icon: <FiLinkedin className="text-xl text-blue-500" />,
      href: 'https://www.linkedin.com/in/omar-emad-0194a71b9/',
      actionLabel: 'Connect',
      copyValue: null,
    },
    {
      label: 'GitHub',
      value: 'omaremadsamad-star',
      icon: <FiGithub className="text-xl text-blue-500" />,
      href: 'https://github.com/omaremadsamad-star',
      actionLabel: 'Follow',
      copyValue: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-center">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Information</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            Feel free to reach out via email or phone. You can also connect with me on professional networks like LinkedIn and GitHub.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800/80 hover:border-slate-700/60 rounded-xl p-6 transition-all duration-300 flex items-start gap-4 shadow-md group relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Panel */}
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-blue-500/20 transition-all duration-300">
                {item.icon}
              </div>

              {/* Text details */}
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.label}</span>
                <h3 className="text-base font-semibold text-white mt-0.5 truncate select-all">{item.value}</h3>
                
                {/* Actions */}
                <div className="flex items-center gap-4 mt-3">
                  <a 
                    href={item.href}
                    target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.actionLabel} &rarr;
                  </a>
                  
                  {item.copyValue && (
                    <button
                      onClick={() => copyToClipboard(item.copyValue, item.label)}
                      className="text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors duration-200"
                      aria-label={`Copy ${item.label}`}
                    >
                      {copiedText === item.label ? (
                        <>
                          <FiCheck className="text-emerald-500" />
                          <span className="text-[10px] text-emerald-500 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy className="text-xs" />
                          <span className="text-[10px] font-semibold">Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
