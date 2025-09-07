import React from 'react';

const CollaborationNetwork = () => {
  return (
    <div className="relative h-full w-full group">
      {/* Background SVG with connecting paths */}
      <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
        <svg 
          className="absolute top-0 left-1/2 -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]" 
          width="350" 
          height="150" 
          viewBox="0 0 350 150"
        >
          <g opacity="0.3">
            <path 
              d="M50 75 Q100 25 150 75 Q200 125 250 75 Q300 25 350 75" 
              stroke="#4A5568" 
              strokeWidth="1" 
              fill="none"
              opacity="0.4"
            />
            <path 
              d="M25 100 Q75 50 125 100 Q175 50 225 100 Q275 50 325 100" 
              stroke="#4A5568" 
              strokeWidth="1" 
              fill="none"
              opacity="0.3"
            />
          </g>
        </svg>
        
        {/* Central Profile */}
        <span className="absolute top-2.5 left-1/2 -translate-x-1/2">
          <div className="relative mt-9 group-hover:scale-105 transition-transform duration-300">
            <svg className="mx-auto" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <g>
                <rect x="8" y="8" width="84" height="84" rx="42" fill="#2A2A2A" />
                <rect 
                  className="stroke-[#494949] transition-colors duration-500 group-hover:stroke-purple-400" 
                  x="8.5" 
                  y="8.5" 
                  width="83" 
                  height="83" 
                  rx="41.5" 
                  stroke="#494949" 
                  strokeWidth="1" 
                />
              </g>
            </svg>
            <img 
              className="absolute top-1/2 left-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" 
              alt="Main profile" 
            />
          </div>
        </span>
        
        {/* Desktop Connection Avatars */}
        <span className="hidden lg:block">
          <div 
            className="absolute w-12 h-12 p-1 z-10 animate-fadeIn transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-1" 
            style={{top: '55%', left: '28%', animationDelay: '0.5s'}}
          >
            <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-12 h-12 p-1 hover:scale-110 group-hover:scale-105 transition-transform duration-300">
              <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Connection" />
            </div>
          </div>
          
          <div 
            className="absolute w-14 h-14 p-1 z-10 animate-fadeIn transition-all duration-700 group-hover:-translate-x-2 group-hover:translate-y-1" 
            style={{top: '53%', left: '63%', animationDelay: '0.7s'}}
          >
            <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-14 h-14 p-1 hover:scale-110 group-hover:scale-105 transition-transform duration-300">
              <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Connection" />
            </div>
          </div>
          
          <div 
            className="absolute w-12 h-12 p-1 z-10 animate-fadeIn transition-all duration-700 group-hover:translate-x-1 group-hover:translate-y-2" 
            style={{top: '4%', left: '32%', animationDelay: '0.3s'}}
          >
            <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-12 h-12 p-1 hover:scale-110 group-hover:scale-105 transition-transform duration-300">
              <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Connection" />
            </div>
          </div>
          
          <div 
            className="absolute w-10 h-10 p-1 z-10 animate-fadeIn transition-all duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1" 
            style={{top: '8%', left: '78%', animationDelay: '0.9s'}}
          >
            <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-10 h-10 p-1 hover:scale-110 group-hover:scale-105 transition-transform duration-300">
              <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/women/35.jpg" alt="Connection" />
            </div>
          </div>
          
          <div 
            className="absolute w-9 h-9 p-1 z-10 animate-fadeIn transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-1" 
            style={{top: '7%', left: '11%', animationDelay: '0.1s'}}
          >
            <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-9 h-9 p-1 hover:scale-110 group-hover:scale-105 transition-transform duration-300">
              <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Connection" />
            </div>
          </div>
        </span>
        
        {/* Mobile Connection Avatars */}
        <span className="lg:hidden">
          <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-10 h-10 p-1 absolute top-6 left-4 hover:scale-110 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Connection" />
          </div>
          
          <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-9 h-9 p-1 absolute bottom-24 left-4 hover:scale-110 group-hover:scale-105 group-hover:translate-x-2 group-hover:translate-y-1 transition-transform duration-300">
            <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Connection" />
          </div>
          
          <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-12 h-12 p-1 absolute top-4 right-16 hover:scale-110 group-hover:scale-105 group-hover:-translate-x-1 group-hover:translate-y-2 transition-transform duration-300">
            <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Connection" />
          </div>
          
          <div className="rounded-full border border-white/10 bg-[#2A2A2A] w-10 h-10 p-1 absolute right-4 bottom-20 hover:scale-110 group-hover:scale-105 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-transform duration-300">
            <img className="rounded-full object-cover w-full h-full" src="https://randomuser.me/api/portraits/women/35.jpg" alt="Connection" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default CollaborationNetwork;
