import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Interest from "./components/Interest";
import SocialMedia from "./components/SocialMedia";

/* Main app that houses all components */
export function App() {
  return (
    <div className="flex justify-center w-full min-h-screen my-4">
      <div className="w-[360px] min-h-[600px] shadow-lg bg-zinc-200 rounded-3xl overflow-hidden">
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
