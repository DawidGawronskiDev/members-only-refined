const TESTIMONIALS = [
  {
    quote:
      "Finally, a space where I can share my thoughts without worrying about ads or data tracking. Feels safe, feels right.",
    author: "Alex M.",
  },
  {
    quote:
      "I love how focused the discussions are. No spam, no noise—just real, valuable conversations.",
    author: "Sarah L.",
  },
  {
    quote:
      "Getting an access key made me feel like part of something special. This isn’t just another social platform—it’s a private club for thinkers.",
    author: "James R.",
  },
  {
    quote: "The best-kept secret for deep, focused discussions.",
    author: "Emily K.",
  },
  {
    quote:
      "Finally, a space where I can speak freely without worrying about my data being sold. This is the future of online discussions!",
    author: "Rachel W.",
  },
  {
    quote:
      "The exclusivity ensures a high standard of discussion. I’ve gained new insights and ideas that helped me in my career.",
    author: "Lisa N.",
  },
  {
    quote:
      "Every conversation here is insightful. No clickbait, no shallow posts—just meaningful discussions that actually matter.",
    author: "David P.",
  },
  {
    quote:
      "Unlike other platforms, people here actually engage thoughtfully. I’ve built strong professional relationships just by being active.",
    author: "Tomek P.",
  },
  {
    quote: "No ads, just real people having real conversations.",
    author: "Mark T.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-4 gap-4">
      <div className="flex flex-col gap-4">
        {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
          <Testimonial {...testimonial} key={index} />
        ))}
      </div>
      <div className="hidden md:flex md:flex-col md:gap-4">
        {TESTIMONIALS.slice(3, 6).map((testimonial, index) => (
          <Testimonial {...testimonial} key={index} />
        ))}
      </div>
      <div className="hidden md:flex md:flex-col md:gap-4">
        {TESTIMONIALS.slice(6, 9).map((testimonial, index) => (
          <Testimonial {...testimonial} key={index} />
        ))}
      </div>
    </div>
  );
};

const Testimonial = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
      <blockquote className="font-extralight">{quote}</blockquote>
      <div className="flex gap-3">
        <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
        <p className="opacity-100 font-bold">{author}</p>
      </div>
    </div>
  );
};

export { Testimonials, Testimonial };
