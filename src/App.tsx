import "./App.css";
import { EnhancedLeftMenu } from "./Components/Enhanced_Left_Menu/EnhancedLeftMenu";
import { ArrayData } from "./Data/ArrayData";
function App() {
  return (
    <div className="App">
      <EnhancedLeftMenu data = {ArrayData}/>
      {/* <div style={{backgroundColor: 'red'}}>
      <EnhancedLeftMenu data = {ArrayData}/>
      </div> */}
    </div>
  );
}

export default App;
