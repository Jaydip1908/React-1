import React from 'react';

const CheckElement = () => {
  const b = [10, 20, 30, 40, 50];
  const elementToFind = 44;
  const message = b.includes(elementToFind) ? "No is found" : "No is not found";

  return (
    <div>
      <h2>Check Element in Array</h2>
      <h2>Array = {b.join(",")}</h2>
      <p>Element is = {elementToFind}</p>
      <p>{message}</p>
    </div>
  );
};

export default CheckElement;