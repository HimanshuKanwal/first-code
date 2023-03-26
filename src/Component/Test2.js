import React from "react";

function Test2() {
  function addingItem() {
    const newItem = `Things${array.length + 1}`;
    array.push(newItem);
    return (
      // array.push();
      console.log(array)
    );
  }

  const array = ["Things1", "Things2"];
  const value = array.map((x) => {
    return (
      // key={x}
      <p>{x}</p>
    );
  });
  return (
    <div>
      <button className="test2-btn" onClick={addingItem}>
        Add Item
      </button>
      <p>{value}</p>
    </div>
  );
}

export default Test2;
