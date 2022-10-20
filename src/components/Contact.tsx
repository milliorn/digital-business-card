import Email from "./Email";
import Resume from "./Resume";

export default function Contact(): JSX.Element {
  return (
    <div className="flex justify-center py-4">
      <Email />
      <Resume />
    </div>
  );
}
