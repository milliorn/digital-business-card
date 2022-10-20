import "./App.css";
import Contact from "./components/Contact";
import Divider from "./components/Divider";

import Hero from "./components/Hero";
import Info from "./components/Info";

export function App(): JSX.Element {
  return (
    <div className="flex justify-center p-10">
      <div className="max-w-sm overflow-hidden shadow-lg rounded-3xl bg-zinc-200">
        <Hero />
        <Info />
        <Contact />
        <Divider />

      </div>
    </div>
  );
}
