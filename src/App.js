import "./Styles/main.scss";
import Color from "./Components/Color";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          <span>/</span> Color Generator <span>/</span>
        </h1>
        <Color />
      </div>
    </div>
  );
};

export default App;
