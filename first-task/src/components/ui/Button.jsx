import React from "react";

export default function Button({ text }) {
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
}
