import { AiOutlineGithub } from "react-icons/ai";

export const github = "https://github.com/milliorn";

export function Github() {
  return (
    <button className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600">
      <a
        className="inline-flex text-4xl "
        href={github}
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
    </button>
  );
}
