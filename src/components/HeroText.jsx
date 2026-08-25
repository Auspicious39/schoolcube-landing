import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import backgroundImage from "../assets/Background.png";

const phrases = [
  "Best School Management Portal",
  "All in one Platform",
  "Tailored to Meet your School’s Needs",
  "Secure & Compliant",
];

const TYPE_SPEED = 60;      // ms per character while typing
const DELETE_SPEED = 35;    // ms per character while deleting
const PAUSE_AFTER_TYPE = 1800; // ms to hold full phrase before deleting
const PAUSE_AFTER_DELETE = 400; // ms to pause on empty before next phrase

const useTypewriter = (words) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? currentWord.slice(0, prev.length - 1)
              : currentWord.slice(0, prev.length + 1)
          );
        },
        deleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
};


const HeroText = () => {
  const typedText = useTypewriter(phrases);
  return (
    <section
      className="relative flex h-[262px] items-center justify-center overflow-hidden rounded-[10px] bg-cover bg-center md:h-[725px] md:rounded-[8px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center text-white md:h-[369px] md:w-[968px] md:justify-between">
        <div className="flex w-[263px] flex-col items-center gap-2 md:w-auto md:gap-0">
          <h1 className="max-w-[236px] text-[22px] font-extrabold leading-[1.3] md:max-w-[654px] md:text-[64px]">
            School Management
            <br />
            Made For You!
          </h1>

          <p className="max-w-[263px] text-[14px] font-medium leading-[1.55] md:max-w-[674px] md:text-[24px]">
            All aspects of your school management consolidated into
            <br className="hidden md:block" />a single secure suite.
          </p>
        </div>

        <div className="mt-5 flex w-full max-w-[320px] items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg md:mt-8 md:max-w-[674px] md:px-7 md:py-4">
          <Search className="h-4 w-4 shrink-0 text-gray-400 md:h-6 md:w-6" />
          <span className="truncate text-left text-[13px] font-medium text-[#475467] md:text-[24px]">
            {typedText}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-gray-400 align-middle text-[13px] md:text-[20px]">
              &nbsp;
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
