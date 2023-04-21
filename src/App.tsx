import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <>
      <Application />
      <Skills skills={["HTML", "CSS", "JS"]} />
    </>
  );
}

export default App;
