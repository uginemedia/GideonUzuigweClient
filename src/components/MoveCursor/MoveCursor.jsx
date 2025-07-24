import React, { useRef, useEffect } from "react";

const MoveCursor = () => {
  const cursor = useRef(null);
  const cursor2 = useRef(null);

  useEffect(() => {
    function moveCursor(e) {
      //Parent Cursor
      cursor.current.style.top = e.clientY + "px";
      cursor.current.style.left = e.clientX + "px";
      cursor.current.style.opacity = 1;

      //Child Cursor
      cursor2.current.style.top = e.clientY + "px";
      cursor2.current.style.left = e.clientX + "px";
      cursor2.current.style.opacity = 1;
    }

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <div ref={cursor} className="cursor"></div>
      <div ref={cursor2} className="cursor-2"></div>
    </>
  );
};

export default MoveCursor;
