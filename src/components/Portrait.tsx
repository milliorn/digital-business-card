import { Img } from "react-image";
import { useInView } from "react-intersection-observer";
import portrait from "../images/portrait.webp";

export default function Portrait() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once when the image appears
    delay: 300, // Adjust delay if needed
  });

  return (
    // Reserve the space for the image even when it hasn't loaded yet.
    <div ref={ref} style={{ width: "384px", height: "390px" }}>
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
