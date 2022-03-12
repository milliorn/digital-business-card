import { AiFillMail, AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import "./App.css"
import portrait from "./images/portrait.jpg"
import resume from "./resume.pdf"

const name = "Philip Milliorn";
const description = "web developer | strength coach";
const about = "Web developer with enthusiasm for React frameworks using Tailwind CSS with NodeJS. Past experience in game development and deployment."
const interest = "Passion to master Full-Stack along with Continuous Deployment and Delivery. I still enjoy video game development on my spare time. When I'm not programming I am either playing guitar, lifting weights, video games, or working on cars."
const linkedin = "https://www.linkedin.com/in/scott-milliorn";
const twitter = "https://twitter.com/scottmilliorn";
const github = "https://github.com/milliorn";

function App() {
  return (
    <div className="flex justify-center p-10 bg-zinc-800">
      <div className="max-w-sm overflow-hidden shadow-lg rounded-3xl bg-zinc-200">
        <img className="w-full" src={portrait} alt="portrait" />
        <div className="px-6 py-4">
          <div className="my-2 text-xl font-bold text-center capitalize">{name}</div>
          <p className="my-1 font-semibold text-center text-gray-900 capitalize xl:text-lg">
            {description}
          </p>
          <a href={github}>
            <span className="flex justify-center mx-auto my-1 font-semibold hover:font-bold">{github}</span>
          </a>
        </div>
        <div className="flex justify-center py-4">
          <button className="px-4 py-2 mr-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900">
            <a className="inline-flex text-4xl text-zinc-800" href="mailto:scottmilliorn@gmail.com"><AiFillMail /></a>
          </button>
          <button className="px-4 py-2 ml-1 font-bold capitalize bg-gray-400 rounded-lg hover:bg-zinc-600 text-zinc-900">
            <a className="inline-flex text-4xl text-zinc-800" href={resume} download><HiDownload /></a>
          </button>
        </div>

        <div class="py-4">
          <div class="w-full border-t-2 border-zinc-400"></div>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="block px-3 py-1 my-2 mb-2 text-xl font-bold capitalize">About</span>
          <p className="block px-3 py-1 my-2 mb-2 text-sm">
            {about}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="block px-3 py-1 my-2 mb-2 text-xl font-bold capitalize">Interest</span>
          <p className="block px-3 py-1 my-2 mb-2 text-sm">
            {interest}
          </p>
        </div>

        <div class="py-4">
          <div class="w-full border-t-2 border-zinc-400"></div>
        </div>

        <div className="flex justify-center pt-4 pb-8">
          <button className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600">
            <a className="inline-flex text-4xl " href={github} target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
          </button>
          <button className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900">
            <a target="_blank" className="inline-flex text-4xl" href={linkedin} download rel="noreferrer"><AiFillLinkedin /></a>
          </button>
          <button className="px-4 py-2 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900">
            <a target="_blank" className="inline-flex text-4xl" href={twitter} download rel="noreferrer"><AiFillTwitterCircle /></a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
