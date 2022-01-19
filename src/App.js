import { Container } from "@material-ui/core";
import { Appbar } from "./Appbar/Appbar";
import { LandingPage } from "./LandingPage/LandingPage";

function App() {
  return (
    <Container>
      <Appbar />
      <form>
        <LandingPage />
      </form>
    </Container>
  );
}

export default App;
