import { Application } from "./components/application/application";
import { Counter } from "./components/counter/counter";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <>
      <Application />
      <Skills skills={["HTML", "CSS", "JS"]} />
      <Counter />
    </>
  );
}

export default App;
