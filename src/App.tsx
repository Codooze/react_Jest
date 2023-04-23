import { Application } from "./components/application/application";
import { Counter } from "./components/counter/counter";
import { Skills } from "./components/skills/skills";
import { MuiMode } from "./mui/mui-mode";
import { AppProviders } from "./providers/app-providers";
import { Users } from "./users/users";

function App() {
  return (
    <>
      <AppProviders>
        <Application />
        <Skills skills={["HTML", "CSS", "JS"]} />
        <Counter />
        <MuiMode />
        <Users />
      </AppProviders>
    </>
  );
}

export default App;
