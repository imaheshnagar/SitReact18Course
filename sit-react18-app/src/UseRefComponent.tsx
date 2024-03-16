import React, { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current!.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefComponent;
