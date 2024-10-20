import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import angularLogo from "/angularLogo.png";
import libraries from "./utils/libraries.js";
import qwikLogo from "/qwikLogo.png";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h1>React + Angular + Qwik + Vite</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          name={"React"}
          url={libraries.react.url}
          logo={reactLogo}
          alt={libraries.react.description}
        />

        <Card
          name={"Angular"}
          url={libraries.angular.url}
          logo={angularLogo}
          alt={libraries.angular.description}
        />

        <Card
          name={"Qwik"}
          url={libraries.qwik.url}
          logo={qwikLogo}
          alt={libraries.qwik.description}
        />

        <Card
          name={"Vite"}
          url={libraries.vite.url}
          logo={viteLogo}
          alt={libraries.vite.description}
        />
      </div>
    </>
  );
}

export default App;
