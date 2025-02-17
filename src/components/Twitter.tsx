import { AiFillTwitterCircle } from "react-icons/ai";

export const twitter = "https://twitter.com/scottmilliorn" as string;

/* twitter button on bottom of screeen */
export default function Twitter() {
  return (
    <button
      aria-label="find me on twitter"
      type="button"
      className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900"
    >
      <a
        aria-label="link to twitter"
        target="_blank"
        className="inline-flex text-4xl"
        href={twitter}
        download
        rel="noreferrer"
      >
        <AiFillTwitterCircle />
      </a>
    </button>
  );
}
