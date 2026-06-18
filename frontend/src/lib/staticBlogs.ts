export interface StaticBlog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  isStatic?: boolean;
}

export const staticBlogs: StaticBlog[] = [
  {
    _id: "static-1",
    slug: "the-changing-reality-of-education-why-many-cbse-students-feel-pressured-about-their-future",
    title: "The Changing Reality of Education: Why Many CBSE Students Feel Pressured About Their Future",
    categories: "Education",
    readTime: "7 min",
    date: "May 25, 2026",
    excerpt: "Looking for Solar Installation Near Me? Discover how long Solar Installation in Mumbai takes, including approvals, setup, and activation timelines.",
    image: "/staticblog_img1.png",
    content: `
      <h2>Understanding the Solar Installation Timeline</h2>
      <p>Switching to solar energy is a significant step toward sustainability and cost savings. One of the most common questions homeowners and business owners ask is: <strong>How long does a solar panel installation take?</strong></p>
      <p>While the physical installation of solar panels on your roof might only take a few days, the entire process—from the initial consultation to the final grid connection (activation)—involves several stages.</p>
      
      <h3>1. Consultation and Site Assessment (1-3 Days)</h3>
      <p>Before any work begins, solar engineering experts must evaluate your property. They check the roof's health, angle, shading, and structural integrity to ensure it can support solar panels. They also review your electrical panel and energy usage history to design the optimal system size.</p>

      <h3>2. System Design and Permitting (2-4 Weeks)</h3>
      <p>This is often the most time-consuming phase. Engineers create a customized blueprint of your solar system. This design is then submitted to local authorities and discoms (electricity distribution companies) in Mumbai for necessary permits and approvals. In Mumbai, obtaining net metering approvals and structural clearances requires coordination with local discoms like Tata Power, Adani Electricity, or MSEDCL.</p>

      <h3>3. Physical Installation (1-3 Days)</h3>
      <p>The exciting part! Once the permits are secured, the installation team arrives. They install the racking (mounting structures), place the panels, set up the inverter, and perform the wiring. For typical residential systems, this takes just 1 to 2 days. Larger commercial systems may take up to a week.</p>

      <h3>4. Inspection and Net Metering Activation (1-3 Weeks)</h3>
      <p>After installation, the system cannot be turned on immediately. A local authority inspector must verify that the installation complies with electrical and safety codes. Once approved, the utility company installs a bi-directional net meter, allowing you to feed excess solar power back into the grid. Finally, your system is commissioned and activated!</p>

      <p>In total, you can expect the entire process to take anywhere from <strong>4 to 8 weeks</strong>, with the physical setup taking only a tiny fraction of that time.</p>
    `,
    isStatic: true
  },
  {
    _id: "static-2",
    slug: "how-much-electricity-bill-can-you-reduce-with-solar-in-mumbai-flats",
    title: "How Much Electricity Bill Can You Reduce with Solar in Mumbai Flats?",
    categories: "Residental solar pannel installation",
    readTime: "7 min",
    date: "May 24, 2026",
    excerpt: "Discover how much you can save on electricity bills with residential solar panel installation in Mumbai flats. Learn about costs, savings potential (up to 90%), system options, and government subsidies that make solar a smart and sustainable investment for homeowners.",
    image: "/staticblog_img2.png",
    content: `
      <h2>Solar Savings for Mumbai Apartment Owners</h2>
      <p>Living in a Mumbai flat doesn't mean you can't enjoy the benefits of solar energy. With rising tariff rates, residential solar panel installations are becoming highly attractive for housing societies and flat owners who have access to shared roof space.</p>
      
      <h3>Potential Savings: Up to 90%</h3>
      <p>By installing rooftop solar systems, residential flats in Mumbai can cut down their common area electricity bills (for lifts, lobby lighting, and water pumps) by up to 90%. Individual flat owners using group net metering can also offset their personal power bills significantly.</p>

      <h3>Government Subsidies (PM-Surya Ghar)</h3>
      <p>Under the government's PM-Surya Ghar Muft Bijli Yojana, homeowners can get substantial subsidies for residential solar setups. This drastically reduces the initial investment and shortens the payback period to just 3 to 4 years, after which the electricity generated is completely free for the next 20+ years.</p>
    `,
    isStatic: true
  },
  {
    _id: "static-3",
    slug: "how-much-electricity-does-a-100kw-solar-system-produce",
    title: "How much electricity does a 100kW solar system produce?",
    categories: "solar system",
    readTime: "8 min",
    date: "May 22, 2026",
    excerpt: "It is essential to understand the amount of energy that a 100kW solar system produces because many businesses and other entities who have considered switching to solar energy are currently in the lookout of a reliable Solar Energy Company.",
    image: "/staticblog_img3.jpg",
    content: `
      <h2>The Output Capacity of a 100kW Solar System</h2>
      <p>For commercial facilities, medium-sized industries, and large residential complexes, a 100kW solar system is a common sweet spot. But what does a 100kW system actually deliver in terms of power output?</p>
      
      <h3>Daily and Annual Power Generation</h3>
      <p>On average, a 100kW solar system generates approximately 400 to 450 units (kWh) of electricity per day, depending on sunlight conditions and geographical location. Over a year, this translates to about 1,40,000 to 1,60,000 units of clean electricity.</p>

      <h3>Roof Space Requirements</h3>
      <p>To install a 100kW solar system, you need roughly 8,000 to 10,000 square feet of shadow-free rooftop or ground space. Ensuring optimal tilt and direction is critical to achieving maximum efficiency.</p>
    `,
    isStatic: true
  },
];
