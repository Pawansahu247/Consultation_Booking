const Resources = () => {
  const resources = [
    {
      title: "Industry-Alignment Strategies 2026",
      category: "Academic Insights",
      description: "A framework for universities to bridge the gap between traditional engineering curricula and modern corporate expectations.",
      date: "Jan 2026",
      type: "Article"
    },
    {
      title: "Placement Cell Optimization Handbook",
      category: "Guides",
      description: "Best practices for placement coordination, corporate outreach, and student data management based on years of experience at Marwari College.",
      date: "Dec 2025",
      type: "PDF Download"
    },
    {
      title: "The Future of Exam Readiness",
      category: "Blogs",
      description: "How targeted training in logic and technical core skills can increase student qualifying rates for competitive hiring.",
      date: "Nov 2025",
      type: "Article"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Knowledge Hub</h2>
          <h1 className="text-4xl font-bold text-[#0A192F] mb-4 font-heading">Resources & Insights</h1>
          <p className="text-gray-600 max-w-2xl">
            Empowering academic leadership with the data, strategies, and industry trends 
            needed to drive student success and institutional growth.
          </p>
        </div>

        {/* Categories Filter (Visual only for now) */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          {['All Resources', 'Academic Insights', 'Blogs', 'Placement Strategy'].map((cat) => (
            <button key={cat} className="whitespace-nowrap px-6 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <div key={index} className="group flex flex-col bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-white text-blue-600 text-[10px] font-bold rounded-md uppercase tracking-widest shadow-sm">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter italic">
                  {item.type}
                </span>
                <button className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Read More <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Lead Gen Section */}
        <div className="mt-24 p-12 bg-[#0A192F] rounded-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Ahead of Academic Trends</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Subscribe to receive our monthly newsletter featuring industry-alignment 
            strategies and placement success frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Official Email Address" 
              className="flex-grow px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;