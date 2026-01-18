import Placement from "../assets/placement.jpg";
import Placement1 from "../assets/placement1.jpg";
const Experience = () => {
  const caseStudies = [
    {
      title: "Placement Cell Transformation",
      institution: "Marwari College, Ranchi",
      period: "2017 - Present",
      problem: "Limited corporate outreach and low student participation in career counseling sessions.",
      action: "Implemented a structured placement coordination framework, revamped the student database, and initiated direct corporate relation strategies.",
      result: "Facilitated consistent placement drives and established a robust career counseling culture for thousands of students.",
      image: Placement,
      tags: ["Placement Strategy", "Career Counseling"]
    },
    {
      title: "Academic & Industry Alignment",
      institution: "State University Framework",
      period: "2024 - 2025",
      problem: "Curriculum gap between academic theory and the skills required for modern engineering and management roles.",
      action: "Conducted faculty enablement workshops and student 'Exam Readiness' bootcamps focused on logical and technical core skills.",
      result: "15% increase in student qualifying rates for competitive hiring exams and improved faculty industry-awareness.",
      image: Placement1,
      tags: ["Faculty Enablement", "Exam Readiness"]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Track Record</h2>
          <h1 className="text-4xl font-bold text-[#0A192F] mb-4 font-heading">Case Studies & Experience</h1>
          <p className="text-gray-600 max-w-2xl">
            Real-world examples of how we've helped academic institutions enhance their placement outcomes 
            and align their academic delivery with industry standards.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="relative rounded-2xl shadow-lg w-full h-80 object-cover border border-gray-100"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <div className="flex gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-[#0A192F] mb-2 font-heading">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-6">{study.institution} | {study.period}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">The Challenge</h4>
                    <p className="text-gray-600">{study.problem}</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-blue-600">
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">The Action</h4>
                    <p className="text-[#0A192F]">{study.action}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-1">The Result</h4>
                    <p className="text-lg font-semibold text-[#0A192F]">{study.result}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Logos Placeholder */}
        <div className="mt-32 pt-16 border-t border-gray-100 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Trusted by leadership at</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* You can add university logos here later */}
            <span className="text-2xl font-bold text-slate-400">Marwari College</span>
            <span className="text-2xl font-bold text-slate-400">Ranchi University</span>
            <span className="text-2xl font-bold text-slate-400">Academic Cells</span>
            <span className="text-2xl font-bold text-slate-400">Anudip Foundation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;