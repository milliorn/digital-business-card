import "./App.css";

import Hero from "./components/Hero";

export function App(): JSX.Element {
  return (
    <div className="flex justify-center p-10">
      <div className="max-w-sm overflow-hidden shadow-lg rounded-3xl bg-zinc-200">
        <Hero />
      </div>
    </div>
  );
}
