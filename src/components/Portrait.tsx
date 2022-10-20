import { Img } from "react-image";
import portrait from "../images/portrait.webp";
import VisibilitySensor from "react-visibility-sensor";

/* wrap picture with a delay call and decode it until page finish loading */
export default function Portrait(): JSX.Element {
  return (
    <VisibilitySensor delayedCall>
      <Img
        src={portrait}
        alt="picture in hero section"
        width={384}
        height={390}
        decode
      />
    </VisibilitySensor>
  );
}
