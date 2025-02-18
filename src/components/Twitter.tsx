import { AiFillTwitterCircle } from "react-icons/ai";

export const twitter = "https://twitter.com/scottmilliorn";

export default function Twitter() {
  return (
    <a
      aria-label="Find me on Twitter"
      href={twitter}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-zinc-400 hover:bg-zinc-600 p-3"
    >
      <AiFillTwitterCircle className="text-4xl" />
    </a>
  );
}
