import Navbar from "./components/Navbar/Navbar";
import BottomRow from "./components/BottomRow/BottomRow";
import TopRow from "./components/TopRow/TopRow";
import "./App.css";

function App() {
  return (
    <div id="appWrap">
      <Navbar />
      <TopRow />
      <BottomRow />
    </div>
  );
}

export default App;
