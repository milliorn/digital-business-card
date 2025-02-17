import { AiFillMail } from "react-icons/ai";

/* send me an email */
export default function Email() {
  return (
    <button
      aria-label="send me an email"
      type="button"
      className="px-4 py-2 mr-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900"
    >
      <a
        aria-label="link to email"
        className="inline-flex text-4xl text-zinc-800"
        href="mailto:scottmilliorn@gmail.com"
      >
        <AiFillMail />
      </a>
    </button>
  );
}
