import { Img } from "react-image";
import portrait from "../images/portrait.jpg";
import VisibilitySensor from "react-visibility-sensor";

export default function Portrait(): JSX.Element {
  return (
    <VisibilitySensor delayedCall={true}>
      <Img src={portrait} decode={true} />
    </VisibilitySensor>
  );
}
