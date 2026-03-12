import logo from "../assets/Speakers/logos.png"

const Hero = ({ openForm }) => {
  return (

    <section className="relative bg-blue-900 text-white px-6 text-center overflow-hidden">

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="bubble w-16 h-16 left-10 bottom-0"></span>
        <span className="bubble w-24 h-24 left-1/4 bottom-0"></span>
        <span className="bubble w-20 h-20 right-20 bottom-0"></span>
        <span className="bubble w-32 h-32 right-1/3 bottom-0"></span>
        <span className="bubble w-14 h-14 left-1/2 bottom-0"></span>
      </div>

      {/* Logo */}
      <img
        src={logo}
        alt="Webinar Logo"
        className="mx-auto w-52 relative"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
        HOW CREATIVITY WORKS    
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-300 mb-6 relative">
        Turning Thoughts into Intentional Expression
      </p>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed relative ">
        A webinar aimed at bringing together writers, creative thinkers,
        digital storytellers, and content creators from across the globe
        to explore the transformative power of creativity and digital
        platforms in shaping the future of writing and storytelling.
      </p>

      {/* Button */}
      <button
        onClick={openForm}
        className="mt-10 bg-pink-500 hover:bg-pink-600 transition px-8 py-3 rounded-lg font-semibold relative"
      >
        Register Now
      </button>

      {/* Bubble Animation Styles */}
      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 9999px;
          background: rgba(255,255,255,0.1);
          animation: floatUp 12s linear infinite;
        }

        .bubble:nth-child(2){ animation-duration: 14s; }
        .bubble:nth-child(3){ animation-duration: 10s; }
        .bubble:nth-child(4){ animation-duration: 18s; }
        .bubble:nth-child(5){ animation-duration: 11s; }

        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-900px);
            opacity: 0;
          }
        }
      `}</style>

    </section>

  )
}

export default Hero