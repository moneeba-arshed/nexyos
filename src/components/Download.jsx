import React from 'react';

const Download = () => {
  return (
    <div className=" bg-gray-100 mt-60 py-80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Guide Covers */}
          <div className="order-2 lg:order-1">
            <div className="relative">
           {/* Right Section - Pelco eBook Image */}
           <div className="order-1 ">
             <div className="flex justify-center">
               <img 
                 src="https://pelco-566282893.imgix.net/50-50-module-images/Pelco-Retail-eBook-850x850-compressed.png?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=a31d43e7d9d7a7c10125563ac65ee2de"
                 alt="Pelco Retail eBook"
                 className="w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-300"
               />
             </div>
           </div>
            </div>
          </div>

          {/* Right Section - Text Content and CTA */}
          <div className="order-2 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-left text-gray-800 leading-tight">
                Download our free retail security guide
              </h2>
              
              <div className='mt-28'>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-left">
                  What's inside:
                </h3>
                <ul className="space-y-3 mt-16 DownloadGuide">
                  <li className="flex items-start">
                    <span className="text-gray-700">Key retail security threats and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">Essential considerations for security systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">Expert loss prevention strategies and tips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">Comprehensive security checklist for retail businesses</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 items-start flex justify-start mt-28">
                <button className="DownloadButton font-semibold py-12 px-12 rounded-lg transition-colors duration-300" style={{border:'2px solid [#00667C'}}>
                  Download guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
