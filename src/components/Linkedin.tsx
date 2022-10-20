import { AiFillLinkedin } from "react-icons/ai";

const linkedin = "https://www.linkedin.com/in/scott-milliorn" as string;

export default function Linkedin() {
  return (
    <button className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900">
      <a
        target="_blank"
        className="inline-flex text-4xl"
        href={linkedin}
        download
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </button>
  );
}
