import React from "react";

import "./style.css";

export default function Parallax() {
  const rootRef = React.useRef();

  function onScroll(e) {
    const { target, wheelDelta, clientY, screenY, y, offsetY } = e;

    console.log("scroll", e);
    // console.log("scroll", target.clientHeight);

    target.style.transform = `translateY(${target.offsetTop + wheelDelta}px)`;
  }

  React.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.addEventListener("wheel", onScroll);
    }

    return () => {
      if (rootRef.current) {
        rootRef.current.removeEventListener("wheel", onScroll);
      }
    };
  }, []);

  return (
    <div className="root-app">
      <div ref={rootRef}></div>
      <div></div>
    </div>
  );
}
