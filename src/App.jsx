import "./App.css";
import { About } from "./component/About";
import { Activities } from "./component/Activities";
import { Committe } from "./component/Committee";
import { Flex } from "./component/Flex";
import { Header } from "./component/Header";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Flex />
      <Committe />
      <Activities />
    </>
  );
}

export default App;
