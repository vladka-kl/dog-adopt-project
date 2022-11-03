import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header";

function App() {
  // here we fatch the data from the api and render it.
  return (
    <div className="App">
      
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
