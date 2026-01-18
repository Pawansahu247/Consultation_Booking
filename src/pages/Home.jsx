// import ConsultantImg from "../assets/Consultant.jpg";

// const Home = () => {
//   return (
//     <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div className="text-center lg:text-left">
//             <span className="inline-block mb-6 px-4 py-1 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
//               University Consulting & Placement Strategy
//             </span>

//             <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
//               Helping universities build
//               <span className="block text-blue-600 mt-2">
//                 industry ready graduates
//               </span>
//             </h1>

//             <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
//               Through structured exam readiness programs faculty enablement
//               and corporate aligned academic and placement frameworks
//             </p>

//             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
//                 Book Consultation
//               </button>

//               <button className="px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition">
//                 View Services
//               </button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative flex justify-center lg:justify-end">
//             <div className="relative bg-slate-100 p-4 rounded-3xl max-w-md">
//               <img
//                 src={ConsultantImg}
//                 alt="Anubhav Chakraborty speaking at university"
//                 className="rounded-2xl shadow-xl object-cover"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import { Link } from "react-router-dom"; // 1. Add this import at the top
import ConsultantImg from "../assets/Consultant.jpg";

const Home = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-6 px-4 py-1 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
              University Consulting & Placement Strategy
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Helping universities build
              <span className="block text-blue-600 mt-2">
                industry ready graduates
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Through structured exam readiness programs faculty enablement
              and corporate aligned academic and placement frameworks
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* 2. Change the button to a Link component */}
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition text-center"
              >
                Book Consultation
              </Link>

              <Link 
                to="/services" 
                className="px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition text-center"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative bg-slate-100 p-4 rounded-3xl max-w-md">
              <img
                src={ConsultantImg}
                alt="Anubhav Chakraborty speaking at university"
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;