// AnimatedPhone.tsx

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const phoneAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay:1.5
    },
  },
};

const AnimatedPhone = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.img
      ref={ref}
      src="phone.svg"
      className=" w-full h-1/2 lg:h-[80vh] self-end"
      alt=""
      initial="hidden"
      animate={controls}
      variants={phoneAnimation}
    />
  );
};

export default AnimatedPhone;
