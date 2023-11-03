import React from "react";
import { useEffect } from "react";

export default function Timer({ dispatch, remainingSeconds }) {
  const min = Math.floor(remainingSeconds / 60);
  const sec = Math.floor(remainingSeconds % 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 ? "0" : ""}
      {min}:{sec < 10 ? "0" : ""}
      {sec}
    </div>
  );
}
