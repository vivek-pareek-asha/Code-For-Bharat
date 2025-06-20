import { motion } from "framer-motion";

interface TeamCardArgs {
  imageUrl: string;
  name: string;
  linkedin_Url: string;
}

export const TeamCard = ({ imageUrl, name, linkedin_Url }: TeamCardArgs) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative w-32 sm:w-36 md:w-40 lg:w-44 h-[15rem] sm:h-[16rem] md:h-[17rem] lg:h-[18rem] rounded-2xl shadow-lg cursor-pointer hover:shadow-xl flex flex-col justify-center items-center transition-all duration-300"
      style={{ background: 'linear-gradient(to bottom, rgb(182, 75, 51), rgb(202, 58, 26))' }}
    >
      {/* Image Container */}
      <div className="bg-[#c04123] border-4 rounded-xl border-black overflow-hidden w-[85%] h-[55%]">
        <img
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          src={imageUrl}
          alt={name}
        />
      </div>

      {/* Text Content */}
      <div className="p-2 flex flex-col justify-center items-center">
        <div className="font-zendots font-bold text-center text-black text-sm sm:text-base">
          {name}
        </div>
        <div className="w-24 h-[1px] bg-black my-1" />

        <a
          href={linkedin_Url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mt-1 font-zendots text-sm sm:text-base hover:text-blue-600 transition-all duration-300"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}

const teamCards = [
  {
    id: 1,
    name: "Aaradhy gaur",
    imageUrl: "/images/alice.jpg",
    linkedin_Url: "https://linkedin.com/in/alicejohnson"
  },
  {
    id: 2,
    name: "Bob Smith",
    imageUrl: "/images/bob.jpg",
    linkedin_Url: "https://linkedin.com/in/bobsmith"
  },
  {
    id: 3,
    name: "Carol Lee",
    imageUrl: "/images/carol.jpg",
    linkedin_Url: "https://linkedin.com/in/carollee"
  },
  {
    id: 4,
    name: "David Kim",
    imageUrl: "/images/david.jpg",
    linkedin_Url: "https://linkedin.com/in/davidkim"
  },
  {
    id: 5,
    name: "Eva Patel",
    imageUrl: "/images/eva.jpg",
    linkedin_Url: "https://linkedin.com/in/evapatel"
  }
];

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {teamCards.map((payload) => (
    <TeamCard
      key={`organizer-${payload.id}`}
      imageUrl={payload.imageUrl}
      linkedin_Url={payload.linkedin_Url}
      name={payload.name}
    />
  ))}
</div>
