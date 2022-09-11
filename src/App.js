import "./App.css";
import Article from "./components/Article/Article";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
function App() {
  let places = data.map((place) => {
    return <><Article {...place} /> <hr className="line" /></>
    
  });
  return (
    <div className="App">
      <Navbar />
      {places}
    </div>
  );
}

export default App;
