import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <>
      <h2>Input</h2>
      <input type="text" placeholder="type..." ref={inputRef} {...props} />
    </>
  );
});

export default Input;
