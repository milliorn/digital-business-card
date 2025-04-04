import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

const TwitterIcon = AiFillTwitterCircle as React.FC<{ className?: string }>;

export default function Twitter() {
  return (
    <a
      aria-label="Find me on Twitter"
      href="https://twitter.com/scottmilliorn"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-zinc-400 hover:bg-zinc-600 p-3"
    >
      <TwitterIcon className="text-4xl" />
    </a>
  );
}
