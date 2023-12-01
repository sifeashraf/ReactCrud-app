import React from "react";
import mona from "../assest/mona.gif";
export default function Loading({ loading, error, children }) {
  const elemntType = children?.type?.render?.displayName;
  if (elemntType === "Button") {
    let cloneElemnt = React.cloneElement(children, { disabled: true }, "Loading");
    return (
      <>
        {loading ? (
          cloneElemnt
        ) : error ? (
          <>
            {" "}
            {children} <p>{error}</p>
          </>
        ) : (
          children
        )}
      </>
    );
  }

  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src={mona} alt="mona loading screen" />
          <p>Please Wait a Second</p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        children
      )}
    </div>
  );
}
