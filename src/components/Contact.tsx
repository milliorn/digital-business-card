import Email from "./Email";
import Resume from "./Resume";

/* house the components used to contact me */
export default function Contact(): JSX.Element {
  return (
    <div className="flex justify-center py-4">
      <Email />
      <Resume />
    </div>
  );
}
