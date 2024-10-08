import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Physical Therapy",
          "Researcher",
          "Neuro-Developmental Treatment Therapist",
          "Proprioceptive NeuroMuscular Facilitation Therapist",
          "Yoga Therapist"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
