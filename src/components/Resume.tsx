import { HiDownload } from "react-icons/hi";

/* link to my online resume to view or download */
export default function Resume(): JSX.Element {
  return (
    <button
      aria-label="find my resume"
      type="button"
      className="px-4 py-2 ml-1 font-bold capitalize bg-gray-400 rounded-lg hover:bg-zinc-600 text-zinc-900"
    >
      <a
        aria-label="link to resume"
        className="inline-flex text-4xl text-zinc-800"
        href="https://milliorn.github.io/digital-resume/"
        rel="noreferrer"
        target="_blank"
      >
        <HiDownload />
      </a>
    </button>
  );
}
