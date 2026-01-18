const Engagement = () => {
  const models = [
    {
      title: "One-Time Consultation",
      description: "A focused, deep-dive session to solve a specific academic or placement bottleneck.",
      features: [
        "90-Minute Strategy Audit",
        "Placement Cell Gap Analysis",
        "Actionable Roadmap Report",
        "Immediate Implementation Steps"
      ],
      bestFor: "Universities needing a quick expert perspective.",
      cta: "Book Session",
      color: "bg-blue-50"
    },
    {
      title: "Monthly Retainer",
      description: "Continuous support and strategic oversight for sustained institutional growth.",
      features: [
        "Dedicated Advisory Hours",
        "Monthly Faculty Workshops",
        "Direct Corporate Outreach",
        "Student Progress Monitoring"
      ],
      bestFor: "Institutions aiming for a complete turnaround.",
      cta: "Request Proposal",
      color: "bg-[#0A192F] text-white",
      highlight: true
    },
    {
      title: "Project-Based",
      description: "End-to-end execution of specific initiatives like curriculum overhauls.",
      features: [
        "Custom Program Design",
        "Milestone-Based Delivery",
        "On-Campus Execution",
        "Final Impact Assessment"
      ],
      bestFor: "Launching new departments or training centers.",
      cta: "Start Project",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Collaboration</h2>
          <h1 className="text-4xl font-bold text-[#0A192F] mb-4">Flexible Engagement Models</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a collaboration framework that aligns with your university's 
            immediate needs and long-term academic goals.
          </p>
        </div>

        {/* Pricing/Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border ${model.highlight ? 'border-blue-500 shadow-xl' : 'border-gray-100'} ${model.color} flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className={`text-sm mb-8 ${model.highlight ? 'text-slate-300' : 'text-gray-500'}`}>
                  {model.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="pt-6 border-t border-gray-100/20 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">Best For</p>
                  <p className="text-sm font-medium">{model.bestFor}</p>
                </div>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  model.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#0A192F] text-white hover:bg-slate-800'
                }`}>
                  {model.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section Hint */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            Not sure which model fits your university? 
            <a href="/contact" className="text-blue-600 font-semibold ml-1 underline">Schedule a discovery call.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Engagement;