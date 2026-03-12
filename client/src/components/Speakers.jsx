import { useState, useEffect } from "react";
import { FaArrowRight, FaTimes, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

import akerele from "../assets/speakers/akerle.jpeg";
import okoro from "../assets/speakers/okoro.jpeg";
import theresa from "../assets/speakers/theresa.jpeg";

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  const speakers = [
    {
      name: "Akerele Oluranti",
      role: "Speaker",
      image: akerele,
      bio: "Oluranti is a multidisciplinary, award-winning creative and brand communications expert with nearly a decade of industry experience and a restless creative mind, driven to operate at the frontlines of the creative communications industry as both a strategic thinker and a hands-on maker. His work with brands such as ADIDAS, Nestlé, VISA, UNICEF, Coca-Cola, and more has earned him accolades including Young Lions 2021 Winner. He also publishes Man In Progress every August, a yearly memoir that inspires young adults.",
      social: {
        instagram: "https://www.instagram.com/superakerele?igsh=MTlzOTY4dDExYTVpMw==",
        linkedin: "https://www.linkedin.com/in/olurantiakerele?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        facebook: "https://facebook.com/akerle",
        whatsapp: "https://wa.me/1234567890"
      }
    },
    {
      name: "Okoro Sunday",
      role: "Host",
      image: okoro,
      bio: "Okoro Sunday is a young University of Lagos graduate who discovered his passion for writing in 2024. He launched an Instagram platform called The Writing Switch to share engaging content weekly, showcasing a distinct, expressive writing style. He also contributes to social media teams for FEES and participates in creative writing challenges.",
      social: {
        instagram: "https://www.instagram.com/okorosunday_?igsh=MXF2M254eGhvYW5yeQ%3D%3D&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/sunday-okoro-756571195?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        facebook: "#",
        whatsapp: "#"
      }
    },
    {
      name: "Theresa Adekunle",
      role: "Moderator",
      image: theresa,
      bio: "Theresa Adekunle is a creative professional with expertise in branding, digital content creation, publicity, and live audience engagement. As the Creative Lead of Spill the Tee, she drives meaningful conversations and tells real-life stories through thought-provoking narratives that resonate with diverse audiences.",
      social: {
        instagram: "https://www.instagram.com/a.y.o.o.l.u.w.a_?igsh=b2Vucm9menZnZHhm",
        linkedin: "https://www.linkedin.com/in/theresa-adekunle?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        facebook: "#",
        whatsapp: "#"
      }
    }
  ];

  return (
    <section className="py-16 text-center bg-blue-900 text-white">
      <h2 className="text-3xl font-bold mb-12">Meet The Speakers</h2>

      {/* Speaker Cards */}
      <div className={`grid md:grid-cols-3 gap-10 px-10 transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {speakers.map((sp, index) => (
          <div key={index} className="bg-blue-800 rounded-lg overflow-hidden shadow-lg relative group">
            <img src={sp.image} alt={sp.name} className="w-full object-contain" />
            <div className="p-6">
              <h3 className="text-xl font-bold">{sp.name}</h3>
              <p className="text-gray-300">{sp.role}</p>
              <button
                onClick={() => setActiveSpeaker(sp)}
                className="mt-4 flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                View Profile <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-xl max-h-[80vh] p-6 relative animate-fadeIn flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setActiveSpeaker(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <FaTimes size={24} />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              <img
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-2xl font-bold mb-2 text-center text-blue-900">
                {activeSpeaker.name}
              </h3>

              <p
                className="text-gray-700 mb-4 text-center font-serif"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {activeSpeaker.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-6 text-blue-900 text-2xl">
                {activeSpeaker.social.instagram && <a href={activeSpeaker.social.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>}
                {activeSpeaker.social.linkedin && <a href={activeSpeaker.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>}
                {activeSpeaker.social.facebook && <a href={activeSpeaker.social.facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>}
                {activeSpeaker.social.whatsapp && <a href={activeSpeaker.social.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /></a>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Speakers;