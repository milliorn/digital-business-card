import { Email } from "./Email";
import { Resume } from "./Resume";

export function Contact() {
  return <div className="flex justify-center py-4">
    <Email />
    <Resume />
  </div>;
}
