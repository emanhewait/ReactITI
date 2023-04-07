import "./App.css";
import { MyNav } from "./Components/MyNav";
import { MySlider } from "./Components/MySlider";
import { MyProduct } from "./Components/MyProduct";
import Student from "./Components/Student";
import Search from "./Components/Search";
function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      {/* <MySlider></MySlider>
      <MyProduct/> */}
      <Student></Student>
      <Search></Search>
      </div>
   
  );
}

export default App;
