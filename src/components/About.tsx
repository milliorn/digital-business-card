const about =
  "Web developer with enthusiasm for React frameworks, Tailwind or Bootstrap CSS and NodeJS. Experienced in game development and deployment." as string;

export default function About(): JSX.Element {
  return (
    <div className="px-6 pt-4 pb-2">
      <span className="block px-3 py-1 my-2 mb-2 text-xl font-bold capitalize">
        About
      </span>
      <p className="block px-3 py-1 my-2 mb-2 text-sm">{about}</p>
    </div>
  );
}
