import { AiFillMail } from "react-icons/ai";

const MailIcon = AiFillMail as React.FC<{ className?: string }>;

/* send me an email */
export default function Email() {
  return (
    <a
      aria-label="send me an email"
      href="mailto:scottmilliorn@gmail.com"
      className="flex items-center justify-center min-w-12 min-h-12 px-6 py-3 text-xl font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900"
    >
      <MailIcon className="text-3xl text-zinc-800" />
    </a>
  );
}
