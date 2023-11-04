import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpessions";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
