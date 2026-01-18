import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your Service ID
      'YOUR_TEMPLATE_ID', // Replace with your Template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your Public Key
    )
    .then(() => {
        setStatus('Proposal Request Sent Successfully!');
        form.current.reset();
    }, (error) => {
        setStatus('Failed to send. Please try again.');
        console.log(error.text);
    });
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0A192F] mb-4 font-heading">Request a Proposal</h1>
          <p className="text-gray-600">Complete the form below. We will analyze your university's requirements and get back to you with a strategic framework.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#0A192F] mb-2">Full Name</label>
              <input type="text" name="from_name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Dr. John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0A192F] mb-2">University / College Name</label>
              <input type="text" name="university" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="ABC University" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#0A192F] mb-2">Official Email ID</label>
              <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="doe@university.edu" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0A192F] mb-2">Phone Number</label>
              <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0A192F] mb-2">Primary Consultation Requirement</label>
            <select name="requirement" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
              <option>Placement Strategy & Corporate Relations</option>
              <option>Faculty Development Program</option>
              <option>Exam Readiness & Student Training</option>
              <option>End-to-End Academic Consulting</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0A192F] mb-2">Additional Details</label>
            <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Briefly describe your institution's current challenges..."></textarea>
          </div>

          <button type="submit" className="w-full bg-[#0A192F] text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg uppercase tracking-wider">
            Submit Proposal Request
          </button>

          {status && <p className={`text-center mt-4 font-semibold ${status.includes('Success') ? 'text-green-600' : 'text-blue-600'}`}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;