import "./App.css";
import Footer from "./components/footer/Footer";
import Join from "./components/join/Join";
import Landing from "./components/landing_page/Landing";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Join />
      <Footer />
    </>
  );
}

export default App;
