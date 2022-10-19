import { github } from "./Github";

const name = "Philip Milliorn";
const description = "web developer | strength coach";

export function Info() {
  return (
    <div className="px-6 py-4">
      <div className="my-2 text-xl font-bold text-center capitalize">
        {name}
      </div>
      <p className="my-1 font-semibold text-center text-gray-900 capitalize xl:text-lg">
        {description}
      </p>
      <a href={github}>
        <span className="flex justify-center mx-auto my-1 font-semibold hover:font-bold">
          {github}
        </span>
      </a>
    </div>
  );
}
