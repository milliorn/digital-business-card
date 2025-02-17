import Github from "./Github";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";

/* houses all the social media buttons */
export default function SocialMedia() {
  return (
    <div className="flex justify-center pt-4 pb-8">
      <Github />
      <Linkedin />
      <Twitter />
    </div>
  );
}
