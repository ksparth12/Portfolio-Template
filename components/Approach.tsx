import React from "react";
import ApproachCard from "./ui/ApproachCard";

const Approach = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <ApproachCard
          title="Planning & Strategy"
          phase="Phase 1"
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          cardType={1}
        />
        
        <ApproachCard
          title="Development & Progress Update"
          phase="Phase 2"
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          cardType={2}
        />
        
        <ApproachCard
          title="Development & Launch"
          phase="Phase 3"
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          cardType={3}
        />
      </div>
    </section>
  );
};

export default Approach;
