import "./App.css";
import portrait from "./images/portrait.jpg";
function App() {
  return (
    <div className="flex flex-wrap justify-center">
      <picture className="w-1/2 px-4">
        <img
          src={portrait}
          alt="..."
          className="h-auto max-w-full align-middle border-none rounded shadow-lg"
        />
      </picture>
    </div>
  );
}

export default App;
