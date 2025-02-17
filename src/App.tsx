import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Interest from "./components/Interest";
import SocialMedia from "./components/SocialMedia";

/* main app that houses all components */
export function App() {
  return (
    <div className="flex justify-center m-0 p-0">
      <div className="max-w-sm overflow-x-hidden shadow-lg rounded-3xl bg-zinc-200">
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
