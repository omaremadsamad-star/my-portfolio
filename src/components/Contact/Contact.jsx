import { useState } from 'react';
import { FiPhone, FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const [copiedText, setCopiedText] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText('');
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // NOTE: Replace 'YOUR_ACCESS_KEY_HERE' with your Web3Forms Access Key
      // Get your free key at https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'de4ca4a9-38f9-44dc-a7f8-f5b4b970ebda', 
          email: email,
          message: message,
          from_name: 'Portfolio Visitor',
          subject: 'New Portfolio Contact Form Submission',
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setEmail('');
        setMessage('');
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      // For fallback/testing, log it and show a helpful error message instructing key setup
      console.error('Submission error:', err);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: err.message === 'Something went wrong. Please try again.' 
          ? 'Failed to send. Please make sure you have added a valid Web3Forms Access Key to Contact.jsx.' 
          : err.message 
      });
    }
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
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-center">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Me</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            Have a question, proposal, or want to work together? Feel free to send a message or reach out via my links.
          </p>
        </div>

        {/* Contact Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {contacts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800/80 hover:border-slate-700/60 rounded-xl p-5 transition-all duration-300 flex items-start gap-4 shadow-md group relative overflow-hidden"
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

          {/* Right Column: Contact form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800/80 rounded-xl p-8 shadow-md relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            {status.success ? (
              <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6 text-center animate-fade-in">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="text-2xl text-emerald-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">Message Sent!</h4>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. I've received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                  className="mt-6 text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {status.error && (
                  <div className="bg-rose-950/30 border border-rose-800/50 rounded-lg p-4 text-sm text-rose-400">
                    {status.error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello! I would love to connect..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 outline-none resize-none transition-all"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-lg px-6 py-3 text-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-900/20 hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  {status.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
