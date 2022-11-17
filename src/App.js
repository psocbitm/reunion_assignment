import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Navbar />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
