import { AiOutlineGithub } from "react-icons/ai";

export const githubUrl = "https://github.com/milliorn" as string;

export default function Github(): JSX.Element {
  return (
    <button
      type="button"
      className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
    >
      <a
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
