import { useState, useEffect } from "react";
import {FaInstagram} from "react-icons/fa";

const EventDetails = ({ openForm }) => {

  const webinarDate = new Date("2026-03-29T19:00:00+01:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {

      const now = new Date();
      const difference = webinarDate - now;

      if (difference <= 0) {

        clearInterval(interval);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });

        setEventStarted(true);

      } else {

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="bg-blue-50 py-20 px-6 text-center">

      {/* Event Date */}
      <h2 className="text-3xl font-bold mb-6">
        29th March 2026 | 7PM WAT
      </h2>

      {/* Countdown */}
      <div className="flex justify-center gap-8 mb-12 text-blue-900">

        <div>
          <span className="block text-4xl font-bold">{timeLeft.days}</span>
          <span className="text-sm">Days</span>
        </div>

        <div>
          <span className="block text-4xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm">Hours</span>
        </div>

        <div>
          <span className="block text-4xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm">Minutes</span>
        </div>

        <div>
          <span className="block text-4xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm">Seconds</span>
        </div>

      </div>

      {/* Register Button */}
      <a
        href="https://forms.gle/k77hP35dERb9GsfJ6"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-16 inline-block bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition"
      >
        Register Using Google Form
      </a>



      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-16">

        <h3 className="text-3xl font-bold mb-10 text-center text-blue-900">
          Event Structure
        </h3>

        <div className="space-y-6">

          <div className="flex items-start gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white transition">
              1
            </div>
            <p className="text-gray-700 text-lg group-hover:text-blue-900 transition">
              Opening & Welcome
            </p>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white transition">
              2
            </div>
            <p className="text-gray-700 text-lg group-hover:text-blue-900 transition">
              Introduction of Speakers
            </p>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white transition">
              3
            </div>
            <p className="text-gray-700 text-lg group-hover:text-blue-900 transition">
              Main Talk: How Creativity Works
            </p>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white transition">
              4
            </div>
            <p className="text-gray-700 text-lg group-hover:text-blue-900 transition">
              Practical Insights for Writers
            </p>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white transition">
              5
            </div>
            <p className="text-gray-700 text-lg group-hover:text-blue-900 transition">
              Q & A Session
            </p>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white transition">
              6
            </div>
            <p className="text-gray-700 text-lg group-hover:text-blue-900 transition">
              Closing Remarks
            </p>
          </div>

        </div>

      </div>


      {/* Q&A SECTION */}
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">

        <h3 className="text-2xl font-bold mb-6 text-blue-900">
          Ask a Question
        </h3>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
        >

          <textarea
            name="question"
            placeholder={
              eventStarted
                ? "Ask your question here..."
                : "Questions will open when the event starts."
            }
            className="w-full border p-3 rounded resize-none h-32"
            disabled={!eventStarted}
          ></textarea>

          <button
            type="submit"
            disabled={!eventStarted}
            className={`w-full py-3 rounded text-white transition ${eventStarted
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Submit Question
          </button>

        </form>

        {!eventStarted && (
          <p className="text-sm text-gray-500 mt-4">
            The Q&A will open once the webinar begins.
          </p>
        )}

      </div>

      {/* Social Media Footer */}

<div className="mt-20 flex flex-col items-center gap-4">

<div className="w-24 h-[1px] bg-gray-300"></div>

<a
href="https://www.instagram.com/writingswitch?igsh=NnN4YnN1emZoODUy&utm_source=qr"
target="_blank"
rel="noopener noreferrer"
className="text-blue-900 text-3xl hover:text-pink-500 transition"
>
<FaInstagram />
</a>

<p className="text-sm text-gray-500">
Follow us on Instagram for updates
</p>

</div>

      
      

      

    </section>

    
  );
};

export default EventDetails;