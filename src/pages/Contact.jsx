import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace these strings with your actual EmailJS IDs
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        setStatus('Success! We will contact you shortly.');
        form.current.reset();
    }, (error) => {
        setStatus('Failed to send. Please check your connection.');
        console.log(error.text);
    });
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
            <h1 className="text-4xl font-bold text-[#0A192F] mb-6 font-heading">Let's Discuss Your Institution's Growth</h1>
            <p className="text-gray-600 mb-8">
              Whether you are a private university or a government college, we provide customized 
              frameworks for placements and academic excellence.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600">
                  <span className="text-xl">📧</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-[#0A192F]">Email Official</p>
                  <p className="text-sm text-gray-600">consult@academicexcellence.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg text-green-600">
                  <span className="text-xl">💬</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-[#0A192F]">WhatsApp Business</p>
                  <p className="text-sm text-gray-600">+91 [Your Number Here]</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-500 italic">
                "Based in Ranchi, serving universities across India with industry-aligned placement strategies."
              </p>
            </div>
          </div>

          {/* Column 2 & 3: The Functional Form */}
          <div className="lg:col-span-2">
            <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl shadow-slate-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Name</label>
                  <input type="text" name="from_name" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Dr. Anubhav..." />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">University Name</label>
                  <input type="text" name="university" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="University/College..." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Official Email</label>
                  <input type="email" name="user_email" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="admin@university.edu" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Phone</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="+91..." />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Requirement</label>
                <select name="requirement" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all">
                  <option>Placement Cell Optimization</option>
                  <option>Faculty Enablement Program</option>
                  <option>Student Exam Readiness</option>
                  <option>One-Time Paid Consultation</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Additional Requirement Details</label>
                <textarea name="message" rows="4" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Please describe the current academic or placement challenges..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0A192F] text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/10 uppercase tracking-widest text-sm">
                Request Proposal & Consultation
              </button>

              {status && (
                <div className={`mt-6 p-4 rounded-lg text-center font-medium ${status.includes('Success') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;