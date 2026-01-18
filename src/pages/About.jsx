import Speach from "../assets/speach1.jpg";
const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Professional Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Foundation</h2>
            <h1 className="text-4xl font-bold text-[#0A192F] mb-6">
              Bridging the Gap Between Academia and Industry
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With nearly a decade of experience in placement coordination and career counseling, 
              we specialize in transforming how universities approach student readiness. 
              Our mission is to empower academic leadership with data-driven strategies that 
              result in higher placement rates and industry-aligned curricula.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">8+ Years</h3>
                <p className="text-sm text-gray-500">Industry Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-sm text-gray-500">Corporate Tie-ups</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src={Speach} 
                alt="Consultant at University Event" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#0A192F] text-white rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300">
              To be the premier catalyst for university transformation in India, ensuring every 
              graduate is equipped with the skills and mindset required by modern global enterprises.
            </p>
          </div>
          <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl text-[#0A192F]">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To provide private and government universities with actionable consulting that 
              enhances faculty capability, optimizes placement cells, and drives institutional reputation.
            </p>
          </div>
        </div>

        {/* Section 3: Background Summary */}
        <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100">
          <h3 className="text-2xl font-bold text-[#0A192F] mb-6 text-center">A Legacy of Excellence</h3>
          <p className="text-center max-w-3xl mx-auto text-gray-600">
            Rooted in the academic ecosystem of Ranchi University and Marwari College, 
            our consultancy brings first-hand knowledge of the challenges faced by 
            placement cells and academic leadership today. We don't just advise; 
            we implement frameworks that work in the Indian context.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;