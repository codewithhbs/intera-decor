
"use client";  // If using Next.js App Router

import React, { useEffect, useState } from "react";

const stats = [
  { id: 1, label: "Happy Customers", value: 800 },
  { id: 2, label: "Spices Sold (Kg)", value: 110 },
  { id: 3, label: "Years of Trust", value: 3 },
  { id: 4, label: "Awards Won", value: 1 },
];

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(handle);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  return (
    <div className="bg-gradient-to-b from-[#F4F1EA] to-[#f9ebdb] w-full py-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB229] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB229] to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-[#81190B] mb-4 relative inline-block">
            Our Achievements
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFB229] rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            For over two years, we've been committed to providing the finest quality spices to kitchens around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-8 border border-[#f5e6d9] hover:border-[#FFB229]/30"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FFB229]/50 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FFB229]/50 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FFB229]/50 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FFB229]/50 rounded-br-lg"></div>
              
              <div className="text-center relative z-10">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#81190B] mb-3 transition-all duration-300 group-hover:scale-105">
                  <Counter end={stat.value} duration={2500} />+
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#FFB229] to-[#81190B] mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-[#81190B] transition-colors">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative bottom element */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFB229] to-[#81190B] rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
}

// "use client";  // If using Next.js App Router

// import React, { useEffect, useState } from "react";

// const stats = [
//   { id: 1, label: "Happy Customers", value: 12000 },
//   { id: 2, label: "Spices Sold (Kg)", value: 45000 },
//   { id: 3, label: "Years of Trust", value: 25 },
//   { id: 4, label: "Awards Won", value: 18 },
// ];

// function Counter({ end, duration = 2000 }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration / 16);
//     const handle = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         clearInterval(handle);
//         setCount(end);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, 16);

//     return () => clearInterval(handle);
//   }, [end, duration]);

//   return <span>{count.toLocaleString()}</span>;
// }

// export default function StatsCounter() {
//   return (
//     <div className="bg-gradient-to-b from-[#F4F1EA] to-[#f9ebdb] w-full py-16 px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
//         <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-12">
//           <h2 className="text-3xl lg:text-4xl font-black text-[#81190B] mb-6">
//             Our Legacy of Excellence
//           </h2>
//           <p className="text-gray-700 mb-6">
//             For over two decades, we've been committed to providing the finest quality spices to kitchens around the world.
//           </p>
//           <button className="px-6 py-3 bg-[#81190B] text-white rounded-lg hover:bg-[#6a1408] transition-colors">
//             Discover Our Story
//           </button>
//         </div>
        
//         <div className="lg:w-3/5 grid grid-cols-2 gap-6">
//           {stats.map((stat) => (
//             <div
//               key={stat.id}
//               className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#f5e6d9]"
//             >
//               <div className="text-3xl lg:text-4xl font-extrabold text-[#FFB229] mb-2">
//                 <Counter end={stat.value} duration={2500} />+
//               </div>
//               <p className="text-sm md:text-base font-medium text-gray-800">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }