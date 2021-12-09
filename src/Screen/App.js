import { useState } from "react";
import NextPrevious from "../component/NextPrevious";

import "./App.css";

const data = [
  {
    id: "1",
    title: "kanoun",
  },
  {
    id: "2",
    title: "mohamed",
  },
  {
    id: "3",
    title: "foued",
  },
  {
    id: "4",
    title: "said",
  },
  {
    id: "5",
    title: "raouf",
  },
  {
    id: "6",
    title: "wadoud",
  },
  {
    id: "7",
    title: "amine",
  },
];

function App() {
  const [state] = useState(data);
  const [index, setIndex] = useState(0);

  const [currentElement, setCurrentElement] = useState(data[0]);

  function handleCurrentElementChange(element = {}) {
    setCurrentElement(element);
  }

  function handleIndexChange(ind = 0) {
    setIndex(ind);
  }

  return (
    <div className="App">
      <NextPrevious
        items={state}
        index={index}
        handleCurrentElementChange={handleCurrentElementChange}
        handleIndexChange={handleIndexChange}
      />
      <div>{index}</div>
      <div>{currentElement.title}</div>
    </div>
  );
}

export default App;
