import { extendedLogos } from "../../constants";
import {motion} from "framer-motion";
const LogoCarousel = () => {
  return (
    <div className="w-full overflow-hidden  py-12 mt-10">
      <motion.div className="flex space-x-16"
      style={{
        width:"fit-content",
        display:"flex",
        gap:"4rem",
      }}
      initial={{
        opacity:0,
        x:"0%",
      }}
      animate={{
        opacity:1,
        x:"-50%",
      }}
      transition={{
        opacity:{duration:0.5},
        x:{
            duration:20,
            repeat:Infinity,
            ease:"linear",
            repeatType:"loop",

        }
      }}
      >
        {extendedLogos.map((item, index) => (
          <img
            key={index}
            src={item}
            className="h-9  object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
