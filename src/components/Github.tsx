import { AiOutlineGithub } from "react-icons/ai";

export const githubUrl = "https://github.com/milliorn";

const GithubIcon = AiOutlineGithub as React.FC<{ className?: string }>;

export default function Github() {
  return (
    <a
      aria-label="find me on github"
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-zinc-400 hover:bg-zinc-600 p-3"
    >
      <GithubIcon className="text-4xl" />
    </a>
  );
}
