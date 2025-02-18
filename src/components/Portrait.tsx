import { Img } from "react-image";
import { useInView } from "react-intersection-observer";
import portrait from "../images/portrait.webp";

export default function Portrait() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it runs only once when the image appears
    delay: 300, // Adjust delay if needed
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Img
          src={portrait}
          alt="picture in hero section"
          width={384}
          height={390}
          decode
        />
      ) : null}
    </div>
  );
}
