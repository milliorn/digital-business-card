import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Divider } from "./components/Divider";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Interest } from "./components/Interest";
import { SocialMedia } from "./components/SocialMedia";

export default function App() {
  return (
    <div className="flex justify-center p-10">
      <div className="max-w-sm overflow-hidden shadow-lg rounded-3xl bg-zinc-200">
        <Hero />
        <Info />
        <Contact />
        <Divider />
        <About />
        <Interest />
        <Divider />
        <SocialMedia />
      </div>
    </div>
  );
}
