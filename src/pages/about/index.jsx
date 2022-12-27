import React from "react";

const index = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <h1>About</h1>
      {arr.map((ar) => (
        <p key={ar}>{arr}</p>
      ))}
    </div>
  );
};

export default index;
