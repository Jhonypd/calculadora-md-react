/** @format */

import "./App.css";
import HelloWorld3 from "./components/HelloWorld3";
import { HelloWorld4, HelloWorld4Provider } from "./components/HelloWorld4";
import HelloWorldOne from "./components/HelloWorld1";
import HelloWorldTwo from "./components/HelloWorld2";
import formatDateTime from "./utils/formatDateTime";
import HelloWorld5 from "./components/HelloWorld5";
import HelloWorld6 from "./components/HelloWorld6";
import HelloWorld7 from "./components/HelloWorld7";
import ParentComponent from "./components/HelloWorld8";
import HelloWorld9 from "./components/HelloWorld9";
import HelloWorld10 from "./components/HelloWorld10";

function App() {
  const dateTime = formatDateTime(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorldOne dateTime={dateTime} />
        <HelloWorldTwo />
        <HelloWorld3 />
        <HelloWorld4Provider>
          <HelloWorld4 />
        </HelloWorld4Provider>
        <HelloWorld5 />
        <HelloWorld6 />
        <HelloWorld7 />
        <ParentComponent />
        <HelloWorld9 />
        <HelloWorld10 />
      </header>
    </div>
  );
}

export default App;
