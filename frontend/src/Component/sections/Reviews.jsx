import React, { useEffect, useState } from "react";

/* ---------------- REVIEWS DATA ---------------- */
const reviews = [
  {
    quote: "Very helpful for shortlisting colleges...",
    name: "Ishita Gupta",
    rating: 5,
  },
  {
    quote: "The team is super patient and helping...",
    name: "Dhriti Ahuja",
    rating: 5,
  },
  {
    quote: "I found their counseling sessions very insightful...",
    name: "Fiona",
    rating: 4,
  },
  {
    quote: "The team provides practical and realistic advice...",
    name: "Aarti Prasad",
    rating: 5,
  },
  {
    quote: "Very helpful with good suggestions.",
    name: "Mishal Kothari",
    rating: 5,
  },
  {
    quote: "Great mentorship and responsiveness.",
    name: "Vidya Nahar",
    rating: 5,
  },
  {
    quote: "Good coaching and excellent guidance...",
    name: "Hussain Mohammed",
    rating: 5,
  },
  {
    quote: "Excelencia made my study abroad journey easier.",
    name: "Tanay Gujarathi",
    rating: 5,
  },
];

/* DUPLICATE FOR INFINITE EFFECT */
const extendedReviews = [...reviews, ...reviews];

/* ---------------- COMPONENT ---------------- */
const Reviews = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const total = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* RESET WITHOUT JUMP */
  useEffect(() => {
    if (index >= total) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 600); // matches transition duration

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-sm md:text-lg text-gold font-medium mb-2">
            STUDENT STORIES
          </p>

          <h2 className="font-display max-w-xl mx-auto text-3xl sm:text-5xl lg:text-6xl text-ink mb-5">
            Real Journeys. <br />
            <span className="text-gold">Real Results.</span>
          </h2>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(index * 260) / visibleCards}%)`,
            }}
          >
            {extendedReviews.map((review, i) => (
              <div key={i} className="md:w-1/3 w-60 shrink-0 px-3">
                <div className="bg-white p-6 border border-black/40 shadow-md rounded-xl h-full hover:shadow-xl transition">
                  {/* STARS */}
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-lg ${star <= review.rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 text-sm">
                    "{review.quote}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {review.name}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;