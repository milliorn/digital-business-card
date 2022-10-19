import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";

export function SocialMedia() {
  return (
    <div className="flex justify-center pt-4 pb-8">
      <Github />
      <Linkedin />
      <Twitter />
    </div>
  );
}
