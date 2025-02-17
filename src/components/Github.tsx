import { AiOutlineGithub } from "react-icons/ai";

export const githubUrl = "https://github.com/milliorn" as string;

/* button to link to my repos */
export default function Github() {
  return (
    <button
      aria-label="find me on github"
      type="button"
      className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
    >
      <a
        aria-label="link to github"
        className="inline-flex text-4xl "
        href="https://github.com/milliorn"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
    </button>
  );
}
