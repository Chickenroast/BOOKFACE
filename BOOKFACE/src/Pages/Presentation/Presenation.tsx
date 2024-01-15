import "./style.css";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedPhone from "./AnimatedPhone";
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
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
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
  const isWelcomeInView = useInView(welcomeRef, { once: true });

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
            once
            text="HELLO YOU"
            el="h1"
            className="mt-10 text-center text-4xl lg:text-[100px]"
          />
          <div className="flex h-full w-full flex-col justify-between lg:flex-row">
            <motion.p
              className="mt-12 flex h-full w-full px-10 text-lg lg:mt-32   lg:h-full lg:w-1/2 lg:px-0  lg:text-3xl"
              initial="hidden"
              animate={welcomeControls}
              variants={welcomeAnimation}
              ref={welcomeRef}
            >
              Welcome to Espressify – Where Art and Coffee Collide! ☕️🎨🎵
              Espressify is your creative hub, uniting art enthusiasts in a
              vibrant community. Whether it's music, drawing, or any artistic
              expression, connect and celebrate the diverse world of art with
              like-minded individuals. Join us and express your passion!
            </motion.p>
            <AnimatedPhone />
          </div>
        </section>

        <section className="flex min-h-[150vh] flex-col items-center justify-center">
          <AnimatedText
            el="h2"
            text={[
              "This is written on",
              "a typing machine. Tick tick",
              "tick tack tack...",
            ]}
            className="text-4xl"
            repeatDelay={10000}
          />
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
