const interest =
  "Passion to master Full-Stack along with Continuous Deployment and Delivery. I enjoy video game development on my spare time. When I'm not programming I play guitar, lift weights, video games, or work on cars.";

export function Interest() {
  return (
    <div className="px-6 pt-4 pb-2">
      <span className="block px-3 py-1 my-2 mb-2 text-xl font-bold capitalize">
        Interest
      </span>
      <p className="block px-3 py-1 my-2 mb-2 text-sm">{interest}</p>
    </div>
  );
}
