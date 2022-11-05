import React from "react";
import ReactDOM from "react-dom";
import {mount} from 'remote/mount'

import "./index.scss";

const App = () => {

  const mountRef = React.useRef(null);
  
  React.useEffect(() => {
    mount(mountRef.current);
  }, []);
  
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: client-container</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>

      <div ref={mountRef} className="mt-10"></div>
    </div>
);}
ReactDOM.render(<App />, document.getElementById("app"));
