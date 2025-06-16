import React from "react";
import Header from "./Header";
import Implantations from "./Implantations";

import Mission from "./Mission";

export default function GateAfricaPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header avec animation de dégradé */}
      <Header />

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Implantations />

        <Mission />
      </div>
    </div>
  );
}
