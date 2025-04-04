import { AiFillLinkedin } from "react-icons/ai";

const linkedin = "https://www.linkedin.com/in/scott-milliorn";

const LinkedinIcon = AiFillLinkedin as React.FC<{ className?: string }>;

export default function Linkedin() {
  return (
    <a
      aria-label="Find me on LinkedIn"
      href={linkedin}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-zinc-400 hover:bg-zinc-600 p-3"
    >
      <LinkedinIcon className="text-4xl" />
    </a>
  );
}
