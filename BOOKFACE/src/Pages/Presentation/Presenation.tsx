import "./style.css";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedPhone from "./AnimatedPhone";
import { BiSolidCoffeeBean } from "react-icons/bi";
import Sign from "../Sign";
const imageAnimation = {
  hidden: {
    opacity: 0,
    x: -550, // Start from the left
  },
  visible: {
    opacity: 1,
    x: 0, // Move to its original position
    transition: {
      duration: 1,
    },
  },
};
const welcomeAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: 1,
    },
  },
};

function Presenation() {
  const imageControls = useAnimation();
  const imageRef = useRef(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const welcomeControls = useAnimation();
  const welcomeRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: false });
  const isWelcomeInView = useInView(welcomeRef, { once: false });

  useEffect(() => {
    const showImage = async () => {
      await imageControls.start("visible");
      if (textRef.current) {
        setTimeout(() => {
          if (textRef.current) {
            window.scrollTo({
              top: textRef.current.offsetTop,
              behavior: "smooth",
            });
          }
        }, 2000);
      }
    };

    if (isImageInView) {
      showImage();
    } else {
      imageControls.start("hidden");
    }
  }, [isImageInView]);

  useEffect(() => {
    if (isWelcomeInView) {
      welcomeControls.start("visible");
    } else {
      welcomeControls.start("hidden");
    }
  }, [isWelcomeInView]);

  return (
    <main className="text-brownd">
      <div className="mx-auto max-w-6xl pt-14">
        <section className="flex h-screen justify-center" ref={imageRef}>
          <motion.img
            src="/espressify.svg"
            className="h-full"
            alt=""
            initial="hidden"
            animate={imageControls}
            variants={imageAnimation}
          />
        </section>
        <section
          className="mt-10 flex h-[100vh] flex-col items-center justify-start"
          ref={textRef}
        >
          {/* AnimatedText component goes here */}
          <AnimatedText
            once={false}
            text="HELLO YOU!"
            el="h1"
            className="mt-8 lg:mt-12 text-center text-4xl lg:text-[80px] text-orange-900 font-medium"
          />
          <div className="flex h-full w-full flex-col justify-between lg:flex-row">
            <motion.h1
              className="flex flex-col items-center mt-8 h-full w-full px-10 text-center lg:mt-32 lg:h-full  lg:w-1/2 lg:px-0 text-brownl "
              initial="hidden"
              animate={welcomeControls}
              variants={welcomeAnimation}
              ref={welcomeRef}
            >
              <p className="font-medium flex flex-col items-center text-2xl lg:text-4xl text-yellow-800 ">Welcome to Espressify 
              <small className="lg:text-lg text-[14px] lg:mt-2 text-amber-800/60"> Where Art and Coffee Collide!</small>
                </p> 
             
              <ul className="lg:text-xl mt-10 flex flex-col text-left text-[16px] text-brownl">
                <li className="mb-2">
                  <strong className="text-orange-900 flex items-center "><BiSolidCoffeeBean/> Follow Your Passion:</strong> Discover and follow art tags,
                  curating your feed to stay inspired.
                </li>
                <li className="mt-2 mb-2 ">
                  <strong className="text-orange-900 flex items-center"><BiSolidCoffeeBean/> Tag-Based Posting:</strong> Share your art by tagging posts, ensuring
                  they reach the right audience.
                </li>
                <li>
                <strong className="text-orange-900 flex items-center"><BiSolidCoffeeBean/> Artistic Connections:</strong> Connect with fellow creators through
                  personalized messages. Dive into a world where art brings
                  people together!
                </li>
              </ul>
            </motion.h1>
            <AnimatedPhone />
          </div>
        </section>

        <section className="flex max-h-[90vh] flex-col items-center mt-[20vh] overflow-hidden">
          <AnimatedText
            el="h2"
            text={[
              "Join Espressify now and immerse yourself in a vibrant community where art and coffee collide",
            ]}
            className="text-4xl mb-20 text-orange-950 text-center w-[80%] font-medium"
            repeatDelay={10000}
          />
          <div className="h-full">
           < Sign /></div>
        </section>
      </div>
     
    </main>
  );
}

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default Presenation;
