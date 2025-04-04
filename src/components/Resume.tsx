import { HiDownload } from "react-icons/hi";

const DownloadIcon = HiDownload as React.FC<{ className?: string }>;

/* link to my online resume to view or download */
export default function Resume() {
  return (
    <a
      aria-label="find my resume"
      href="https://milliorn.github.io/digital-resume/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center min-w-12 min-h-12 px-6 py-3 text-xl font-bold capitalize rounded-lg bg-gray-400 hover:bg-zinc-600 text-zinc-900"
    >
      <DownloadIcon className="text-3xl text-zinc-800" />
    </a>
  );
}
