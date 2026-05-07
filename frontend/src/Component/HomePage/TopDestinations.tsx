import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    name: "UK",
    listings: "Knowledge Capital",
    image: "https://thumbs.dreamstime.com/b/london-uk-flag-architecture-background-ben-big-brexit-bridge-britain-british-campaign-capital-city-clock-country-decision-160699984.jpg"
  },
  {
    name: "USA",
    listings: "Academic Excellence",
    image: "https://www.shutterstock.com/image-photo/american-flag-on-perfect-pole-600nw-2272801609.jpg"
  },
  {
    name: "UAE",
    listings: "Innovation Hub",
    image: "https://img.freepik.com/premium-photo/18-january-2023-dubai-uae-scenic-view-dubai-skyline-with-skyscraper-buildings-national-flag-sightseeing-travel-destinations-arab-emirates_984126-306.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "France",
    listings: "Cultural Excellence",
    image: "https://i.pinimg.com/736x/5b/a5/19/5ba519d0c9563fd8ba119f7882f1207a.jpg"
  },
  {
    name: "Italy",
    listings: "Heritage & Design",
    image: "https://c.stocksy.com/a/2NRH00/z9/4156792.jpg"
  },
  {
    name: "Germany",
    listings: "Engineering Powerhouse",
    image: "https://img.freepik.com/premium-photo/scenic-view-german-village-with-flag-historic-church-by-river-generative-ai_437323-45844.jpg?semt=ais_rp_50_assets&w=740&q=80"
  },
  {
    name: "Spain",
    listings: "Vibrant Learning",
    image: "https://img.freepik.com/premium-photo/panoramic-view-city-seville-from-observation-platform-tower-gold-torre-del-oro-spain_501530-8195.jpg?semt=ais_rp_progressive&w=740&q=80"
  },
  {
    name: "New Zealand",
    listings: "World-Class Education",
    image: "https://cdn.mappr.co/wp-content/uploads/2024/01/new-zealand-flag-wellington.jpg"
  },

  {
    name: "Malta",
    listings: "Mediterranean Learning Hub",
    image: "https://thumbs.dreamstime.com/b/image-depicts-maltese-flag-waving-against-sunset-backdrop-valletta-malta-flag-features-white-red-design-388458275.jpg"
  },

  {
    name: "Latvia",
    listings: "Gateway to European Education",
    image: "https://latvianwanderer.wordpress.com/wp-content/uploads/2018/02/ab-2.jpg?w=1000"
  },

  {
    name: "Lithuania",
    listings: "Affordable European Studies",
    image: "https://img.freepik.com/premium-photo/flag-vilnius-city-lithuania_134785-15548.jpg"
  },

  {
    name: "Austria",
    listings: "Tradition Meets Innovation",
    image: "https://images.unsplash.com/photo-1566234258349-77b600954d84?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVzdHJpYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Canada",
    listings: "Quality of Life",
    image: "https://media.istockphoto.com/id/1368242984/photo/canada-flag-waving-in-ottawa.jpg?s=612x612&w=0&k=20&c=6xztoco_fpx0MD6kntgO5KaN5PLhOqtW4pI1MbG9kXw="
  },
  {
    name: "Australia",
    listings: "Global Opportunities",
    image: "https://media.istockphoto.com/id/509448415/photo/australian-flag-flying-above-city-hall.jpg?s=612x612&w=0&k=20&c=sW7z9-KqSKlVExRzaFW7bBjGyTL0X6wPHISnjzbEYGU="
  },
];

export default function CountrySlider() {
  return (
    <section className="py-10 bg-white overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-blue-950 font-bold tracking-widest mb-3   text-sm">
          The World is Your Campus
        </p>

        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#c1972d]">
          Choose the Right Country.
          <span className="text-blue-950">Choose the Right Future.</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">

        <div className="flex gap-6 w-max slider-track hover:[animation-play-state:paused]">

          {[...destinations, ...destinations].map((item, index) => (

            <div
              key={index}
              className="min-w-75 h-105 rounded-3xl overflow-hidden relative group shrink-0"
            >

              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 p-6 w-full">

                <h3 className="text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center mt-2">

                  <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transition">
                    {item.listings}
                  </p>

                  <ArrowUpRight className="text-white" size={20} />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CSS INSIDE COMPONENT */}
      <style>{`
        .slider-track {
          animation: scroll 55s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}