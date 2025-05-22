import Service from "./Service";
import Header from "./Header";
import Roadshow from "./Roadshow";
import Benefit from "./Benefit";

export default function Landmark() {
  return (
    <section className="relative overflow-hidden" id="landmark">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-5"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <Header />

          {/* Premium Services */}
          <Service />

          {/* Roadshow Elite Showcase */}
          <Roadshow />

          {/* Advantages Grid */}
          <Benefit />
        </div>
      </div>
    </section>
  );
}
